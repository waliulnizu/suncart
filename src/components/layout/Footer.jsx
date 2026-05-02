export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">SunCart ☀️</h2>
          <p className="text-sm">
            Your one-stop shop for all summer essentials.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p>Email: support@suncart.com</p>
          <p>Phone: +880 1234-567890</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Links</h3>

          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
}