import clutch from "../assets/companyLogos/clutch.png";
import clutch2 from "../assets/companyLogos/clutch2.png";
import clutch3 from "../assets/companyLogos/clutch3.png";
import clutch4 from "../assets/companyLogos/clutch4.png";
import clutch5 from "../assets/companyLogos/clutch5.png";
import consulting from "../assets/companyLogos/consulting_partner.png";
import goodfirms from "../assets/companyLogos/goodfirms.svg";
import iso from "../assets/companyLogos/iso.png";
import openedx from "../assets/companyLogos/open_edx.png";
import softwaredevelopers from "../assets/companyLogos/software_developers.svg";
import zb from "../assets/companyLogos/zb.png";
import zyte from "../assets/companyLogos/zyte.png";
import aws from "../assets/companyLogos/aws.png";
import android from "../assets/companyLogos/android.svg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const RecognitionSection = () => {
  let [title, setTitle] = useState("");
  let [subTitle, setSubTitle] = useState("");
  let [image, setImage] = useState([]);
  const companyLogos = [
    clutch,
    aws,
    openedx,
    clutch2,
    zyte,
    iso,
    clutch3,
    android,
    clutch4,
    clutch5,
    softwaredevelopers,
    zb,
    consulting,
    goodfirms,
  ];

  useEffect(() => {
    axios.get("http://localhost:3000/api/recognition/content").then((res) => {
      setTitle(res.data.recognition.title);
      setSubTitle(res.data.recognition.subtitle);
    });

    axios.get("http://localhost:3000/api/recognition/image").then((res) => {
      setImage(res.data.image);
    });
  }, []);

  return (
    <div className="bg-[#223554]">
      <div className="max-w-[1440px] mx-auto py-12 ">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-white text-center leading-tight">
          {title}
        </h2>

        <p className="text-white text-[20px] text-center mb-10">{subTitle}</p>

        <div className="flex mx-w-[1200px] mx-[32px] flex-wrap items-center justify-center gap-2 mt-12">
          {image.map((item, index) => (
            <div
              key={index}
              className="w-[115px] h-[115px] bg-white rounded-[8px] p-[16px]"
            >
              <img
                src={item.image}
                alt={`Company logo ${index + 1}`}
                className="w-full h-full object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecognitionSection;
