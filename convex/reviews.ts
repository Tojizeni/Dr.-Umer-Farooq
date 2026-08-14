import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listApproved = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("reviews")
      .withIndex("by_approved", (q) => q.eq("approved", true))
      .order("desc")
      .collect();
  },
});

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("reviews").order("desc").collect();
  },
});

export const create = mutation({
  args: {
    patientName: v.string(),
    rating: v.number(),
    body: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("reviews", {
      ...args,
      approved: false,
      createdAt: Date.now(),
    });
  },
});

export const approve = mutation({
  args: {
    id: v.id("reviews"),
    approved: v.boolean(),
  },
  handler: async (ctx, { id, approved }) => {
    await ctx.db.patch(id, { approved });
  },
});