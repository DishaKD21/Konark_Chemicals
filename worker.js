/**
 * Serves the static Next.js export from `out/` (see wrangler.toml [assets]).
 * Do not replace this with a placeholder "Hello world" handler.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
