import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    message: "AI feedback route placeholder",
    receivedKeys: Object.keys(body || {}),
    note: "In the next phase, connect this route to OpenAI securely using OPENAI_API_KEY.",
  });
}
