"use client";

import Image from "next/image";

const shows = [
  {
    title: "CBS News Specials",
    description: "[HIS 392]War: Union In Crisis",
    img: "/images/shows/cbs-specials.jpg",
  },
  {
    title: "CBS Sunday Morning",
    description: "[CTE 550]Grant Writing",
    img: "/images/shows/sunday-morning.jpg",
  },
  {
    title: "The Takeout",
    description: "[PRM 300]Contemporary Developments",
    img: "/images/shows/the-takeout.jpg",
  },
  {
    title: "The FBI Declassified",
    description: "[ENG 530]Pro Environmental Writing",
    img: "/images/shows/fbi.jpg",
  },
  {
    title: "CBS Reports",
    description: "[FOR 360]Foods Of The Us",
    img: "/images/shows/reports.jpg",
  },
];

export default function FeaturedShows() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl text-[#1c2552]  font-bold mb-10">Lorem Ipsum</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {shows.map((show, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex flex-col justify-center items-center overflow-hidden shadow hover:shadow-md transition p-5 gap-y-3"
            >
              <Image src={show.img} alt={show.title} height={120} width={150} />

              <h3 className="text-md text-[#1c2552] font-semibold">{show.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{show.description}</p>
              <button
                type="submit"
                className="bg-[#1c2552] w-full text-white p-2 rounded"
              >
                Find Out More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
