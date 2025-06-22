"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import NavLink from "./NavLink";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Packages", href: "#" },
  { name: "Calculator", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "News & Blog", href: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#1c2552] text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 text-sm">
        <div>
          Open Hours: Mon – Thu 9am to 5pm | Fri 9am to 5:30pm | Closed: Sat –
          Sun
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>01234567891</span>
          <span>Call Free now on</span>
        </div>
      </div>

      <div className="bg-[#1c2552] border-t border-white border-opacity-10">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <Logo />

          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
            <Link
              href="#"
              className="bg-white text-[#1c2552] font-semibold py-1 px-4 rounded"
            >
              Client Portal
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden px-4 pb-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block py-1">
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="block bg-white text-[#1c2552] font-semibold py-2 px-4 mt-2 rounded"
            >
              Client Portal
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
