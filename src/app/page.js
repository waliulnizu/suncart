import ProductCard from "@/components/ui/ProductCard";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products.json`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  const popularProducts = products.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h1 className="text-3xl font-bold mb-6">
        🔥 Popular Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}