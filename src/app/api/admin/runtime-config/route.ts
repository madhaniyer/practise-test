import { NextResponse } from "next/server";
import { getRuntimeConfig, setFeedbackMode } from "@/lib/runtime/runtime-config";

export async function GET() {
  return NextResponse.json(getRuntimeConfig());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const feedbackMode = body?.feedbackMode;

    if (feedbackMode !== "ai" && feedbackMode !== "local") {
      return NextResponse.json(
        { error: "Invalid feedbackMode. Use 'ai' or 'local'." },
        { status: 400 }
      );
    }

    const updated = setFeedbackMode(feedbackMode);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to update runtime config.",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
