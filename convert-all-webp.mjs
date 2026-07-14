import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';

// Import sharp
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.error("Sharp not found. Please install.");
  process.exit(1);
}

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

async function run() {
  const files = getFiles(PUBLIC_DIR);
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const dir = path.dirname(file);
      const basename = path.basename(file, ext);
      const webpPath = path.join(dir, `${basename}.webp`);
      
      console.log(`Converting ${file} -> ${webpPath}`);
      await sharp(file).webp({ quality: 80 }).toFile(webpPath);
      
      // delete original
      fs.unlinkSync(file);
      count++;
    }
  }

  console.log(`Converted ${count} files to webp and deleted originals.`);
}

run().catch(console.error);
