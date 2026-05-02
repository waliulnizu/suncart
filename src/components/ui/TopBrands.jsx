export default function TopBrands() {
  const brands = ["SunShade", "CoolWear", "BeachPro", "GlowCare"];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-6">🏷️ Top Brands</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg"
            >
              <h3 className="font-bold text-lg">{brand}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}