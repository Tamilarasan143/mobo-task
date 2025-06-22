'use client'

import { MdOutlineEvent } from "react-icons/md";
import { CiTextAlignJustify } from "react-icons/ci";
import { RiGovernmentLine } from "react-icons/ri";
import { RiPieChartBoxLine } from "react-icons/ri";
import { TbInbox } from "react-icons/tb";
const services = [
  {
    title: 'The Foodie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    icon: <MdOutlineEvent/>,
  },
  {
    title: 'The Office Goto',
    description: 'Duis aute irure dolor in reprehenderit in voluptate',
    icon: <CiTextAlignJustify/>,
  },
  {
    title: 'The Collaboration Junkie',
    description: 'Excepteur sint occaecat cupidatat',
    icon: <RiGovernmentLine/>,
  },
  {
    title: 'The Change Agent',
    description: 'Plan for Peace of Mind',
    icon: <RiPieChartBoxLine/>,
  },
  {
    title: 'The Detective',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    icon: <TbInbox/>,
  },
]

export default function ServiceTiles() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Lorem Ipsum</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
           
            return (
              <div
                key={index}
                className="border border-gray-300 justify-center flex gap-y-2  flex-col rounded-lg items-center p-6 transition-all duration-300 text-center"
              >
                <div className=" text-[#1c2552] text-5xl text-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1c2552] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-[#1c2552] font-medium hover:underline"
                >
                  Lorem Ipsum kashlak
                </a>
              </div>
            )
          })}
        </div>

        <button className="mt-10 bg-[#1c2552] text-white px-6 py-2 rounded">
          Find Out More
        </button>
      </div>
    </section>
  )
}
