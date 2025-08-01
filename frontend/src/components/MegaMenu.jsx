import { useRef, useState } from "react";
import {
  FaUsers,
  FaProjectDiagram,
  FaCodeBranch,
  FaHandshake,
  FaGlobe,
  FaStar,
} from "react-icons/fa";
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";
import payperks from "../assets/companyLogos/payperks.svg";
import worldBank from "../assets/companyLogos/world bank.webp";
import alice from "../assets/alice.webp";
import ceo from "../assets/ceo.webp";
import about from "../assets/about.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const MegaMenu = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className="lg:absolute relative top-0 lg:top-[61px] left-0 lg:-left-88 max-w-[1200px] z-50 bg-[#fff] p-8 flex flex-col lg:flex-row gap-6">
      <div className="bg-white p-6 w-full lg:w-1/2">
        <p className="text-[24px] text-[#223554] font-bold mb-6 border-b-2 border-[#fa8f21] inline-block">
          A Technology Partnership That Goes Beyond Code
        </p>

        <div className="relative">
          <div className="absolute top-0 right-0 flex gap-2 z-10">
            <button
              className="swiper-button-prev-custom"
              disabled={isBeginning}
            >
              <FaArrowLeftLong
                className={`text-[30px] ${
                  isBeginning ? "text-gray-400" : "text-[#0a76db]"
                }`}
              />
            </button>
            <button className="swiper-button-next-custom" disabled={isEnd}>
              <FaArrowRight
                className={`text-[30px] ${
                  isEnd ? "text-gray-400" : "text-[#0a76db]"
                }`}
              />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div>
                <img src={payperks} alt="payperks" className="mb-4 w-20" />
                <p className="text-sm mb-4">
                  “Arbisoft is an integral part of our team and we probably
                  wouldn't be here today without them. Some of their team has
                  worked with us for 5-8 years and we've built a trusted
                  business relationship. We share successes together.”
                </p>
                <div className="flex items-center gap-4">
                  <img src={ceo} alt="CEO" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-bold text-sm">Jake Peters</p>
                    <p className="text-xs text-gray-500">
                      CEO & Co-Founder, PayPerks
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src={worldBank}
                  alt="The world Bank"
                  className="mb-4 w-20"
                />
                <p className="text-sm mb-4">
                  “They delivered a high-quality product and their customer
                  service was excellent. We’ve had other teams approach us,
                  asking to use it for their own projects”.
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={alice}
                    alt="alice"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-sm">Alice Danon</p>
                    <p className="text-xs text-gray-500">
                      Project Coordinator, World Bank
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {[
            {
              icon: <FaUsers />,
              label: "Tech Experts",
              value: "900+",
            },
            {
              icon: <FaProjectDiagram />,
              label: "Projects Completed",
              value: "550+",
            },
            {
              icon: <FaCodeBranch />,
              label: "Tech Stacks",
              value: "50+",
            },
            {
              icon: <FaHandshake />,
              label: "Tech Partnerships",
              value: "100+",
            },
            {
              icon: <FaGlobe />,
              label: "Global Offices",
              value: "4",
            },
            {
              icon: <FaStar />,
              label: "Clutch Rating",
              value: "4.9",
            },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <div className="text-[#0A76DB] text-xl">{stat.icon}</div>
                <p className="text-lg font-bold">{stat.value}</p>
              </div>
              <p className="text-xs text-[#6b7280] text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <div>
          <p className="font-bold mb-2 border-b-2 border-[#fa8f21] inline-block">Company</p>
          <p className="text-xs uppercase mb-2">About Us</p>
          <p className="text-xs uppercase mb-2">Success Stories</p>
          <p className="text-xs uppercase mb-2">Our Products</p>
          <p className="text-xs uppercase mb-2">Blog</p>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <p className="font-semibold mb-1 border-b-2 border-[#fa8f21] inline-block">
            Inside Arbisoft
          </p>
          <p className="text-xs uppercase mb-2">Life at Arbisoft</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Careers</p>
          <p className="text-xs uppercase mb-2">Fresh Grads</p>
          <p className="text-xs uppercase mb-2">Open Positions</p>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <p className="font-semibold mb-2 border-b-2 border-[#fa8f21] inline-block">
            Trending Blogs
          </p>

          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-4 mb-3">
              <img
                src={about}
                alt="Blog"
                className="w-16 h-16 object-cover rounded"
              />
              <p className="text-[13px] underline">
                Machine Learning Experts Hiring Guide 2025: What to Know, What
                to Ask, and What to Avoid
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
