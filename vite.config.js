import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    base: "/intranet/",
    proxy: {
      "/api": "https://192.168.90.91/apps/test_hr/intranet/test.php",
    },
  },
  plugins: [react()],
});
