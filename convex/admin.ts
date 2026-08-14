import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const login = mutation({
  args: { password: v.string() },
  handler: async (ctx, { password }) => {
    // Apna password yahan set kar lein
    const correctPassword = "Doctor@123"; 
    
    if (password === correctPassword) {
      return true;
    }
    throw new Error("Invalid Password");
  },
});