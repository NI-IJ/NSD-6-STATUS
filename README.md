# NSD-6 STATUS CONTROL v0.4.10

Small behavior patch from v0.4.9.

## Changes
- Restored LAST SAVED dynamic overlay.
  - Default: `-`
  - After Save Session: `YYYY-MM-DD · Exercise`
- Expanded main red Generate Runtime Prompt hotspot.
- Expanded lower Generate hotspot.
- Generate action toast changed to confirm button operation.
- Storage key: `nsd6_v0410`

## Dynamic overlays
- Exposure
- Slot
- Category
- Movement
- Rotation
- Previous
- Last Saved
- Month/year
- Sessions count
- Rests count
- Streak count

## Deploy
Replace/upload:
- index.html
- BASE.png
- manifest.webmanifest
- sw.js
- README.md

Open:
https://ni-ij.github.io/NSD-6-STATUS/?v=4.10


Patch note: BASE.png replaced with updated source image and adjustable ovBuild overlay added for build info.


Patch note: BASE.png regenerated from uploaded PSD source; ovBuild overlay retained.


## v4.12 hotfix1
- Rebuilt from verified v4.11 baseline.
- May log archive is stored in a non-executable JSON block to avoid JS breakage.
- Corrected 2026-05-19 to Completed Push / Str. PL PU 3.3 (3×3) [E1].
- Rest / Delay count is 4.
- Legacy localStorage auto-load disabled for this package to prevent old broken state overriding seed data.
