import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const indexPath = join(root, "out", "index.html");
const googlePath = join(root, "out", "google42cbd228e3c64c75.html");
const expectedGoogle =
  "google-site-verification: google42cbd228e3c64c75.html";

if (!existsSync(indexPath)) {
  console.error("Missing out/index.html — run `npm run build` first.");
  process.exit(1);
}

const index = readFileSync(indexPath, "utf8");
if (!index.includes("Konark") && !index.includes("Engineered for Metal")) {
  console.error("out/index.html does not look like the Konark site.");
  process.exit(1);
}

if (!existsSync(googlePath)) {
  console.error(
    "Missing out/google42cbd228e3c64c75.html — keep the file in public/.",
  );
  process.exit(1);
}

const google = readFileSync(googlePath, "utf8").trim();
if (google !== expectedGoogle) {
  console.error("Google verification file content mismatch.");
  process.exit(1);
}

console.log("Build output OK: out/index.html and Google verification file.");
