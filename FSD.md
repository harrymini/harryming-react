# 📦 Feature-Sliced Design (FSD) 구조 설명

본 프로젝트는 React + Next.js 기반의 대규모 웹 애플리케이션 구조로 **Feature-Sliced Design (FSD)** 아키텍처를 채택하였습니다. 각 디렉토리는 명확한 책임을 가지며, 기능 중심으로 잘게 나누어져 유지보수성과 확장성을 확보합니다.

---

## 📁 디렉토리 구조 요약

**기본 구조:**

```
src/
├── app
├── processes
├── pages
├── widgets
├── features
├── entities
└── shared
```

---

## 📂 /app

**역할:** Next.js App Router 기반 설정, 글로벌 초기화 담당

**하위 구성:**

- `providers/`: 전역 Context, 테마, 상태 관리 등
- `router/`: 라우팅 정보, 인증 라우터 등
- `layout/`: 공통 레이아웃 및 HTML 구조

💡 `app/layout.tsx`, `app/page.tsx`는 앱의 진입점입니다.

---

## 📂 /processes

**역할:** 여러 feature를 조합하여 사용자 흐름을 구성

**예시:**

- `checkout/`: 주문 + 결제 + 배송지 선택
- `login-flow/`: 로그인 → 사용자 정보 저장 → 리디렉션

---

## 📂 /pages

**역할:** Next.js 라우팅 대응 폴더 (App Router와 병행 가능)

**예시:**

- `index/`: 메인 홈
- `my-cart/`: 장바구니
- `order-history/`: 주문 내역

---

## 📂 /widgets

**역할:** 페이지 구성의 중간 단위 UI + 상태 포함 가능

**예시:**

- `Header/`: 로고, 메뉴, 로그인 버튼
- `ProductList/`: 상품 목록 + 필터
- `CartSummary/`: 장바구니 요약

---

## 📂 /features

**역할:** 작고 명확한 사용자 기능 (보통 단일 액션 중심)

**예시:**

- `AddToCart/`: 상품 장바구니 추가
- `LoginButton/`: 로그인 버튼
- `ToggleFavorite/`: 즐겨찾기 토글

---

## 📂 /entities

**역할:** 도메인 객체의 상태, API, 타입을 정의

**예시:**

```
entities/
  user/
    model.ts    ← 사용자 상태
    api.ts      ← 사용자 관련 API
    types.ts    ← 사용자 타입 정의
  product/
    model.ts
    api.ts
```

💡 상태의 "진실된 소스 (Source of Truth)" 역할을 합니다.

---

## 📂 /shared

**역할:** 앱 전역에서 사용하는 공통 요소

**예시:**

```
shared/
  ui/
    Button/
    Modal/
  lib/
    axios/
    clsx/
  types/
    index.ts
```

💡 어떤 도메인에도 속하지 않으며 완전 재사용 가능한 코드만 위치합니다.

---

## ✅ 전체 트리 예시 (상세 버전)

```
src/
  app/
    providers/
    router/
    layout/
  processes/
    checkout/
    login-flow/
  pages/
    index/
    my-cart/
    order-history/
  widgets/
    Header/
    ProductList/
    CartSummary/
  features/
    AddToCart/
    LoginButton/
    ToggleFavorite/
  entities/
    user/
      model.ts
      api.ts
      types.ts
    product/
      model.ts
      api.ts
  shared/
    ui/
      Button/
      Modal/
    lib/
      axios/
      clsx/
    types/
      index.ts
```

---

## 📌 참고

- [Feature-Sliced Design 공식 사이트](https://feature-sliced.design/)
- 기능 단위 명확 분리 → 협업과 확장에 유리
- `features`는 작게, `entities`는 도메인 중심, `shared`는 완전히 재사용 가능한 것으로만 구성
