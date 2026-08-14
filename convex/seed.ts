import { mutation } from "./_generated/server";

export const seedTreatments = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("treatments").first();
    if (existing) return "Already seeded";

    const treatments = [
      { slug: "migraine-headache", title: "Migraine & Headache", icon: "Brain", shortDescription: "Supportive care for chronic headaches and migraines.", detailedDescription: "Homeopathic supportive care for chronic headaches and migraines focuses on understanding individual triggers and providing holistic management.", order: 1 },
      { slug: "allergies", title: "Allergies", icon: "Wind", shortDescription: "Supportive care for various allergic conditions.", detailedDescription: "Homeopathic supportive care for allergies.", order: 2 },
      { slug: "skin-problems", title: "Skin Problems", icon: "Hand", shortDescription: "Supportive care for skin concerns.", detailedDescription: "Homeopathic supportive care for skin concerns.", order: 3 },
      { slug: "digestive-problems", title: "Digestive Problems", icon: "Soup", shortDescription: "Supportive care for digestive wellness.", detailedDescription: "Homeopathic supportive care for digestive issues.", order: 4 },
      { slug: "joint-muscle-pain", title: "Joint & Muscle Pain", icon: "Bone", shortDescription: "Supportive care for musculoskeletal comfort.", detailedDescription: "Homeopathic supportive care for joint pain.", order: 5 },
      { slug: "respiratory-issues", title: "Respiratory Issues", icon: "Wind", shortDescription: "Supportive care for respiratory wellness.", detailedDescription: "Homeopathic supportive care for respiratory issues.", order: 6 },
      { slug: "stress-sleep", title: "Stress & Sleep Problems", icon: "Moon", shortDescription: "Supportive care for stress and sleep.", detailedDescription: "Homeopathic supportive care for stress and sleep problems.", order: 7 },
      { slug: "womens-health", title: "Women's Health", icon: "Heart", shortDescription: "Supportive care for women's wellness.", detailedDescription: "Homeopathic supportive care for women's wellness.", order: 8 },
      { slug: "childrens-health", title: "Children's Health", icon: "Baby", shortDescription: "Supportive care for children's wellness.", detailedDescription: "Homeopathic supportive care for children's wellness.", order: 9 },
    ];

    for (const t of treatments) {
      await ctx.db.insert("treatments", t);
    }
    return "Seeded successfully";
  },
});