# NSD-6 Control Panel v0.4.4

PSD 기준 레이아웃 정리판.

## 기준

- BASE.psd composite export
- Canvas: 941 × 1640
- Font stack for dynamic text:
  - DIN / DIN Medium / DIN Alternate fallback
  - system fallback

## 핵심 변경

- 세로 길이 1640 기준으로 overlay 좌표 재배치
- dynamic session rows:
  - MOVEMENT
  - ROTATION
  - PREVIOUS
  - LAST SAVED
- removed duplicated dynamic rows:
  - PROGRESSION
  - EXPOSURE ROW
  - Focus / Intensity / Signal / Notes 판단값
- active tab is now CSS overlay red pill
- panel close buttons removed / reduced to DASHBOARD action
- footer wording expected from PSD skin, e.g. LOCAL ARCHIVE READY

## storage

- localStorage key: `nsd6_v044`
- reads previous:
  - nsd6_v043
  - nsd6_v042
  - nsd6_v041
  - nsd6_v03
  - nsd6_v02

## deploy

Replace/upload:

- index.html
- BASE.png
- manifest.webmanifest
- sw.js
- README.md

Open:

https://ni-ij.github.io/NSD-6-STATUS/?v=4.4
