import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://192.168.90.91/apps/test_hr/intranet/test.php",
    },
  },
  plugins: [
    react(),
    nodePolyfills({
      include: ["path"],
    }),
  ],
  resolve: {
    alias: {
      // Map Node.js core modules to browser equivalents
      process: "process/browser",
      buffer: "buffer",
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      // ... other aliases
    },
  },
});
