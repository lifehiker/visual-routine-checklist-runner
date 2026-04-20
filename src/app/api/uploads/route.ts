import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { canUploadPhoto } from "@/lib/plan-limits";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;
  const canUpload = await canUploadPhoto(userId);
  if (!canUpload) return NextResponse.json({ error: "Photo upload limit reached. Upgrade to upload more photos." }, { status: 403 });
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const ext = file.name.split(".").pop() || "jpg";
  const filename = userId + "-" + Date.now() + "." + ext;
  const uploadDir = process.env.NODE_ENV === "production"
    ? "/data/uploads"
    : path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, filename), buffer);
  const url = "/uploads/" + filename;
  const asset = await prisma.imageAsset.create({
    data: { userId, url, source: "upload" },
  });
  return NextResponse.json({ url: asset.url });
}
