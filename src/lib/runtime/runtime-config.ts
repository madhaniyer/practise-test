export type FeedbackMode = "ai" | "local";

export interface RuntimeConfig {
  feedbackMode: FeedbackMode;
}

let runtimeConfig: RuntimeConfig = {
  feedbackMode: process.env.OPENAI_API_KEY ? "ai" : "local",
};

export function getRuntimeConfig(): RuntimeConfig {
  return runtimeConfig;
}

export function setFeedbackMode(mode: FeedbackMode): RuntimeConfig {
  runtimeConfig = {
    ...runtimeConfig,
    feedbackMode: mode,
  };
  return runtimeConfig;
}
