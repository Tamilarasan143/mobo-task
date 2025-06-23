"use client";

import Image from "next/image";
import NavLink from "./NavLink";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Calculator", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "News & Blog", href: "#" },
  { name: " Client Portal", href: "#" },
];

export default function Hero({
  heading = "Tristique ultrices. Nam tempor, augu",
}: {
  heading?: string;
}) {
  return (
    <section className="relative min-h-[80vh] bg-black text-white overflow-hidden flex flex-col">
      <Image
        src="/images/hero.jpg"
        alt="Hero Background"
        fill
        className="object-cover opacity-80"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 py-4 hidden md:flex justify-center">
        <nav className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-8 md:py-0">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug max-w-xl text-center md:text-left">
          {heading}
        </h1>
        <div className="bg-white text-[#1c2552] p-6 rounded-xl shadow-lg w-full sm:max-w-md md:w-[320px] space-y-4">
          <h3 className="font-semibold text-lg text-center">
            Request a free call back
          </h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b px-3 py-2 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b px-3 py-2 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border-b px-3 py-2 outline-none"
            />
            <textarea
              placeholder="Case Description..."
              rows={2}
              className="w-full border-b px-3 py-2 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#1c2552] text-white py-2 rounded hover:bg-[#162043] transition"
            >
              Request call back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
