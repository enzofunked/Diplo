import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const { bucket, path } = await req.json();
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(path, 60);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json({ url: data.signedUrl });
}
