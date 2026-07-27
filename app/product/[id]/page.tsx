import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, formatWon } from "../../lib/products";
import AddToCart from "../../components/AddToCart";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <div>
      <Link href="/" className="text-sm text-gray-500 hover:text-green-700">← 상품 목록</Link>

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl border border-green-100 object-cover"
          />
        ) : (
          <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-[9rem]">
            {product.emoji}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div>
            {product.season && (
              <span className="mb-2 inline-block rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                {product.season} 제철
              </span>
            )}
            <h1 className="text-2xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="mt-1 text-sm font-medium text-gray-700">판매 단위: {product.unit}</p>
          </div>

          <p className="text-3xl font-extrabold text-green-700">{formatWon(product.price)}</p>
          <p className="text-[15px] leading-relaxed text-gray-800">{product.desc}</p>

          <div className="mt-2">
            <AddToCart id={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
