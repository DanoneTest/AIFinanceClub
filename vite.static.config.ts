// Standalone SPA build for a fully static, backend-free export.
// Run: bun run build:static
// Output: dist-static/  -> open dist-static/index.html in any browser (or any static host).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";

export default defineConfig({
  root: path.resolve(__dirname, "static-export"),
  base: "/AIFinanceClub/",
  publicDir: path.resolve(__dirname, "public"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: path.resolve(__dirname, "src/routes"),
      generatedRouteTree: path.resolve(__dirname, "src/routeTree.gen.ts"),
    }),
    react(),
    tsconfigPaths({ projects: [path.resolve(__dirname, "tsconfig.json")] }),
    tailwindcss(),
  ],
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
    target: "es2020",
    assetsInlineLimit: 0,
  },
});
