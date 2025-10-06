import { supabase } from "@/lib/supabase/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const body = await req.json();
  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();
  if (userErr || !user)
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { first_name, last_name } = body;
  const { data, error } = await supabase
    .from("profiles")
    .upsert({ id: user.id, first_name, last_name })
    .select()
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ profile: data });
}
