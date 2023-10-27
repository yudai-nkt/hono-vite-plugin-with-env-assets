import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  const env = c.env as { ASSETS: { fetch: typeof fetch } };
  const asset = await env.ASSETS.fetch(
    new URL("/assets/static.json", c.req.url)
  ).then((r) => r.json());
  return c.json({ asset });
});

export default app;
