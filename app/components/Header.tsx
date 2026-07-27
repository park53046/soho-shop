"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-10 border-b border-green-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-extrabold text-green-700">
          🥬 우리동네 농산물
        </Link>
        <nav className="flex items-center gap-4 text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-green-700">상품</Link>
          <Link href="/cart" className="relative hover:text-green-700">
            🛒 장바구니
            {count > 0 && (
              <span className="absolute -right-4 -top-2 rounded-full bg-green-600 px-1.5 py-0.5 text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
