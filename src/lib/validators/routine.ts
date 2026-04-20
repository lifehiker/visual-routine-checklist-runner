import { z } from "zod";

export const routineStepSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Step title is required"),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  imageType: z.enum(["emoji", "upload"]).default("emoji"),
  emoji: z.string().default("✅"),
  durationLabel: z.string().optional(),
  position: z.number().optional(),
});

export const routineSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().optional(),
  description: z.string().optional(),
  lockSequence: z.boolean().default(false),
  steps: z.array(routineStepSchema).default([]),
});

export type RoutineFormValues = z.infer<typeof routineSchema>;
export type RoutineStepFormValues = z.infer<typeof routineStepSchema>;
