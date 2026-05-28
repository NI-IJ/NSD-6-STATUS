# NSD-6 Control Panel v0.4.3

BASE image skin version.

## 핵심 구조

- `BASE.png`를 고정 UI 스킨으로 사용
- 동적 정보만 HTML/CSS로 오버레이
- 버튼은 투명 hotspot으로 처리
- 기능은 v0.4.1 계열 유지

## dynamic overlay

- Exposure
- Current slot
- Category
- Movement
- Rotation
- Previous
- Progression
- Exposure row
- Last Saved
- Month status counts
- Current block
- Runtime prompt preview

## removed from dynamic logic

- Focus
- Intensity
- Signal
- Notes

BASE 이미지에 해당 행이 시각적으로 남아있어도 앱은 판단값으로 쓰지 않음.
실제 동적 데이터는 기록 기반 항목만 오버레이함.

## storage

- localStorage key: `nsd6_v043`
- reads previous keys:
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

https://ni-ij.github.io/NSD-6-STATUS/?v=4.3
