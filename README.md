# NSD-6 Control Panel v0.3

Compact mobile PWA prototype.

## Changes
- Mobile typography and spacing reduced
- Safer state loading without structuredClone dependency
- Reads old v0.2 local data if available, saves to v0.3 key
- Same core functions: Generate Runtime Prompt, Save Log, History, Rotation, Export/Import

## Update GitHub Pages
Upload and replace:
- index.html
- manifest.webmanifest
- sw.js
- README.md

If the old UI remains, hard-refresh or wait for cache/service worker update.
