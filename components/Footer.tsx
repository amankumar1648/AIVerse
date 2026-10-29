import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-8">

        <div>
          <h2 className="text-xl font-bold">AIVerse 🚀</h2>
          <p className="mt-2 text-gray-600">
            Discover the best AI tools in one place.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/tools">Tools</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/submit">Submit Tool</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/cookies">Cookie Policy</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t py-6 text-center text-gray-500">
       © 2026 AIVerse. All rights reserved.
      </div>
    </footer>
  );
}

