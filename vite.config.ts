import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// @ts-ignore
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-ignore
      "@": resolve(__dirname, "./src"),
    },
  },
});
