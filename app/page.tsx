import Link from "next/link";
import { products, formatWon, type Product } from "./lib/products";

export default function HomePage() {
  const seasonal = products.filter((p) => p.category === "제철");
  const allSeason = products.filter((p) => p.category === "계절");

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-green-600 px-6 py-8 text-white">
        <h1 className="text-2xl font-extrabold">제철 농산물, 산지에서 바로</h1>
        <p className="mt-1 text-green-50">신선한 제철·사철 농산물을 합리적인 가격에 만나보세요.</p>
      </section>

      <ProductSection title="🌱 제철 상품" items={seasonal} />
      <ProductSection title="📦 계절 상품" items={allSeason} />
    </div>
  );
}

function ProductSection({ title, items }: { title: string; items: Product[] }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-extrabold text-green-600">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="group overflow-hidden rounded-xl border border-green-100 bg-white transition hover:shadow-lg"
          >
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.image} alt={p.name} className="aspect-square w-full object-cover" />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center bg-green-50 text-6xl">
                {p.emoji}
              </div>
            )}
            <div className="p-3">
              {p.season && (
                <span className="mb-4 inline-block rounded bg-green-100 px-1.5 py-0.5 text-[11px] font-semibold text-green-700">
                  {p.season} 제철
                </span>
              )}
              <p className="font-semibold text-gray-900">{p.name}</p>
              <p className="text-sm font-medium text-gray-700">{p.unit}</p>
              <p className="mt-1 font-bold text-green-700">{formatWon(p.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
