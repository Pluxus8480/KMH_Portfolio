# HI-Fi Rush 포트폴리오 - 이미지/GIF 준비 목록

저장 경로: `assets/images/projects/hifi-rush/`

---

## 정적 이미지 (스크린샷)

### 1. 엔진 아키텍처 다이어그램
- **파일명:** `architecture.png`
- **위치:** 01 엔진 아키텍처 섹션
- **내용:** Visual Studio Solution Explorer 구조 또는 Engine/Client DLL 클래스 다이어그램
- **촬영 방법:** VS에서 Solution Explorer를 펼친 상태로 캡처

### 2. G-Buffer 디버그 뷰
- **파일명:** `gbuffer-debug.png`
- **위치:** 02 렌더링 파이프라인 섹션
- **내용:** Color / Normal / Position / Emissive 렌더 타겟을 나란히 배치
- **촬영 방법:** 디버그 모드에서 RT 출력을 4분할로 캡처

### 3. 셀 셰이딩 비교
- **파일명:** `cel-shading-compare.png`
- **위치:** 03 셀 셰이딩 & NPR 섹션
- **내용:** 좌: PBR 라이팅 / 우: 셀 셰이딩 + 외곽선 적용 (같은 장면)
- **촬영 방법:** 셰이더 패스를 전환하며 같은 앵글로 2장 캡처 후 나란히 합성

---

## 동적 이미지 (GIF)

### 4. Union Effect 동작 장면
- **파일명:** `union-effect.gif`
- **위치:** 04 이펙트 시스템 - Union Effect 섹션
- **내용:** 보스 공격 시 충돌 판정 + 사운드 + 시각 효과가 동기화되는 장면
- **촬영 방법:** 케일 보스전에서 복합 이펙트가 터지는 3~5초 클립

### 5. 파티클 이펙트 모음
- **파일명:** `particle-effects.gif`
- **위치:** 04 이펙트 시스템 - GPU 파티클 섹션
- **내용:** 화염 / 슬래시 / 충격파 / 빔 등 다양한 파티클 효과 모음
- **촬영 방법:** 여러 이펙트를 순서대로 보여주는 5~8초 클립 또는 모음 편집

### 6. 케일 보스전 게임플레이
- **파일명:** `kale-bossfight.gif`
- **위치:** 05 케일 보스전 섹션
- **내용:** 페이즈 전환, 기계팔 공격, 퍼널 패턴, 피니시 시퀀스 하이라이트
- **촬영 방법:** 보스전 하이라이트 5~10초 클립 (데모 영상에서 추출)

### 7. 터널 맵 & 미러볼 스테이지
- **파일명:** `tunnel-stage.gif`
- **위치:** 08 스테이지 & 카메라 섹션
- **내용:** 터널 맵 안개 효과, Lissajous 곡선 레이저, 미러볼 반사 장면
- **촬영 방법:** 터널 진입부터 미러볼 스테이지까지 3~5초 클립

---

## 참고 사항

- GIF 권장 사양: 너비 800px, 15fps 이하, 파일 크기 5MB 이내
- 데모 영상 소스: https://www.youtube.com/watch?v=rwTkUgP4ITA
- 캡처 도구 추천: ShareX (GIF 캡처), OBS (영상 녹화 후 ffmpeg로 GIF 변환)
- 변환 명령어: `ffmpeg -i input.mp4 -vf "fps=12,scale=800:-1" -loop 0 output.gif`
