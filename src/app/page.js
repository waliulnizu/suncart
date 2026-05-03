import ProductCard from "@/components/ui/ProductCard";
import HeroSection from "@/components/ui/HeroSection";
import SummerTips from "@/components/ui/SummerTips";
import TopBrands from "@/components/ui/TopBrands";
import products from "../../public/products.json";

export default async function Home() {
  const popular = products.slice(0, 3);

  return (
    <div>

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. POPULAR PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">🔥 Popular Products</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. SUMMER TIPS */}
      <SummerTips />

      {/* 4. TOP BRANDS */}
      <TopBrands />

    </div>
  );
}