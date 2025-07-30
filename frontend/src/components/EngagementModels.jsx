import { useEffect, useState } from "react";
import dedicatedTeam from "../assets/Dedicated_Team.gif";
import softwareOutsourcing from "../assets/Software_Outsourcing.gif";
import staffAugmentation from "../assets/Staff_Augmentation.gif";
import axios from "axios";

const EngagementModels = () => {
  let [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      await axios
        .get("http://localhost:3000/api/engagement/gettitle")
        .then((res) => {
          setTitle(res.data.data[0].title);
        });
      await axios
        .get("http://localhost:3000/api/serviceblock")
        .then((res) => {          
          if (res.data.success) {
            const sorted = [...res.data.blocks].sort(
              (a, b) => a.order - b.order
            );
            setBlocks(sorted);
          }
        });
    };
    fetchBlocks();
  }, []);
  return (
    <section className="px-4 md:px-10 py-12">
      <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#223554] mb-12 text-center leading-tight">
        {title}
      </h2>

      <div className="space-y-12">
        {blocks.map((block) => (
          <div
            key={block._id}
            className="bg-[#f5f5f5] flex flex-col md:flex-row items-center rounded-[16px] overflow-hidden"
          >
            <div className="w-full md:w-1/2 px-6 py-10 md:px-10">
              <h3 className="text-[32px] md:text-[35px] font-semibold text-[#223554]">
                {block.title}
              </h3>
              <p className="text-[18px] md:text-[20px] mt-6">
                {block.subtitle}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={block.imageUrl}
                alt={block.title}
                className="w-full h-auto max-h-[310px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngagementModels;
