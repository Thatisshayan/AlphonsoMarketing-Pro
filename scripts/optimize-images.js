const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');

// WebP sizes for responsive images
const PORTRAIT_SIZES = { 480: 150, 960: 150, 1600: 150 }; // KB limits
const HERO_SIZES = { 480: 150, 960: 200, 1600: 200 }; // KB limits

async function generateSizes(webpPath, sizes) {
    if (!fs.existsSync(webpPath)) return;
    
    const metadata = await sharp(webpPath).metadata();
    const currentWidth = metadata.width || 1600;
    
    for (const [targetWidth, maxSizeKB] of Object.entries(sizes)) {
        if (currentWidth < parseInt(targetWidth)) continue;
        
        const outputPath = webpPath.replace('.webp', `-${targetWidth}.webp`);
        if (fs.existsSync(outputPath)) continue;
        
        let buffer = await sharp(webpPath)
            .resize(parseInt(targetWidth))
            .webp({ quality: 85 })
            .toBuffer();
        
        let quality = 80;
        while (buffer.length > maxSizeKB * 1024 && quality > 40) {
            buffer = await sharp(webpPath)
                .resize(parseInt(targetWidth))
                .webp({ quality })
                .toBuffer();
            quality -= 5;
        }
        
        await sharp(buffer).toFile(outputPath);
        console.log(`Created: ${outputPath} (${(buffer.length / 1024).toFixed(1)}KB)`);
    }
}

async function main() {
    // Generate responsive sizes for hero
    const heroWebp = path.join(ASSETS_DIR, 'hero_crew_v5.webp');
    if (fs.existsSync(heroWebp)) {
        await generateSizes(heroWebp, HERO_SIZES);
    }
    
    // Generate responsive sizes for agent portraits
    const agents = ['jose', 'maria', 'alphonso', 'miya', 'marcus', 'hector', 'echo', 'nova', 'sentinel'];
    for (const agent of agents) {
        const webpPath = path.join(ASSETS_DIR, `${agent}.webp`);
        if (fs.existsSync(webpPath)) {
            await generateSizes(webpPath, PORTRAIT_SIZES);
        }
    }
    
    console.log('Responsive image generation complete');
}

main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});