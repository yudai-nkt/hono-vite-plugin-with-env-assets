import { type UserConfig } from "vite";
import pages from "@hono/vite-cloudflare-pages";
import devServer, { defaultOptions } from "@hono/vite-dev-server";

export default {
  plugins: [
    pages(),
    devServer({
      exclude: [...defaultOptions.exclude, /^\/assets\/.+/],
    }),
  ],
} satisfies UserConfig;
