import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
  }
});
