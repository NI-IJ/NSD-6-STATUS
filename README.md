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

## V4.14.4 WHITE
- Applied uploaded index(5).html.
- Replaced BASE.png from BASE-SETUP__WHITE.psd.
- No logic/layout reshaping beyond version/storage bump.

## V4.14.5
- Applied test static BASE from uploaded PSD.
- Version bumped from V4.14.4 to V4.14.5.
- No logic changes beyond version/storage/cache update.

## V4.14.5 FINAL
- Applied uploaded final index(6).html.
- Replaced BASE.png from uploaded BASE-SETUP__8SLOT(1).psd.
- Removed unused 8-slot-ref.png.
- Kept version/storage line at V4.14.5 / nsd6_v04145.

## V4.14.5 FINAL BASEFIX
- Kept final index unchanged.
- Replaced BASE.png from corrected uploaded PSD only.

## V4.14.5 RELEASE
- Applied final uploaded index(7).html.
- Replaced BASE.png from final uploaded PSD.
- Integrated final exported JSON backup into seedData.
- Removed unused 8-slot-ref.png.
- Kept app version/storage at V4.14.5 / nsd6_v04145.

## V4.14.5 OAPFIX
- Integrated latest exported JSON.
- Added OAP bilateral display formatter:
  a.b -> (Ra / La) ×ceil(b/2) [E#].
- Keeps version/storage at V4.14.5 / nsd6_v04145.
- No BASE/PSD changes.

## V4.14.5 OAPFIX STORAGEFIX
- Storage key changed to nsd6_v04145_oapfix so embedded latest JSON is used instead of older localStorage.
- Visible build remains V4.14.5.
- OAP display formatter retained.

## V4.14.5 OAPFIX PROGFIX
- Updated current pullVertical seed state after OAP Negative 3.5 E2 completion.
- Next state: OAP Negative 5.5 E1.
- Changed storage key to nsd6_v04145_oapfix_progfix.
- saveFinalLog now updates state.lines[lineKey] to the next projected progression after Completed.
- OAP display formatter retained.

## V4.14.5 OAPFIX WHEELPATCH
- Fixed 8-slot projected wheel parsing for OAP bilateral notation.
- OAP log line like 3.5 (R3 / L3) ×3 [E2] now normalizes internally to 3.5 (3×5) [E2] before next77Progress.
- Current pullVertical seed remains OAP Negative 5.5 E1.
- Storage key changed to nsd6_v04145_oapfix_wheelpatch.

## V4.14.5 DIVIDERFIX
- Prompt generation now removes trailing divider bars from previous log and plan blocks.
- Generated prompt now has only one divider bar at the very end.
- Plan block does not get a leading divider.
- Storage key changed to nsd6_v04145_dividerfix.

## V4.14.5 DIVIDERFIX2
- Runtime Prompt divider structure corrected:
  Previous log
  ⸻
  Today plan
  ⸻
- Existing leading/trailing duplicated dividers are trimmed before composing to prevent double bars.
- Storage key changed to nsd6_v04145_dividerfix2.

## V4.14.6 RELEASE
- Applied uploaded index(8).html.
- Bumped visible build to V4.14.6.
- Changed storage key to nsd6_v04146.
- Changed service worker cache to nsd6-v04146-release.
- BASE/assets preserved from previous stable package.

## V4.14.6 recordpatch
- Visible build / code name unchanged.
- Embedded uploaded backup JSON as seed data.
- Applied RECORD-style flat box graphics: square, no borders, rgba(0,0,0,.60).
- Root page scroll suppressed; inner panel/history/log scrollbars kept red.
- Result option added: Monthly Summary.
- Monthly Summary does not advance rotation and does not affect session/rest/streak counts.
- Settings/Data actions changed to EXPORT JSON / COPY RECORD / CLOSE.
- Added month selector for COPY RECORD.
- COPY RECORD builds an NSS-77TR RECORD-compatible monthly text block for pasting into RECORD app.

## V4.14.6 opacityfix
- Visible build / code name unchanged.
- Fixed RECORD-style opacity by changing the large .panel background from rgba(0,0,0,.92) to rgba(0,0,0,.60).
- Added final opacity override for panel/card/input/button/log UI.

## V4.14.6 backdropfix
- Visible build / code name unchanged.
- Removed whole-screen blur/dim/backdrop feel behind panels.
- Panels remain rgba(0,0,0,.60).
- BASE/background stays visually sharp like RECORD.

## V4.14.6 redfix
- Visible build / code name unchanged.
- Forced red UI text/buttons/section labels to #ff0000.
- Removed opacity/filter effects from button/text UI.
- Panel/background opacity remains rgba(0,0,0,.60).

## V4.15.0 RELEASE
- Visible build updated to V4.15.0.
- Storage key updated to nsd6_v4150.
- Cache updated to nsd6-status-v4150.
- Includes RECORD-style flat panel graphics.
- Includes root scroll suppression with inner red scrollbars.
- Includes Monthly Summary result.
- Includes EXPORT JSON / COPY RECORD / CLOSE data actions.
- Includes red saturation fix.

## V4.15.0 mobile-scrollfix
- Visible build / storage / cache unchanged.
- Fixed mobile SETTINGS panel vertical scrolling.
- Restored touch pan-y and momentum scroll for active panels.
- Root page scroll suppression remains; inner panel scroll remains active.

## V4.15.0 data-tab-fix
- Rebuilt from known-good mobile-scrollfix base.
- Visible build / storage / cache unchanged.
- Replaced BASE.png from uploaded DATA PSD.
- Changed visible SET/SETTINGS presentation to DATA without touching function/id names.
- Settings panel content safely simplified to month selector + EXPORT JSON / COPY RECORD / CLOSE.
- Fixed previous DOM break that removed slot text and hid month selector.
- PSD conversion: ImageMagick
- BASE size: 941 × 1900

## V4.15.0 data-tab-fix2
- Visible build / storage / cache unchanged.
- Fixed runtime error caused by removing internal settings fields.
- Kept hidden compatibility fields for rotationIndex / rotationJson / linesJson.
- Made fillSettings() null-safe.
- DATA panel remains visually minimal: month selector + EXPORT JSON / COPY RECORD / CLOSE.
- Slot text and month selector rendering restored.

## V4.15.0 data-tab-final
- Visible build / storage / cache unchanged.
- DATA panel button color order finalized.
- EXPORT JSON is red.
- COPY RECORD is white.

## V4.15.0 copy-order-fix
- Visible build / storage / cache unchanged.
- Embedded uploaded STATUS JSON backup as seed data.
- COPY RECORD daily log order changed to newest -> oldest.
- Rest / Delay entries remain included.
- Monthly Summary remains placed above daily logs.

## V4.15.0 copy-summary-fix
- Visible build / storage / cache unchanged.
- COPY RECORD no longer creates an empty Monthly Summary title/block when no Monthly Summary log exists.
- If Monthly Summary exists, it remains placed above daily logs.
- If Monthly Summary text already includes its title, title is not duplicated.
- Daily log order remains newest -> oldest.
- Rest / Delay entries remain included.

## V4.15.0 531-title-migration
- Visible build / storage / cache unchanged.
- Added one-time localStorage migration for 2026-05-31 log title:
  `5/31 Sun - Complex Push` -> `5/31 Sun — Complex Push`.
- COPY RECORD also normalizes daily title hyphen to em dash during export.
- No manual re-entry or import required.

## v4.15.0 head-icon-patch
- Based on v4.15.0 531-title-migration baseline.
- Discards the previous preview-icon-fix branch.
- Replaced STATUS icon-192.png and icon-512.png with uploaded STATUS HEAD image.
- Core app logic unchanged.
- Manifest icon paths preserved/fixed to icon-192.png and icon-512.png.

## V4.15.1 seed-streak-fix
- Based on v4.15.0 head-icon-patch baseline.
- Embedded latest STATUS JSON backup as seed data.
- Storage key bumped to `nsd6_v4151_seed_streak_fix`.
- May Monthly Summary is included in seed data.
- Month counters still reset by current calendar month.
- Streak is now calculated across all logs, independent from month reset.
- STATUS HEAD icon assets preserved.
