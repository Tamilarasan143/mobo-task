'use client'
import Image from 'next/image'

export default function Hero({ heading = "Tristique ultrices. Nam tempor, augu" }: { heading?: string }) {
  return (
    <section className="relative h-[80vh] bg-black text-white overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Hero Background"
        fill
        className="object-cover opacity-80"
        priority
      />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl leading-snug">
          {heading}
        </h1>

        <div className="absolute right-4 text-center md:right-16 top-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-[90%] md:w-[300px] text-[#1c2552] space-y-4">
          <h3 className="font-semibold text-lg">Request a free call back</h3>
          <form className="space-y-3">
            <input type="text" placeholder="Full Name" className="w-full border-b px-3 py-2 " />
            <input type="email" placeholder="Email Address" className="w-full border-b px-3 py-2" />
            <input type="tel" placeholder="Phone" className="w-full border-b px-3 py-2" />
            <textarea placeholder="Case Description..." rows={2} className="w-full border-b px-3 py-2"></textarea>
            <button type="submit" className="bg-[#1c2552] text-white p-2 rounded">
              Request call back
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
