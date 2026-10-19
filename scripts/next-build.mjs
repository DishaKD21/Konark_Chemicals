/**
 * Cloudflare CI runs `npm run build` without CLOUDFLARE_BUILD=1.
 * Docker sets DOCKER_BUILD=1 for standalone output.
 */
import { spawnSync } from "node:child_process";

const env = { ...process.env };

if (env.DOCKER_BUILD !== "1") {
  env.CLOUDFLARE_BUILD = "1";
}

const result = spawnSync("next", ["build"], {
  stdio: "inherit",
  env,
  shell: true,
});

process.exit(result.status === null ? 1 : result.status);
