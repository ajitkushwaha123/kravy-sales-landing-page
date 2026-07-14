import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const replacedFiles = new Set();

const replacements = [
  'kravy-app.png',
  'kravy-web.png',
  'printer.png',
  'qr-code-ordering.png',
  'rolls.png',
  'swiggy.png',
  'toing.png',
  'client_anjali.png',
  'client_karan.png',
  'client_rohit.png',
  'fssai.png',
  'kravy_pos_dashboard.png'
];

function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getFiles(SRC_DIR);

for (const file of files) {
  if (file.match(/\.(js|jsx|ts|tsx|css|json)$/)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    for (const target of replacements) {
      if (content.includes(target)) {
        const webpTarget = target.replace('.png', '.webp');
        const regex = new RegExp(target, 'g');
        content = content.replace(regex, webpTarget);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content);
      replacedFiles.add(file);
      console.log(`Updated paths in: ${file}`);
    }
  }
}

console.log(`Done. Updated ${replacedFiles.size} files.`);
