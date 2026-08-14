import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listPublished = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .order("desc")
      .collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
  },
});

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("blogPosts").order("desc").collect();
  },
});

export const create = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    body: v.string(),
    coverImageId: v.optional(v.id("_storage")),
    category: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("blogPosts", {
      ...args,
      published: false,
      createdAt: Date.now(),
    });
  },
});

export const publish = mutation({
  args: {
    id: v.id("blogPosts"),
    published: v.boolean(),
  },
  handler: async (ctx, { id, published }) => {
    await ctx.db.patch(id, {
      published,
      publishedAt: published ? Date.now() : undefined,
    });
  },
});

export const remove = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});