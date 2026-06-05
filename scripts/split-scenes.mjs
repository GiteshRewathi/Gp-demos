import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/assets/ganesha/scenes/grid.png");
const outDir = path.join(__dirname, "../public/assets/ganesha/scenes");

const names = [
  "evening",
  "morning",
  "afternoon",
  "night",
  "rain",
  "heavy-rain",
  "crafting-1",
  "crafting-2",
  "crafting-3",
  "final",
];

const meta = await sharp(input).metadata();
const cellW = Math.floor(meta.width / 5);
const cellH = Math.floor(meta.height / 2);

let i = 0;
for (let row = 0; row < 2; row++) {
  for (let col = 0; col < 5; col++) {
    await sharp(input)
      .extract({ left: col * cellW, top: row * cellH, width: cellW, height: cellH })
      .png()
      .toFile(path.join(outDir, `${names[i]}.png`));
    console.log(`Created ${names[i]}.png`);
    i++;
  }
}
