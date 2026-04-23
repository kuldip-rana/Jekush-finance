const sharp = require('sharp');
const path = require('path');

async function getColors() {
  try {
    const { data, info } = await sharp(path.join(__dirname, 'src', 'assets', 'cropped-logo.webp'))
      .raw()
      .toBuffer({ resolveWithObject: true });

    const colors = {};
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Filter out pure white/black or near white/black
      if (r > 240 && g > 240 && b > 240) continue;
      if (r < 15 && g < 15 && b < 15) continue;
      
      // Filter out the dominant orange (#ee7f1a and similar)
      if (r > 200 && g > 100 && b < 50) continue;

      const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      colors[hex] = (colors[hex] || 0) + 1;
    }

    const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 5);
    console.log('Top colors:');
    sorted.forEach(([hex, count]) => console.log(`${hex}: ${count}`));
  } catch (err) {
    console.error('Error reading image:', err);
  }
}

getColors();
