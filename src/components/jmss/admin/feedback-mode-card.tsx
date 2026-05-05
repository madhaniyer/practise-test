"use client";

import { useEffect, useState } from "react";

interface RuntimeConfig {
  feedbackMode: "ai" | "local";
}

export function FeedbackModeCard() {
  const [config, setConfig] = useState<RuntimeConfig>({ feedbackMode: "local" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadConfig() {
      try {
        setLoading(true);
        const response = await fetch("/api/admin/runtime-config", { cache: "no-store" });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload?.error || "Failed to load feedback mode.");
        setConfig(payload);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown config error");
      } finally {
        setLoading(false);
      }
    }

    loadConfig();
  }, []);

  async function handleToggle() {
    const nextMode = config.feedbackMode === "ai" ? "local" : "ai";
    try {
      setSaving(true);
      setError(null);
      const response = await fetch("/api/admin/runtime-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedbackMode: nextMode }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.error || "Failed to update feedback mode.");
      setConfig(payload);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown save error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="card-shell p-6">
      <h2 className="text-xl font-semibold text-slate-900">Feedback Mode Control</h2>
      <p className="mt-1 text-sm text-slate-600">
        Toggle the student written-answer experience between true AI feedback and local coach mode.
      </p>

      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm text-slate-500">Current Mode</div>
          <div className="mt-1 text-lg font-semibold text-slate-900">
            {loading ? "Loading..." : config.feedbackMode === "ai" ? "AI Coach Mode" : "Local Coach Mode"}
          </div>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            {config.feedbackMode === "ai"
              ? "Students receive top-band model answers plus live AI critique. If AI fails at runtime, the app falls back to local coach guidance automatically."
              : "Students receive top-band model answers plus local coach guidance only. AI calls are not attempted while local mode is active."}
          </p>
        </div>

        <button
          type="button"
          onClick={handleToggle}
          disabled={loading || saving}
          className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60 ${config.feedbackMode === "ai" ? "bg-fuchsia-600 hover:bg-fuchsia-700" : "bg-slate-900 hover:bg-slate-800"}`}
        >
          <span className={`relative inline-flex h-6 w-11 items-center rounded-full ${config.feedbackMode === "ai" ? "bg-white/30" : "bg-white/20"}`}>
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${config.feedbackMode === "ai" ? "translate-x-5" : "translate-x-1"}`} />
          </span>
          {saving ? "Saving..." : config.feedbackMode === "ai" ? "Switch to Local Coach" : "Switch to AI Coach"}
        </button>
      </div>

      {error ? <div className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div> : null}
    </div>
  );
}
