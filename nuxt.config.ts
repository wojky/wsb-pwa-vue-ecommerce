// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import path from "path";
import fs from "fs";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/main.scss"],
  buildModules: ["@nuxtjs/pwa"],
  pwa: {
    icons: [
      {
        src: "pwa.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa_large.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    manifest: {
      name: "Nazwa aplikacji",
      useWebmanifestExtension: false,
      short_name: "aplikacja",
      theme_color: "#4DB882",
    },
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost+2-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost+2.pem")),
    },
  },
});
