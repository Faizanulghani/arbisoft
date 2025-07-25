import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", link: "#" },
    { name: "Service", link: "#" },
    { name: "Solutions", link: "#" },
    { name: "Industries", link: "#" },
    { name: "Our Products", link: "#" },
    { name: "Engagement Models", link: "#" },
  ];

  return (
    <header className="w-full border-b border-[#d6d6d6]">
      <div className="max-w-[1300px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          {logo && (
            <img
              src={logo}
              alt="Logo"
              className="w-[125px] h-auto object-contain"
            />
          )}
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#0A76DB] focus:outline-none"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-base">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative flex items-center gap-1 text-gray-800 hover:text-[#0A76DB] transition"
            >
              {item.name}
              <IoIosArrowDown />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A76DB] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <button className="py-2 px-6 bg-[#0a76db] text-white rounded-lg">
            Contact Us
          </button>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden flex flex-col`}
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
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex justify-between items-center px-6 py-3 text-gray-800 text-sm border-b border-[#ebebeb] bg-[#fafafb] hover:text-[#0A76DB]"
            >
              <span>{item.name}</span>
              <IoIosArrowDown className="text-md" />
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-[#ebebeb]">
          <button className="w-full py-3 bg-[#0a76db] text-white rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
