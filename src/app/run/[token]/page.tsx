import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { RunMode } from "@/components/routines/run-mode";

export default async function PublicRunPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const shareLink = await prisma.shareLink.findUnique({
    where: { token, isActive: true },
    include: {
      routine: {
        include: { steps: { orderBy: { position: "asc" } } },
      },
    },
  });
  if (!shareLink) notFound();
  return <RunMode routine={shareLink.routine} shareLinkId={shareLink.id} />;
}
