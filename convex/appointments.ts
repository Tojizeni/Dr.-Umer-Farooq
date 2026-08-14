import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    preferredDate: v.string(),
    preferredTime: v.string(),
    consultationType: v.union(
      v.literal("In-person"),
      v.literal("Online"),
      v.literal("WhatsApp")
    ),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const appointmentId = await ctx.db.insert("appointments", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
    });

    // Agar patient pehle se record nahi hai, toh naya patient bana do
    const existing = await ctx.db
      .query("patients")
      .withIndex("by_phone", (q) => q.eq("phone", args.phone))
      .first();

    if (!existing) {
      await ctx.db.insert("patients", {
        name: args.name,
        phone: args.phone,
        email: args.email,
        createdAt: Date.now(),
      });
    }

    return appointmentId;
  },
});

export const listByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, { status }) => {
    return await ctx.db
      .query("appointments")
      .withIndex("by_status", (q) => q.eq("status", status as any))
      .order("desc")
      .collect();
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("appointments"),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
  },
  handler: async (ctx, { id, status }) => {
    await ctx.db.patch(id, { status });
  },
});

export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("appointments").collect();
    const today = new Date().toISOString().split("T")[0];
    return {
      today: all.filter((a) => a.preferredDate === today).length,
      pending: all.filter((a) => a.status === "pending").length,
      confirmed: all.filter((a) => a.status === "confirmed").length,
      completed: all.filter((a) => a.status === "completed").length,
      cancelled: all.filter((a) => a.status === "cancelled").length,
    };
  },
});