import { useState } from "react";
import {
  FaGraduationCap,
  FaPlane,
  FaHospital,
  FaMoneyBill,
  FaShoppingCart,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";

import edx from "../assets/companyLogos/edx.svg";
import mit from "../assets/companyLogos/mit.png";
import summitk12 from "../assets/companyLogos/summitk12.webp";
import philanthropy_university from "../assets/companyLogos/philanthropy_university.png";
import sarah from "../assets/sarah.webp";

const industriesData = {
  Education: {
    text: "Arbisoft is your one-stop shop when it comes to your eLearning needs. Our Ed-tech services are designed to improve the learning experience and simplify educational operations.",
    images: [mit, edx, philanthropy_university],
    testimonial: {
      img: [sarah],
      content:
        "Arbisoft's team delivered an exceptional product that transformed our e-learning strategy.",
      name: "John Doe",
      role: "SVP of Product, Summit K12",
    },
  },
  Travel: {
    text: "Our travel tech solutions streamline bookings, improve user experience, and integrate seamlessly with global systems.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/300x150",
    ],
    testimonial: {
      img: "https://via.placeholder.com/100",
      content:
        "Thanks to Arbisoft, our booking platform is faster and more reliable than ever.",
      name: "Sarah Ahmed",
      role: "Director of Tech, TripGlobal",
    },
  },
  Healthcare: {
    text: "Arbisoft's healthcare solutions ensure secure, scalable and user-friendly digital systems for hospitals and clinics.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/300x150",
    ],
    testimonial: {
      img: "https://via.placeholder.com/100",
      content:
        "They helped us digitize patient management while maintaining compliance.",
      name: "Dr. Alan Smith",
      role: "CTO, MediCare",
    },
  },
  Finance: {
    text: "We build robust fintech applications that prioritize security, scalability and real-time analytics.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/300x150",
    ],
    testimonial: {
      img: "https://via.placeholder.com/100",
      content:
        "Their work enabled us to launch a secure investment platform in record time.",
      name: "Linda Khan",
      role: "Product Lead, FinSecure",
    },
  },
  Ecommerce: {
    text: "Our eCommerce solutions optimize performance, ensure secure payments, and improve user experience.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/300x150",
    ],
    testimonial: {
      img: "https://via.placeholder.com/100",
      content: "Sales jumped 40% after their redesign of our store.",
      name: "David Kim",
      role: "CEO, ShopFast",
    },
  },
  Technology: {
    text: "We partner with technology companies to develop scalable platforms, modern APIs, and intuitive UIs.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/300x150",
    ],
    testimonial: {
      img: "https://via.placeholder.com/100",
      content: "They've been an extension of our core engineering team.",
      name: "Anita Rao",
      role: "VP of Engineering, CodeScale",
    },
  },
};

const icons = {
  Education: <FaGraduationCap />,
  Travel: <FaPlane />,
  Healthcare: <FaHospital />,
  Finance: <FaMoneyBill />,
  Ecommerce: <FaShoppingCart />,
  Technology: <FaCogs />,
};

const IndustriesMegaMenu = () => {
  const [active, setActive] = useState("Education");

  const industry = industriesData[active];

  return (
    <div className="absolute z-50 top-0 lg:top-[61px] left-0 flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/3 bg-gray-100 p-6">
        <h2 className="uppercase text-[#223554] text-[20px] font-bold mb-2">
          Industries
        </h2>
        <div className="w-12 border-b-2 border-yellow-500 mb-4"></div>

        {Object.keys(industriesData).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`w-full text-left p-3 flex items-center justify-between rounded-md mb-2 transition-all duration-200 ${
              active === key
                ? "bg-white shadow text-[#FA8F21] font-semibold"
                : "text-black font-normal"
            }`}
          >
            <div className="flex items-center gap-2 text-[16px]">
              <span className="text-lg">{icons[key]}</span>
              <span>{key}</span>
            </div>
            <FaArrowRight />
          </button>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-2/3 p-6 gap-4 bg-white flex items-center">
        <div className="w-[100%]">
          <p className="mb-4">{industry.text}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="w-50 p-4 flex justify-center rounded-[12px] border-1 border-[#ccc]">
              <img src={industry.images[0]} alt="img1" className="w-[132px]" />
            </div>
            <div className="w-50 p-4 flex justify-center rounded-[12px] border-1 border-[#ccc]">
              <img src={industry.images[1]} alt="img2" className="w-[132px]" />
            </div>
          </div>
          <div className="w-full flex justify-center p-4 mb-4 rounded-[12px] border-1 border-[#ccc]">
            <img src={industry.images[2]} alt="img3" className="w-[132px]" />
          </div>

          <button className="hover:bg-[#0a76db] bg-white hover:text-white text-[#0a76db] cursor-pointer border-1 border-[#0a76db] px-5 py-3 rounded-md">
            Discover More
          </button>
        </div>

        <div className="w-[100%]">
          <img src={summitk12} alt="payperks" className="mb-4 w-20" />
          <p className="text-[#0D0D0D] mb-4">
            "Working with Arbisoft has felt less like hiring a vendor and more
            like gaining a team of trusted colleagues. Their developers don’t
            just build what we ask, they think alongside us, offer smart
            suggestions, and care deeply about getting it right."
          </p>
          <div className="flex items-center gap-4">
            <img src={sarah} alt="CEO" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-bold text-sm">Sarah Johnson</p>
              <p className="text-xs text-gray-500">
                VP of Product, Summit K12
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesMegaMenu;
