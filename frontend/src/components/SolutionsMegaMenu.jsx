const servicesData = [
  {
    title: "Data Engineering",
    items: [
      "Data Science",
      "Data Analytics",
      "Data Warehousing",
      "Data Visualization",
      "Data Scraping",
    ],
  },
  {
    title: "AI & ML",
    items: [
      "Business Intelligence",
      "Deep Learning",
      "Machine Learning",
      "Generative AI",
      "Predictive Analysis",
      "Sentiment Analysis",
    ],
  },
  {
    title: "E-Commerce",
    items: [
      "AI Chatbots & Customer Support",
      "eCommerce Development",
      "Voice Commerce",
      "Customer Segmentation",
    ],
  },
];

import img from "../assets/companyLogos/edx.svg";
import ceo from "../assets/ceo.webp";

const SolutionsMegaMenu = () => {
  return (
    <div className="lg:absolute relative top-0 lg:top-[61px] left-0 z-50 bg-white px-8 lg:py-0 py-4 lg:gap-0 gap-4 flex flex-col items-center justify-between lg:flex-row w-[100%]">
      <div className="flex lg:flex-row flex-col w-[100%] lg:w-[60%]">
        {servicesData.map((section, index) => (
          <div key={index} className="w-full lg:w-1/3">
            <p className="mb-3 lg:mt-0 mt-3 text-[17px] font-bold border-b-2 border-[#fa8f21] inline-block text-[#223554]">
              {section.title}
            </p>
            <ul className="flex flex-col items-start">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="text-[16px] text-[#000000] py-1 transition px-2 rounded-xl hover:text-[#fa8f21] hover:font-semibold hover:bg-[#fff6f1]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-[#f9faff] p-[32px] lg:w-[40%] w-[100%]">
        <img src={img} alt="payperks" className="mb-4 w-20" />
        <p className="text-[#0D0D0D] mb-4">
          “Arbisoft has been a valued partner to edX since 2013. We work with
          their engineers day in and day out to advance the Open edX platform
          and support our learners across the world.”
        </p>
        <div className="flex items-center gap-4">
          <img src={ceo} alt="CEO" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-bold text-sm">Jake Peters</p>
            <p className="text-xs text-gray-500">CEO & Co-Founder, PayPerks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMegaMenu;
