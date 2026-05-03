import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import products from "../../../../public/products.json";

async function getProduct(id) {
  return products.find((p) => p.id == id);
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    // Redirect to login with callback URL to return here after login
    redirect(`/login?callbackUrl=/products/${id}`);
  }

  const product = await getProduct(id);

  if (!product) {
    return <p className="p-10 text-center">Product not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

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
          <p className="text-gray-500 mb-2">Brand: {product.brand}</p>

          <p className="text-lg mb-2">⭐ {product.rating}</p>

          <p className="text-orange-500 text-2xl font-bold mb-4">
            ${product.price}
          </p>

          <p className="mb-4">{product.description}</p>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
