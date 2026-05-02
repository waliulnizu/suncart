import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition-all">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>

      <p className="text-sm text-gray-500">⭐ {product.rating}</p>

      <p className="text-orange-500 font-bold mt-1">${product.price}</p>

      <Link href={`/products/${product.id}`}>
        <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
}
