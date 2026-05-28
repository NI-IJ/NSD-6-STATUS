# NSD-6 STATUS CONTROL v0.4

## v0.4 patch focus

- 8-slot rotation updated:
  1. Push - Horizontal
  2. Pull - Vertical
  3. Complex Push
  4. Conditioning
  5. Push - Vertical
  6. Pull - Horizontal
  7. Complex Pull
  8. Conditioning

- Pull movement title corrected to `OAP Negative`.
- Conditioning starts from `Negative + A. Pistol 3.3 (3x3) [E1]`.
- `Burpee 40x3` is fixed in Conditioning.
- Storage key changed to `nsd6_v04`.
- Reads old `nsd6_v03` / `nsd6_v02` local data if present.
- Service worker cache name changed to `nsd6-status-v04`.

## Deploy

Upload these files to the GitHub Pages repo root:

- index.html
- styles.css
- app.js
- manifest.webmanifest
- sw.js
- icon.svg

After deployment, open:

https://ni-ij.github.io/NSD-6-STATUS/?v=4

If mobile keeps showing the old version, remove the home screen icon once, open with `?v=4`, then add to home screen again.
