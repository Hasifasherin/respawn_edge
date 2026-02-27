'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "../../lib/utils";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // keep menu state

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/games" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-[rgba(46,3,86,0.3)] border-b border-blue-400/30 relative z-50">
      <div className="container-custom flex justify-between items-center py-4 px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/RE-logo.png"
            alt="GameHub Logo"
            width={115}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium max-[827px]:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative px-3 py-2 transition-colors duration-200",
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-[6px] h-[2px] w-full bg-blue-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          className="hidden max-[827px]:flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="max-[827px]:block hidden bg-[#0f172a] border-t border-blue-400/20 px-6 py-6 space-y-6">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "transition-colors duration-200",
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}