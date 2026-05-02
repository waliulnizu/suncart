import Image from "next/image";

async function getProduct(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${baseUrl}/products.json`, {
    cache: "no-store",
  });

  const products = await res.json();
  return products.find((p) => p.id == id);
}

export default async function ProductDetails({ params }) {
  // ✅ Properly unwrap params with await for Next.js 16
  const { id } = await params;
  const product = await getProduct(id);
  console.log(product)

  if (!product) {
    return <p className="p-10 text-center">Product not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">
        {product.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Image - Using Next.js Image Component */}
        <div className="relative w-full h-72">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div>
          <p className="text-gray-500 mb-2">
            Brand: {product.brand}
          </p>

          <p className="text-lg mb-2">
            ⭐ {product.rating}
          </p>

          <p className="text-orange-500 text-2xl font-bold mb-4">
            ${product.price}
          </p>

          <p className="mb-4">
            {product.description}
          </p>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Buy Now
          </button>
        </div>

      </div>

    </div>
  );
}