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


## v4.12
- v4.11 final layout retained.
- May 1–28 log archive embedded.
- Rest / Delay no longer advances rotation.
- Previous uses current lineKey, date-sorted latest completed log, excluding Rest / Delay.
- Month status and streak use date-sorted logs.
- Result options simplified to Completed / Repeat Same / Rest / Delay.
- History top Close button and scroll behavior improved.


## v4.12 fix 0519
- Corrected 2026-05-19 from Rest / Delay to Completed Push / Str. PL PU 3.3 (3×3) [E1].
- May Rest / Delay count becomes 4.
- Uses localStorage key nsd6_v0412_fix0519 to avoid reloading the earlier bad v4.12 state.
