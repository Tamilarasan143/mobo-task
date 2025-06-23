"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { HiMiniPhoneArrowUpRight } from "react-icons/hi2";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Calculator", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "News & Blog", href: "#" },
  { name: " Client Portal", href: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#1c2552] text-white relative z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm">
          <Logo />
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 mt-2 md:mt-0 text-white/90">
            <span className="hidden md:flex max-w-90 text-end">
              Open Hours: Mon – Thu 9am to 5pm | Fri 9am to 5:30pm | Closed: Sat
              – Sun
            </span>
            <div className="flex items-center rounded-2xl border p-2 border-white gap-2 mt-1 md:mt-0">
              <HiMiniPhoneArrowUpRight size={30} />
              <div className="flex flex-col ">
                <span>01234567891</span>
                <span>Call Free now on</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center md:gap-6">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden mt-4"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-3 pb-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`block py-1`}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
