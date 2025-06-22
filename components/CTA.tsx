"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-[#1c2552] py-20 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="CTA Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempo
          </h2>
          <p className="text-sm text-gray-200 max-w-lg">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue ? Donec a eros justo. Fusce egestas tristique ultrices. Nam
            tempor, augue ? Donec a eros justo. Fusce egestas Tristique
            ultrices. Nam tempor, augu
          </p>
        </div>
        <form className="w-full flex flex-col items-center  max-w-xs bg-white text-black p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-md md:text-xl font-bold">
           Get in touch Team
          </h2>
            
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1c2552]"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1c2552]"
          />
           <input
            type="number"
            placeholder="Phone"
            required
            className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1c2552]"
          />
          <textarea
            placeholder="Your Enquiry"
            rows={1}
            required
            className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1c2552]"
          />
          <button
            type="submit"
            className=" bg-[#1c2552] text-white py-2 px-4 rounded hover:bg-[#162043] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
