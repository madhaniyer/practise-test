import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        calm: "0 20px 40px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        calm: "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 28%), radial-gradient(circle at top right, rgba(168,85,247,0.12), transparent 25%), linear-gradient(180deg, #f8fbff 0%, #eef6ff 42%, #f8fafc 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
