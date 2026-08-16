import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("patients").order("desc").collect();
  },
});

// Naya function: Patient delete karne ke liye
export const remove = mutation({
  args: { id: v.id("patients") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});

// Naya function: Patient ki notes update karne ke liye
export const updateNotes = mutation({
  args: { 
    id: v.id("patients"),
    notes: v.string(),
  },
  handler: async (ctx, { id, notes }) => {
    await ctx.db.patch(id, { notes });
  },
});