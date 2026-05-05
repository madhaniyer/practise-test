import { NextResponse } from "next/server";
import { mockAttempts } from "@/lib/tests/mock-data";

export async function GET() {
  return NextResponse.json(mockAttempts);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: "Attempt saved (placeholder)", payload: body }, { status: 201 });
}
