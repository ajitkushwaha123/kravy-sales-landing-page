import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const TARGET_DIR = './public/assets/pain-points';
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

const images = [
  'https://kravy-datastore.s3.ap-southeast-2.amazonaws.com/1.png',
  'https://kravy-datastore.s3.ap-southeast-2.amazonaws.com/2.png',
  'https://kravy-datastore.s3.ap-southeast-2.amazonaws.com/3.png',
  'https://kravy-datastore.s3.ap-southeast-2.amazonaws.com/5.png',
  'https://kravy-datastore.s3.ap-southeast-2.amazonaws.com/6.png',
  'https://kravy-datastore.s3.ap-southeast-2.amazonaws.com/7.png',
];

async function main() {
  try {
    let sharp;
    try {
      sharp = (await import('sharp')).default;
    } catch (e) {
      console.log('sharp not found, installing locally...');
      execSync('npm install --no-save sharp', { stdio: 'inherit' });
      sharp = (await import('sharp')).default;
    }

    for (const url of images) {
      const filename = path.basename(url, '.png') + '.webp';
      const destPath = path.join(TARGET_DIR, filename);

      console.log(`Downloading ${url}...`);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      console.log(`Converting and saving to ${destPath}...`);
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(destPath);
      console.log(`Saved ${filename}`);
    }

    console.log('All images downloaded and converted successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
