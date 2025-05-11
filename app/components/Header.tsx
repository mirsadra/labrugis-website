import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-neutral-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 max-w-5xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            <Image
              src="/vercel.svg" // Assumes vercel.svg is in your /public folder
              alt="Labrugis Logo"
              width={28} // Adjust width as needed
              height={28} // Adjust height as needed
              className="mr-2" // Add some margin to the right of the logo
            />
            <span>Labrugis</span>
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
