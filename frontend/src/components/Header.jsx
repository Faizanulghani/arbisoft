import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = ({ logo }) => {
  const links = [
    { name: "About", link: "#" },
    { name: "Service", link: "#" },
    { name: "Solutions", link: "#" },
    { name: "Industries", link: "#" },
    { name: "Our Products", link: "#" },
    { name: "Engagement Models", link: "#" },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b flex-wrap">
      <div>
        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-[125px] h-auto object-contain"
          />
        )}
      </div>
      <nav className="flex gap-6 text-base mt-4 sm:mt-0">
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
        <button className="py-[12px] px-[32px] bg-[#0a76db] text-white rounded-[8px]">Contact Us</button>
      </nav>
    </header>
  );
};

export default Header;
