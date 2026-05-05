import { NextResponse } from "next/server";
import { mockTests } from "@/lib/tests/mock-data";

export async function GET() {
  return NextResponse.json(mockTests);
}
