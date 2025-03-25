import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vitePluginSocketIO from "vite-plugin-socket-io";
import { socketEvents } from "./server";

export default defineConfig({
  plugins: [tailwindcss(), vitePluginSocketIO({ socketEvents })],
});
