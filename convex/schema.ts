import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables, // Convex Auth ke tables (users, authAccounts, etc.)

  appointments: defineTable({
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
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_date", ["preferredDate"])
    .index("by_created", ["createdAt"]),

  patients: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_phone", ["phone"])
    .index("by_created", ["createdAt"]),

  messages: defineTable({
    name: v.string(),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    body: v.string(),
    read: v.boolean(),
    createdAt: v.number(),
  }).index("by_read", ["read"]),

  blogPosts: defineTable({
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    body: v.string(),
    coverImageId: v.optional(v.id("_storage")),
    category: v.string(),
    published: v.boolean(),
    publishedAt: v.optional(v.number()),
    createdAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_category", ["category"]),

   treatments: defineTable({
    slug: v.string(),
    title: v.string(),
    shortDescription: v.string(),
    detailedDescription: v.string(),
    icon: v.string(),
    order: v.number(),
  })
    .index("by_order", ["order"])
    .index("by_slug", ["slug"]), // <-- Yeh line add ki hai

  reviews: defineTable({
    patientName: v.string(),
    rating: v.number(),
    body: v.string(),
    approved: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_approved", ["approved"])
    .index("by_rating", ["rating"]),
});