import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#090D1B", panel: "#11182B", violet: "#8B5CF6", gold: "#F5C76B" }, boxShadow: { glow: "0 0 50px rgba(139,92,246,.18)" } } },
  plugins: []
};
export default config;
