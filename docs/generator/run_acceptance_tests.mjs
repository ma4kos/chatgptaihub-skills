import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TG = require("./generator-core.js");

const report = TG.runAcceptanceTests();
console.log(JSON.stringify(report, null, 2));
const outPath = path.join(__dirname, "ACCEPTANCE_RESULTS.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
process.exit(report.ok ? 0 : 1);
