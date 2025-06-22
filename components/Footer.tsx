import Logo from "./Logo";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[#1c2552] text-white text-sm  py-6">
      <div className="px-8 pb-6 space-y-10">
        <Logo />

        <div className=" mx-auto  grid grid-cols-1 py-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <RiTelegram2Fill size={20} className=" text-white" />
                info@homelew.co.uk
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className=" text-white" />
                01234567890
              </li>
              <li className="flex items-center gap-2">
                <FaLocationDot className=" text-white" />
                21 XYZ St, SKY CITY, X
              </li>
            </ul>
            <div className="flex gap-x-2 mt-2">
              <button className="bg-white p-2 rounded text-[#1c2552]">
                <FaFacebookF />
              </button>
               <button className="bg-white p-2 rounded text-[#1c2552]">
                <RiTwitterXFill />
              </button>
               <button className="bg-white p-2 rounded text-[#1c2552]">
                <FaLinkedinIn />
              </button>
               <button className="bg-white p-2 rounded text-[#1c2552]">
                <FaInstagram />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal Stuff</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className=" text-center">
          Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin
          metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget
          justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod
          quis libero sed convallis. Vestibulum fringilla felis nec turpis
          aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere.
          Suspendisse nec mollis dolor
        </p>
        <p className=" text-center">
          , vel cursus leo. Integer vitae sem vitae leo pretium porta. In
          consequat magna purus, iaculis rhoncus velit imperdiet sit amet.
        </p>
      </div>
      <div className="md:col-span-3 text-xs text-center text-gray-400 pt-8 border-t border-white/10">
        Copyright &copy; {new Date().getFullYear()} Homelew.
      </div>
    </footer>
  );
}
