import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import axios from "axios";

const OurOfferings = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [offerings, setOfferings] = useState([]);
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/offerings/${activeTab}`
        );
        if (res.data.success) {
          setOfferings(res.data.offerings || []);
          setSelectedOfferIndex(0);
          setExpandedIndex(null);
        }
      } catch (err) {
        console.error("Failed to fetch offerings:", err);
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <section className="px-4 md:px-10 py-12">
      <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#223554] mb-6 text-center leading-tight">
        Our<span className="text-[#0A76DB]"> Offerings</span>
      </h2>
      <p className="text-[#0D0D0D] max-w-[1000px] mx-auto text-[20px] text-center mb-10">
        From development to QA to IT operations and AI, we offer a broad range
        of tech services and solutions customized to your needs.
      </p>

      <div className="flex items-center justify-center mb-4">
        <button
          onClick={() => setActiveTab("services")}
          className={`p-[27.5px] text-[22px] transition-all duration-300 border-b-2 ${
            activeTab === "services"
              ? "border-[#0a76db] text-[#0a76db]"
              : "border-[#d9d9d9]"
          }`}
        >
          Our Services
        </button>
        <button
          onClick={() => setActiveTab("solutions")}
          className={`p-[27.5px] text-[22px] transition-all duration-300 border-b-2 ${
            activeTab === "solutions"
              ? "border-[#0a76db] text-[#0a76db]"
              : "border-[#d9d9d9]"
          }`}
        >
          Our Solutions
        </button>
      </div>

      <div className="block md:hidden">
        {offerings.map((offer, index) => (
          <div key={index} className="border-b border-[#d9d9d9]">
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className={`w-full flex items-center justify-between text-left text-[20px] py-4 font-medium transition-colors duration-300 ${
                expandedIndex === index ? "text-[#0a76db]" : "text-[#223554]"
              }`}
            >
              {offer.title}
              {expandedIndex === index ? (
                <FaChevronUp size={20} className="text-[#0a76db]" />
              ) : (
                <FaChevronDown size={20} className="text-[#223554]" />
              )}
            </button>
            {expandedIndex === index && (
              <div
                className="bg-[#fafafb] p-4 animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: offer.content }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="hidden md:flex p-6">
        <div className="flex flex-col md:flex-row items-start w-full">
          <div className="flex flex-col space-y-2 w-[25%] min-w-max border-r border-[#d9d9d9]">
            {offerings.map((offer, index) => (
              <button
                key={index}
                onClick={() => setSelectedOfferIndex(index)}
                className={`relative text-left text-[24px] pt-[26px] pr-[48px] pb-[26px] pl-[0] text-[#223554] rounded-md transition-all ${
                  index === selectedOfferIndex
                    ? "after:content-[''] after:absolute after:top-1/2 after:right-0 after:h-1/2 after:w-1 after:bg-[#0a76db] after:rounded-l-sm after:transform after:-translate-y-1/2 text-[#0a76db]"
                    : "hover:text-[#0a76db]"
                }`}
              >
                {offer.title}
              </button>
            ))}
          </div>

          <div className="flex-1 animate-fadeIn bg-[#fafafb] py-[72px] px-[32px] ml-3 myContent">
            {offerings[selectedOfferIndex] && (
              <div
                dangerouslySetInnerHTML={{
                  __html: offerings[selectedOfferIndex].content,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
