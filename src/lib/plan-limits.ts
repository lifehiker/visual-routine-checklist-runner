import { prisma } from "@/lib/prisma";

export async function getUserPlan(userId: string): Promise<string> {
  try {
    const sub = await prisma.subscription.findUnique({ where: { userId } });
    return sub?.plan ?? "free";
  } catch {
    return "free";
  }
}

export async function canCreateRoutine(userId: string): Promise<boolean> {
  const plan = await getUserPlan(userId);
  if (plan !== "free") return true;
  const count = await prisma.routine.count({ where: { userId, isArchived: false } });
  return count < 3;
}

export async function canUploadPhoto(userId: string): Promise<boolean> {
  const plan = await getUserPlan(userId);
  if (plan !== "free") return true;
  const count = await prisma.imageAsset.count({ where: { userId } });
  return count < 10;
}
