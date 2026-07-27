// 샘플 상품 데이터 (농산물) — 나중에 DB(Turso)로 옮기면 됩니다.
// image(실제 사진 경로)가 있으면 사진을, 없으면 emoji를 보여줍니다.

export type Category = "제철" | "계절";

export type Product = {
  id: string;
  name: string;
  price: number; // 원
  unit: string; // 판매 단위 (예: "1kg", "5개")
  category: Category; // 제철 / 사철
  season?: string; // 제철 상품의 계절 (봄/여름/가을/겨울)
  emoji: string; // 상품 대표 그림(이모지)
  image?: string; // 실제 사진 URL/경로 (있으면 이걸 우선 표시)
  desc: string;
};

export const products: Product[] = [
  // ── 제철 상품 6종 ──────────────────────────────
  {
    id: "strawberry",
    name: "논산 딸기",
    price: 12000,
    unit: "1kg",
    category: "제철",
    season: "봄",
    emoji: "🍓",
    image: "/products/strawberry.jpg",
    desc: "달콤하고 향긋한 봄 제철 딸기. 당일 수확 후 발송합니다.",
  },
  {
    id: "chamoe",
    name: "성주 참외",
    price: 15000,
    unit: "2kg",
    category: "제철",
    season: "여름",
    emoji: "🍈",
    image: "/products/sungju.jpg",
    desc: "아삭하고 단맛 가득한 여름 참외. 5~7과 내외.",
  },
  {
    id: "corn",
    name: "찰옥수수",
    price: 9000,
    unit: "10개",
    category: "제철",
    season: "여름",
    emoji: "🌽",
    image: "/products/hongcheon.jpg",
    desc: "쫀득한 초당·찰옥수수. 수확 즉시 진공포장.",
  },
  {
    id: "apple",
    name: "청송 사과",
    price: 25000,
    unit: "5kg",
    category: "제철",
    season: "가을",
    emoji: "🍎",
    image: "/products/apple.jpg",
    desc: "아삭달콤 가을 부사 사과. 선물용 박스 포장.",
  },
  {
    id: "sweetpotato",
    name: "해남 꿀고구마",
    price: 11000,
    unit: "3kg",
    category: "제철",
    season: "가을",
    emoji: "🍠",
    image: "/products/haenam.jpg",
    desc: "구우면 꿀이 뚝뚝. 가을 햇고구마.",
  },
  {
    id: "mandarin",
    name: "제주 감귤",
    price: 13000,
    unit: "3kg",
    category: "제철",
    season: "겨울",
    emoji: "🍊",
    image: "/products/jeju_orange.png",
    desc: "새콤달콤 겨울 노지 감귤. 비타민 가득.",
  },
  

  // ── 사철 상품 4종 ──────────────────────────────
  {
    id: "rice",
    name: "여주 쌀",
    price: 32000,
    unit: "10kg",
    category: "계절",
    emoji: "🌾",
    image: "/products/yeoju_rice.jpg",
    desc: "밥맛 좋은 당해년도 햅쌀. 도정 후 발송.",
  },
  {
    id: "potato",
    name: "강원 감자",
    price: 12000,
    unit: "5kg",
    category: "계절",
    emoji: "🥔",
    image: "/products/photato.jpg",
    desc: "포슬포슬 수미감자. 국·조림·볶음 두루.",
  },
  {
    id: "onion",
    name: "무안 양파",
    price: 7000,
    unit: "3kg",
    category: "계절",
    emoji: "🧅",
    image: "/products/onion.jpg",
    desc: "단단하고 매운맛 적은 저장 양파.",
  },
  {
    id: "honey",
    name: "지리산 벌꿀",
    price: 20000,
    unit: "500g",
    category: "계절",
    emoji: "🍯",
    image: "/products/bee_suga.jpg",
    desc: "향이 진한 아카시아 벌꿀. 100% 국산.",
  },
  {
    id: "ginseng",
    name: "풍기 인삼",
    price: 89000,
    unit: "750g 선물세트",
    category: "계절",
    season: "가을",
    emoji: "🫚",
    image: "/products/jinsang.jpg",
    desc: "6년근 풍기 수삼 선물세트. 이끼 포장으로 신선하게 배송합니다.",
  },
  {
    id: "carrot",
    name: "제주 당근",
    price: 13000,
    unit: "5kg",
    category: "계절",
    season: "겨울",
    emoji: "🥕",
    image: "/products/damggun.jpg",
    desc: "제주 구좌 월동당근. 단단하고 단맛 좋은 겨울 당근.",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatWon(n: number): string {
  return n.toLocaleString("ko-KR") + "원";
}
