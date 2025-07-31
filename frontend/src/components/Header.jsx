import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import MobileMenu from "./MobileMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";

SwiperCore.use([Navigation, Pagination]);

const Header = ({ logo }) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
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
    <header className="w-full border-b border-[#0a76db]">
      <div className="mx-auto px-6 lg:py-0 py-4 flex items-center justify-between">
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
            <div
              key={index}
              className="group relative py-5"
              onMouseEnter={() => {
                item.name === "About" && setActiveMegaMenu("about");
                item.name === "Service" && setActiveMegaMenu("service");
              }}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                to={item.link}
                className="flex items-center gap-1 text-gray-800 hover:text-[#0A76DB] transition"
              >
                {item.name}
                <IoIosArrowDown />
              </Link>
              {item.name === "About" && activeMegaMenu === "about" && <MegaMenu />}
              {item.name === "Service" && activeMegaMenu === "service" && (
                <ServicesMegaMenu />
              )}
            </div>
          ))}
          <button className="py-2 px-6 bg-[#0a76db] text-white rounded-lg">
            Contact Us
          </button>
        </nav>
      </div>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        logo={logo}
        links={links}
      />
    </header>
  );
};

export default Header;
