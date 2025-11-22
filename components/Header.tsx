import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-red-600">Leadzup</span>
          <svg
            className="w-5 h-5 text-red-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#how-it-works"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            How it works
          </Link>
          <Link
            href="#why-Leadzup"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Why Leadzup?
          </Link>
          <Link
            href="#features"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Pricing
          </Link>
          <Link
            href="/terms"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            T&C
          </Link>
          <Link
            href="#faq"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={async () => await signIn("google")}
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Login
          </button>
          <Link
            href="#cta"
            className="bg-orange-500 md:text-md text-xs hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition flex items-center gap-2"
          >
            Get Customers From Reddit
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
