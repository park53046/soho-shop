"use client";

import Link from "next/link";
import { useCart } from "../components/CartProvider";
import { getProduct, formatWon } from "../lib/products";

export default function CartPage() {
  const { items, setQty, remove, clear } = useCart();

  const rows = items
    .map((i) => {
      const p = getProduct(i.id);
      return p ? { ...p, qty: i.qty } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const total = rows.reduce((s, r) => s + r.price * r.qty, 0);

  if (rows.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">장바구니가 비어 있어요.</p>
        <Link href="/" className="mt-4 inline-block rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white">
          상품 보러 가기
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-extrabold text-gray-900">🛒 장바구니</h1>

      <ul className="space-y-3">
        {rows.map((r) => (
          <li key={r.id} className="flex items-center gap-4 rounded-xl border border-green-100 bg-white p-3">
            {r.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={r.image} alt={r.name} className="h-16 w-16 rounded-lg object-cover" />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-50 text-3xl">
                {r.emoji}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-gray-900">{r.name}</p>
              <p className="text-xs text-gray-500">{r.unit} · {formatWon(r.price)}</p>
            </div>
            <div className="flex items-center rounded-lg border border-gray-300">
              <button onClick={() => setQty(r.id, r.qty - 1)} className="px-2.5 py-1 text-lg">−</button>
              <span className="w-8 text-center text-sm">{r.qty}</span>
              <button onClick={() => setQty(r.id, r.qty + 1)} className="px-2.5 py-1 text-lg">＋</button>
            </div>
            <p className="w-24 text-right font-bold text-gray-900">{formatWon(r.price * r.qty)}</p>
            <button onClick={() => remove(r.id)} className="text-sm text-gray-400 hover:text-red-500">✕</button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-green-50 p-4">
        <span className="font-semibold text-gray-700">총 결제금액</span>
        <span className="text-2xl font-extrabold text-green-700">{formatWon(total)}</span>
      </div>

      <div className="mt-4 flex gap-3">
        <button onClick={clear} className="rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-500">
          비우기
        </button>
        <button
          onClick={() => alert("결제 기능은 다음 단계에서 토스페이먼츠로 연결할 예정이에요!")}
          className="flex-1 rounded-lg bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
        >
          결제하기 ({formatWon(total)})
        </button>
      </div>
    </div>
  );
}
