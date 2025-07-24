import Marquee from "react-fast-marquee";
import bg from "../assets/bg-10.png";

import logo1 from "../assets/companyLogos/2u.png";
import logo2 from "../assets/companyLogos/bvs.png";
import logo3 from "../assets/companyLogos/edx.svg";
import logo4 from "../assets/companyLogos/image 97.svg";
import logo5 from "../assets/companyLogos/kayak.png";
import logo6 from "../assets/companyLogos/lendaid.png";
import logo7 from "../assets/companyLogos/traveliance.png";
import logo8 from "../assets/companyLogos/mit.png";
import logo9 from "../assets/companyLogos/payperks.svg";
import logo10 from "../assets/companyLogos/c10.png";
import logo11 from "../assets/companyLogos/hyperjar.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const StatsSection = () => {
  const [data, setData] = useState({ heading: "", stats: [] });

  useEffect(() => {
    axios.get("http://localhost:3000/api/stat-section").then((res) => {
      console.log(res);

      if (res.data.success) {
        setData(res.data.data);
      }
    });
  }, []);

  const logos = [
    { img: logo1, alt: "logo1" },
    { img: logo2, alt: "logo2" },
    { img: logo3, alt: "logo3" },
    { img: logo4, alt: "logo4" },
    { img: logo5, alt: "logo5" },
    { img: logo6, alt: "logo6" },
    { img: logo7, alt: "logo7" },
    { img: logo8, alt: "logo8" },
    { img: logo9, alt: "logo9" },
    { img: logo10, alt: "logo10" },
    { img: logo11, alt: "logo11" },
  ];

  return (
    <section className="px-4 pt-12 overflow-hidden bg-[#f4f5f7] text-center flex flex-col items-center justify-center">
      <h2 className="text-[#223554] text-[32px] sm:text-[48px] font-semibold leading-snug max-w-5xl mx-auto">
        {data.heading}
      </h2>

      <ul className="mt-12 rounded-[16px] max-w-[1000px] bg-[#223554] text-white flex justify-center px-6 py-9 flex-wrap gap-y-8">
        {data.stats.map((item, index) => (
          <li
            key={index}
            className={`text-center px-8 ${
              data.stats.length - 1 === index ? "" : "border-r border-white"
            }`}
          >
            <div className="text-[28px] sm:text-[35px] font-semibold text-white">
              {item.title}
            </div>
            <div className="text-[16px] sm:text-[18px] text-[#d9d9d9]">
              {item.subtitle}
            </div>
          </li>
        ))}
      </ul>

      <div
        className="w-full py-17"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Marquee pauseOnHover={true} speed={50} direction="left">
          {logos.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.alt}
              className="mx-10 h-12 grayscale-[100%] hover:grayscale-0 transition-all duration-300 max-h-[45px]"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default StatsSection;
