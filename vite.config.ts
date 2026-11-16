import { defineConfig, type Plugin } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Case studies kept on this machine only: their source, data and media stay out of the live build.
const PRIVATE_ASSET_DIRS = ["checkalt", "accurest"]; // folders under public/

const dropPrivateAssets = (): Plugin => ({
  name: "drop-private-assets",
  apply: "build",
  closeBundle() {
    for (const dir of PRIVATE_ASSET_DIRS) {
      fs.rmSync(path.resolve(__dirname, "dist", dir), { recursive: true, force: true });
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === "production" && dropPrivateAssets(),
  ].filter(Boolean),
  resolve: {
    alias: [
      // Production builds get empty stand-ins for the private case studies.
      ...(mode === "production"
        ? [
            { find: /^@\/private\/caseStudies$/, replacement: path.resolve(__dirname, "./src/private/caseStudies.stub.ts") },
            { find: /^@\/private\/blocks$/, replacement: path.resolve(__dirname, "./src/private/blocks.stub.tsx") },
          ]
        : []),
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
}));
