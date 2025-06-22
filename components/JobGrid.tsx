'use client'

import { CgNotes } from "react-icons/cg"
import { FaRegCreditCard, FaGift } from "react-icons/fa"
import { GiLiquidSoap } from "react-icons/gi"
import { ImTree } from "react-icons/im"
import { IoMdAlarm } from "react-icons/io"
import { RiCheckboxMultipleBlankLine } from "react-icons/ri"
import { TbBoxPadding } from "react-icons/tb"



const roles = [
  { title: 'Scrum Master', icon: <IoMdAlarm className="w-5 h-5" /> },
  { title: 'Software Developer', icon: <CgNotes className="w-5 h-5" /> },
  { title: 'UI/UX Designer', icon: <RiCheckboxMultipleBlankLine className="w-5 h-5" /> },
  { title: 'Project Manager', icon: <FaRegCreditCard className="w-5 h-5" /> },
  { title: 'Nursing Assistant', icon: <TbBoxPadding className="w-5 h-5" /> },
  { title: 'Dog Trainer', icon: <ImTree className="w-5 h-5" /> },
  { title: 'Medical Assistant', icon: <GiLiquidSoap className="w-5 h-5" /> },
  { title: 'Marketing Coordinator', icon: <FaGift className="w-5 h-5" /> },
]

export default function JobGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Donec a eros justotial Donec a eros justo
        </h2>

        {/* ✅ Full container, not restricted to 4xl */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6transition"
            >
              <div className="w-12 h-12 rounded-full bg-[#1c2552] text-white flex items-center justify-center">
                {role.icon}
              </div>
              <p className="text-sm font-medium mt-2">{role.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
