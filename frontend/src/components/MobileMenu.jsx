import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MegaMenu from "./MegaMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";

const MobileMenu = ({ isOpen, setIsOpen, logo, links }) => {
  const [showMegaMenuMobile, setShowMegaMenuMobile] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } lg:hidden flex flex-col`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#ebebeb]">
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-600 hover:text-red-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-[100px] h-auto object-contain"
          />
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {links.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => {
                  item.name === "About" && setActiveMegaMenu("about");
                  item.name === "Service" && setActiveMegaMenu("service");
                }}
                className="w-full flex justify-between items-center px-6 py-3 text-gray-800 text-sm border-b border-[#ebebeb] bg-[#fafafb] hover:text-[#0A76DB]"
              >
                <span>{item.name}</span>
                  <IoIosArrowDown className="text-md" />
              </button>

              {item.name === "About" && activeMegaMenu === "about" && (
                <MegaMenu />
              )}
              {item.name === "Service" && activeMegaMenu === "service" && (
                <ServicesMegaMenu />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Contact Button */}
      <div className="p-4 border-t border-[#ebebeb]">
        <button className="w-full py-3 bg-[#0a76db] text-white rounded-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
