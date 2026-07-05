# AlphonsoMarketing-Pro

Landing page for the Alphonso Ecosystem - Privacy-first local LLM agents for marketing teams.

## What This Is

This repository contains the GitHub Pages site for Alphonso Ecosystem. The landing page showcases 9 specialized AI agents that operate entirely on-device:
- **Jose** - The Router (Task decomposition & orchestration)
- **Maria** - The Governor (Governance, risk, compliance)
- **Alphonso** - The Architect (System design & workflow)
- **Miya** - The Creator (Content & creative generation)
- **Marcus** - The Distributor (Deployment & publishing)
- **Hector** - The Curator (Research & curation)
- **Echo** - The Analyzer (Analytics & insights)
- **Nova** - The Innovator (Trend spotting & innovation)
- **Sentinel** - The Defender (Security & monitoring)

## Relationship to AlphonsoEcosystem

This is a companion marketing site. The main product codebase lives in [`obsidian-media/AlphonsoEcosystem`](https://github.com/Thatisshayan/AlphonsoEcosystem). This landing page is intentionally separate to keep the product repo lean.

## Development

```bash
# Clone the repo
git clone https://github.com/Thatisshayan/AlphonsoMarketing-Pro

# Preview locally
npx serve .

# Optimize images (requires Node.js)
npm run optimize-images
```

## Deployment

The site auto-deploys via GitHub Actions to GitHub Pages on every push to `main`. No manual intervention required.

## Asset Optimization

All agent portraits and hero images are optimized for web delivery:
- WebP format with PNG fallback for older browsers
- Responsive `srcset` for different viewport sizes
- Target sizes: portraits ≤150KB, hero ≤200KB, icons ≤20KB

## Contributing

Documentation, design iterations, and content improvements welcome. See the [product repo](https://github.com/Thatisshayan/AlphonsoEcosystem) for core feature contributions.