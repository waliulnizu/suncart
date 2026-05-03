import ProductCard from "@/components/ui/ProductCard";
import products from "../../../public/products.json";

export default async function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">🛍 All Products</h1>

      {/* Grid */}
      
        {products.length === 0 ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-500 text-lg">No products found 😕</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    
  );
}
