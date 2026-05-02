export default function SummerTips() {
  return (
    <section className="bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-6">💡 Summer Care Tips</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold mb-2">Stay Hydrated 💧</h3>
            <p>Drink plenty of water to stay fresh and energetic.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold mb-2">Use Sunscreen 🧴</h3>
            <p>Protect your skin from harmful UV rays.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold mb-2">Wear Light Clothes 👕</h3>
            <p>Choose breathable fabrics for comfort.</p>
          </div>

        </div>
      </div>
    </section>
  );
}