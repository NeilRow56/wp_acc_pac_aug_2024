import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().min(1).max(50),
  workSuspended: z.boolean().optional(),
  category: z.enum([
    "limited_company",
    "partnership",
    "sole_trader",
    "charity",
    "other",
  ]),
  status: z.enum(["awaiting_ml_checks", "active", "archived"]),
});
