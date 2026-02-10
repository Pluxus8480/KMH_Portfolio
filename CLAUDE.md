# KMH Portfolio - Study Content Writing Guide

이 문서는 Study 페이지의 학습 내용을 작성할 때 따라야 할 규칙과 형식을 정의합니다.

## 프로젝트 구조

```
KMH_Portfolio/
├── index.html              # 메인 포트폴리오 페이지
├── study.html              # Study 메인 페이지 (카테고리 목록)
├── study/                  # 카테고리별 세부 페이지
│   ├── unreal.html
│   ├── graphics.html
│   ├── server.html
│   ├── database.html
│   ├── cs-fundamentals.html
│   ├── algorithm.html
│   └── cpp.html
├── css/style.css           # 스타일시트
└── js/
    ├── main.js             # 메인 페이지 스크립트
    └── study.js            # Study 페이지 스크립트
```

## Study 콘텐츠 작성 규칙

### 1. 파일 구조

각 학습 주제는 `study/[카테고리]/[주제명]/index.html` 형식으로 작성합니다.

예시:
```
study/
├── algorithm/
│   ├── 01_정렬_알고리즘/index.html
│   ├── 02_그래프_탐색/index.html
│   └── 03_동적_프로그래밍/index.html
├── server/
│   ├── 01_서버_아키텍처/index.html
│   └── 02_네트워크_동기화/index.html
```

### 2. 콘텐츠 형식

#### 2.1 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>[주제명] | KMH Portfolio</title>
    <link rel="stylesheet" href="../../../css/study-content.css">
</head>
<body>
    <div class="container">
        <!-- 헤더 -->
        <header class="header">
            <a href="../../[카테고리].html" class="back-link">← 목록으로</a>
            <h1>[캐치프레이즈 형식의 제목]</h1>
            <p class="subtitle">[부제목 - 기술/게임명과 핵심 개념]</p>
        </header>

        <!-- 파트별 내용 -->
        <section class="part">
            <h2>Part 1: [섹션 제목]</h2>
            <div class="conversation">
                <!-- Q&A 형식 콘텐츠 -->
            </div>
        </section>

        <!-- 요약 -->
        <section class="summary-box">
            <h3>📌 핵심 정리</h3>
            <ul>
                <li>[핵심 포인트 1]</li>
                <li>[핵심 포인트 2]</li>
            </ul>
        </section>
    </div>
</body>
</html>
```

#### 2.2 Q&A 대화 형식

복잡한 개념은 질문-답변 형식으로 풀어서 설명합니다.

```html
<div class="conversation">
    <div class="q">왜 이 기술이 필요한가요?</div>
    <div class="a">
        <p>기존 방식의 문제점과 해결책을 설명합니다.</p>
        <p class="highlight">핵심 개념은 하이라이트로 강조합니다.</p>
    </div>
</div>
```

#### 2.3 강조 요소 클래스

| 클래스 | 용도 | 색상 |
|--------|------|------|
| `.highlight` | 핵심 개념 강조 | 파란색 배경 |
| `.key-point` | 중요 포인트 | 초록색 배경 |
| `.warning` | 주의사항/함정 | 빨간색 배경 |

```html
<p class="highlight">이것이 핵심 개념입니다.</p>
<p class="key-point">반드시 기억해야 할 포인트입니다.</p>
<p class="warning">주의: 이 부분에서 실수가 자주 발생합니다.</p>
```

#### 2.4 비유/아날로지 박스

어려운 개념을 일상적인 비유로 설명할 때 사용합니다.

```html
<div class="analogy-box">
    <strong>🎯 비유로 이해하기</strong>
    <p>이 개념은 [일상적인 비유]와 같습니다.</p>
    <p>[비유를 통한 상세 설명]</p>
</div>
```

#### 2.5 코드 블록

```html
<div class="code-block">
    <div class="code-header">[언어/파일명]</div>
    <pre><code>
// 코드 예시
void Example() {
    // 구현 내용
}
    </code></pre>
</div>
```

#### 2.6 비교 테이블

```html
<table class="compare-table">
    <thead>
        <tr>
            <th>구분</th>
            <th>방식 A</th>
            <th>방식 B</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>장점</td>
            <td>[A의 장점]</td>
            <td>[B의 장점]</td>
        </tr>
        <tr>
            <td>단점</td>
            <td>[A의 단점]</td>
            <td>[B의 단점]</td>
        </tr>
    </tbody>
</table>
```

#### 2.7 시각적 다이어그램 (ASCII Art)

```html
<div class="visual-section">
    <pre class="diagram">
┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Server    │
└─────────────┘     └─────────────┘
    </pre>
    <p class="diagram-caption">[다이어그램 설명]</p>
</div>
```

### 3. 콘텐츠 작성 원칙

#### 3.1 제목 작성법

- **캐치프레이즈 형식**: 기술적 용어 대신 흥미로운 질문이나 현상으로 시작
  - ❌ "Portal의 렌더 텍스처 기법"
  - ✅ "벽을 통과하면 어디로 나올까?"

- **부제목**: 구체적인 기술명과 적용 사례
  - "Portal의 공간 왜곡 렌더링 기술"

#### 3.2 내용 구성

1. **Part 1**: 문제 정의 - 왜 이 기술이 필요한가?
2. **Part 2-5**: 핵심 구현 - 어떻게 동작하는가?
3. **Part 6**: 심화/응용 - 어떻게 확장할 수 있는가?
4. **핵심 정리**: 3-5개 포인트로 요약

#### 3.3 설명 방식

- **점진적 복잡도**: 쉬운 개념에서 어려운 개념으로
- **비유 활용**: 추상적 개념을 일상 경험과 연결
- **시각화**: 다이어그램, 테이블, 코드로 보완
- **Q&A 형식**: 독자가 가질 의문을 미리 제시하고 답변

### 4. 카테고리별 주제 예시

#### 🔷 Unreal Engine
- Gameplay Ability System 분석
- Nanite 메시 시스템 원리
- Blueprint vs C++ 성능 비교

#### 🖼️ Graphics / Rendering
- Deferred vs Forward 렌더링
- PBR 재질 시스템 구현
- 그림자 맵핑 기법 비교

#### 🖥️ Game Server
- 게임 서버 동기화 전략
- Lag Compensation 구현
- 매치메이킹 알고리즘

#### 💾 Database
- 게임 DB 샤딩 전략
- Redis를 활용한 랭킹 시스템
- 트랜잭션 락 최적화

#### 🧠 CS 기초
- 메모리 관리와 GC
- 멀티스레딩 동기화
- 캐시 친화적 프로그래밍

#### 🧩 Algorithm
- 게임용 길찾기 알고리즘 (A*, JPS)
- 공간 분할 자료구조 (Quadtree, Octree)
- 충돌 감지 최적화

#### ⚡ C++
- Modern C++ 스마트 포인터
- Move Semantics 이해
- 템플릿 메타프로그래밍

### 5. study.html 업데이트

새로운 콘텐츠를 추가할 때 `study.html`과 해당 카테고리 페이지의 카운트와 목록을 업데이트합니다.

```html
<!-- study.html의 카드 업데이트 -->
<a href="study/algorithm.html" class="study-card" data-tags="algorithm">
    <div class="study-card__header">
        <span class="study-card__icon">🧩</span>
        <h3 class="study-card__title">Algorithm</h3>
    </div>
    <p class="study-card__desc">자료구조와 알고리즘</p>
    <ul class="study-card__topics">
        <li>A* 길찾기 알고리즘</li>
        <li>공간 분할 자료구조</li>
        <!-- 새 주제 추가 -->
    </ul>
    <span class="study-card__count">2개 주제</span> <!-- 카운트 업데이트 -->
</a>
```

### 6. 스타일시트 추가

`css/study-content.css` 파일을 생성하여 콘텐츠 페이지 전용 스타일을 관리합니다.

---

## 참고 자료

- 참조 사이트: [MSH Portfolio](https://myoungseungho.github.io/MSH_Portfolio/)
- 예시 콘텐츠: Portal 포탈물리, Noita 픽셀물리
