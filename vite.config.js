import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //all static assets are routed through this base url
  base: "/api-search-image/",
  plugins: [react()],
});
