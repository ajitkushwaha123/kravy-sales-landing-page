import fs from 'fs';
import path from 'path';

const ASSETS_DIR = './public/assets';
const SRC_DIR = './src';

// Recursively get all files
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

const allAssets = getFiles(ASSETS_DIR);
const allSrcFiles = getFiles(SRC_DIR);

// Read all src content into memory (since it's a small project, this is fine)
let allSrcContent = '';
for (const srcFile of allSrcFiles) {
  if (srcFile.match(/\.(js|jsx|ts|tsx|css|json)$/)) {
    allSrcContent += fs.readFileSync(srcFile, 'utf8') + '\n';
  }
}

let deletedCount = 0;

for (const assetPath of allAssets) {
  const ext = path.extname(assetPath);
  if (!['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'].includes(ext)) continue;

  const basename = path.basename(assetPath);
  
  // Quick check: is the exact filename mentioned anywhere in the src files?
  if (!allSrcContent.includes(basename)) {
    console.log(`Unused asset found: ${assetPath} - Deleting...`);
    fs.unlinkSync(assetPath);
    deletedCount++;
  }
}

console.log(`Cleanup complete. Deleted ${deletedCount} unused assets.`);
