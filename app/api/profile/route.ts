import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const body = await req.json();
  const { first_name, last_name, address } = body;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user)
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const up = await supabase
    .from("profiles")
    .upsert({ id: user.id, first_name, last_name })
    .select()
    .single();

  if (up.error)
    return NextResponse.json({ error: up.error.message }, { status: 400 });

  if (address) {
    const ins = await supabase
      .from("addresses")
      .insert({ user_id: user.id, ...address });
    if (ins.error)
      return NextResponse.json({ error: ins.error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
