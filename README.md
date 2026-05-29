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
- Built from verified v4.11 baseline.
- Embedded corrected May JSON archive.
- Date-sorted Previous / Last Saved / Month Status / Streak logic.
- Rest / Delay does not advance rotation.
- Result options: Completed / Repeat Same / Rest / Delay.
- Month Status numbers use center-anchor CSS.
- History top Close button and scrollable full-log cards.
- History display supports bold section/main titles while copy keeps raw logText.


## v4.12.1
- Based on user-tuned index.html hotspot positions.
- rotationIndex reset to 0 for Session 1 / 8 baseline.
- Runtime Prompt includes formatted HTML preview using the History display style while keeping raw copy text.
- Current/Previous movement display uses actual metadata and lineKey-specific previous log.
- Conditioning display treats Negative + A. Pistol as the movement and Burpee 40x3 as fixed suffix.
- Month Status numbers use left anchor and expand rightward.


## v4.12.2
- Based on user-tuned index(1).html positions.
- Runtime Prompt now shows only formatted preview; raw textarea remains hidden for copy text.
- Fixed Session 1 baseline, current/previous display rules, OAP Range Check display, and Conditioning suffix display.
- Rest / Delay history metadata corrected to scheduled delayed movements.
- Movement/Previous overlay width expanded to avoid truncating Conditioning labels.


## v4.12.3
- Fixed Session 1 previous by ensuring 5/19 Str. PL PU 3.3 E1 metadata exists and is preferred.
- Pull Vertical previous no longer falls back to stale 5/2 A.OAP 7-level line.
- Movement / Previous font size unified, and Last Saved width expanded to avoid Conditioning truncation.


## v4.12.4
- Previous display for Session 1/2/4/8 now uses explicit 77TR prior-stage references instead of echoing the current line.
- Top category display: Complex Push/Pull collapsed to COMPLEX; Conditioning displayed as NEURO RESET.
- Category/Movement/Previous/Last Saved overlays expanded to avoid ellipsis.


## v4.12.5
- Fixed top hierarchy: slot shows PUSH/PULL/COMPLEX/NEURO RESET; category shows detailed line such as Complex Push/Conditioning.
- Restored Previous definition: latest Completed log with the same lineKey for all 8 sessions. No fake prior-stage references.
- Runtime Prompt again uses the actual previous logText from the same lineKey.


## v4.12.6
- Conditioning current movement now treats Negative + A. Pistol as the progression target and Burpee 40x3 as a fixed suffix.
- Current Conditioning default corrected to Negative + A. Pistol 3.5 (3x5) [E2] + Burpee 40x3 after previous 3.3 E1.
- Repeat Same removed from Save Log result options; only Completed / Rest / Delay remain.


## v4.12.7
- Rotation now acts as an 8-slot sequential wheel projection from the latest Completed logs.
- Duplicate future slots, especially Conditioning slot 4 and slot 8, show sequential future stages instead of duplicating the same plan.
- Logs remain the source of truth: if a new movement appears at 3.3, progression restarts from that logged state.
- Conditioning progression treats Negative + A. Pistol as the target and Burpee 40x3 as fixed suffix.


## v4.12.8
- Fixed exposure display losing E numbering.
- Fixed SESSION NaN / 8 by assigning slotIndex in projected wheel entries.
- OAP Pull Range Check excluded from main-movement parsing for vertical pull.
- Continued sequential wheel projection logic for duplicated Conditioning future slots.


## v4.12.9
- Runtime Prompt now uses previousLogForPrompt(), restricted to actual same-lineKey logText.
- Vertical Pull prompt excludes OAP Pull Range Check as a main previous candidate.
- Added selectedSlotIndex/selectSlot() foundation so duplicated future slots can resolve different wheel positions.


## v4.12.10
- Fixed Advance Rotation after selectedSlotIndex introduction.
- Advance Rotation now updates both rotationIndex and selectedSlotIndex.
- Save Session syncs selectedSlotIndex to the new current rotation after Completed.
- Rest / Delay keeps rotationIndex unchanged and syncs selectedSlotIndex to current rotation.


## v4.12.11
- Final preview-wheel cleanup.
- Advance Rotation now moves the selected preview slot only; Save Completed advances the actual rotationIndex.
- Conditioning slot 4/8 preview can now show sequential future stages from the same base wheel.
- Top small slot title restored to COMPLEX / NEURO RESET for complex and conditioning lines.


## v4.12.12
- Embedded user-corrected JSON export as source of truth.
- Fixed top gray slot title display to force COMPLEX / NEURO RESET where applicable.
- Kept detailed category below: Complex Push/Pull and Conditioning.
- Excluded OAP Pull Range Check from Vertical Pull main parsing; 5/20 Pull uses OAP Negative metadata.

## v4.12.13 icon
- Uses user-provided 512 icon artwork as PWA icon.
- Added icon-512.png and icon-192.png.
- Added apple-touch-icon / PNG favicon links to index.html.
- Updated manifest.webmanifest icons.
- Keeps v4.12.13 fixed index behavior.


## v4.13 indicator setup
- Replaced BASE.png with uploaded BASE-SETUP New Type PSD composite.
- Added 8-slot-ref.png from uploaded 8-SLOT REF PSD for visual reference.
- Removed dashboard prompt preview and inserted 8-slot indicator board overlay in the same area.
- Added renderIndicator() based on projectedWheel(); current slot glows red, next slot green, remaining slots dim.
- Existing main overlay top coordinates were intentionally not adjusted.

## v4.13R indicator ref
- Removed bottom Generate / Copy / Save hotspots.
- Reworked 8-slot indicator to text-symbol style only: no buttons, no cards, no arbitrary background image.
- Indicator state uses only size/color/brightness: active red, next green, remaining dim.
- Existing dynamic overlay top coordinates remain untouched.

## v4.13R2 indicator ref-position
- Indicator now uses the same text placement structure as the uploaded 8-SLOT REF:
  label row, PU-PL-CX__NR flow row, and two movement rows.
- No custom cards/buttons/backgrounds were added.
- Bottom three hotspots remain removed.

## v4.13R5 static guide fix
- Rebuilt BASE.png from exact PSD: BASE-SETUP__8SLOT.psd using imagemagick.
- Keeps separators/arrows/underscores in BASE image and overlays only dynamic text.

## V4.14.1
- Hotfix: seedData JSON is embedded without re.sub backslash interpretation, preventing JSON.parse startup failure.
- Integrated 2026-05-30 JSON backup.
- Static Position restored as line-specific static / Adv. L-sit 6s.

## V4.14.2
- Locked 8-slot lower indicator layout to the user's final index(4).html coordinates.
- Only active colors/text content change dynamically.
- Keeps V4.14.1 JSON integration and static position logic.

## V4.14.3
- Fixed 8-slot indicator output order.
- indMove1~8 now map to fixed slotIndex 0~7 positions.
- Current slot changes color only; text positions no longer rotate from selected slot.
