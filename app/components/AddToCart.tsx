"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartProvider";

export default function AddToCart({ id }: { id: string }) {
  const { add } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-700">수량</span>
        <div className="flex items-center rounded-lg border border-gray-300">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-1 text-lg">−</button>
          <span className="w-10 text-center">{qty}</span>
          <button onClick={() => setQty((q) => q + 1)} className="px-3 py-1 text-lg">＋</button>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          className="flex-1 rounded-lg bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
        >
          {added ? "담겼어요 ✓" : "장바구니 담기"}
        </button>
        <button
          onClick={() => {
            add(id, qty);
            router.push("/cart");
          }}
          className="flex-1 rounded-lg border border-green-600 py-3 font-bold text-green-700 transition hover:bg-green-50"
        >
          바로 구매
        </button>
      </div>
    </div>
  );
}
