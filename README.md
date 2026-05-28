# NSD-6 Control Panel v0.4.1

Rollback-patch version.

- Keeps the v0.3 single-file interface and runtime prompt generator.
- Restores session movement titles.
- Updates only the internal NSD-6 rotation data:
  1. Push / Horizontal
  2. Pull / Vertical
  3. Complex Push
  4. Conditioning
  5. Push / Vertical
  6. Pull / Horizontal
  7. Complex Pull
  8. Conditioning
- Pull vertical title: OAP Negative.
- Conditioning starts from: Negative + A. Pistol 3.3 (3x3) [E1].
- Burpee 40x3 fixed.
- Uses localStorage key nsd6_v041 and imports old nsd6_v03/nsd6_v02 data.

Deploy by replacing:
- index.html
- manifest.webmanifest
- sw.js
- README.md

Open:
https://ni-ij.github.io/NSD-6-STATUS/?v=4.1
