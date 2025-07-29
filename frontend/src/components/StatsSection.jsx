import Marquee from "react-fast-marquee";
import bg from "../assets/bg-10.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import renderTitle from "../utils/renderTitle";

const StatsSection = () => {
  const [data, setData] = useState({
    heading: "",
    stats: [],
    highlightWord: "",
  });
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/stat-section").then((res) => {
      if (res.data.success) {
        setData(res.data.data);
      }
    });
    axios
      .get("http://localhost:3000/api/stat-section/statimage")
      .then((res) => {
        if (res.data.success) {
          setLogos(res.data.data);
        }
      });
  }, []);


  return (
    <section className="px-4 pt-12 overflow-hidden bg-[#f4f5f7] text-center flex flex-col items-center justify-center">
      <h2 className="text-[#223554] text-[32px] sm:text-[48px] font-semibold leading-snug max-w-5xl mx-auto">
        {renderTitle(data.heading, data.highlightWord)}
      </h2>

      <ul className="mt-12 rounded-[16px] max-w-[1000px] bg-[#223554] text-white flex justify-center px-6 py-9 flex-wrap gap-y-8">
        {data.stats.map((item, index) => (
          <li
            key={index}
            className={`text-center px-8 ${
              data.stats.length - 1 === index
                ? ""
                : "border-b md:border-b-0 md:border-r"
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
              src={item.image}
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
