// app/api/sign-upload/route.ts (your file)
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function serverClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

function randomKey(ext = "png") {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const rand = crypto.randomUUID();
  return `public/${y}/${m}/${d}/${rand}.${ext}`;
}

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { bucket = "quotes", filename = `signature-${Date.now()}.png` } =
      await req.json();

    const ext = filename.split(".").pop()?.toLowerCase() || "png";
    const objectPath = randomKey(ext);

    const supabase = serverClient();

    // 1) Signed PUT URL (short-lived)
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUploadUrl(objectPath);
    if (error)
      return NextResponse.json({ error: error.message }, { status: 400 });

    // 2) Public URL (works if bucket has public read policy)
    const { data: pub } = supabase.storage
      .from(bucket)
      .getPublicUrl(objectPath);

    return NextResponse.json({
      uploadUrl: data.signedUrl, // use fetch PUT with "x-upsert": "true"
      objectPath,
      publicUrl: pub?.publicUrl ?? null,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}
