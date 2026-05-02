import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition transform hover:scale-105">
        
        {/* Product Image */}
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-gray-500 text-sm mb-2">
            {product.brand}
          </p>

          <div className="flex items-center justify-between mb-2">
            <p className="text-yellow-500 font-semibold">
              ⭐ {product.rating}
            </p>
          </div>

          <p className="text-orange-600 text-xl font-bold">
            ${product.price}
          </p>
        </div>

      </div>
    </Link>
  );
}