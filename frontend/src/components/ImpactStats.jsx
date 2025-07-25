import bg from "../assets/lines.svg";
import kayak from "../assets/companyLogos/kayak.png";
import careem from "../assets/companyLogos/careem.webp";
import insurify from "../assets/companyLogos/insurify.webp";
import hyperjar from "../assets/companyLogos/hyperjar.webp";
import maiden_century from "../assets/companyLogos/maiden_century.webp";
import predict from "../assets/companyLogos/predict_io.webp";
import twinner from "../assets/companyLogos/twinner.webp";

const ImpactStats = () => {
  return (
    <div className="relative bg-[#f4f5f7] overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-full bg-no-repeat bg-bottom bg-contain opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-0 py-12 flex flex-col justify-center items-center relative z-10">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#223554] mb-6 text-center leading-tight">
          Creating Real Value: Our Track Record with
          <span className="text-[#0A76DB] text-center"> 50+ Tech Startups</span>
        </h2>

        <p className="text-[#0D0D0D] text-[20px] text-center mb-10">
          Our services and solutions have driven growth and success for startups
          globally.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          <div className="text-center px-6">
            <h3 className="text-[35px] font-semibold text-[#223554]">$ 1B+</h3>
            <p className="text-[18px] text-[#0D0D0D] mt-2">In Revenue</p>
          </div>

          <div className="hidden md:block w-px h-[60px] bg-[#d6d6d6] mx-4"></div>
          <div className="block md:hidden w-full h-px bg-[#d6d6d6] my-4"></div>

          <div className="text-center px-6">
            <h3 className="text-[35px] font-semibold text-[#223554]">100M+</h3>
            <p className="text-[18px] text-[#0D0D0D] mt-2">Number of users</p>
          </div>
        </div>

        <div className="flex flex-wrap align-center justify-center gap-2     mt-12">
          <div className="w-[240px] h-[135px] bg-white rounded-[8px] p-[16px] ">
            <img
              src={kayak}
              className="w-full h-full object-contain object-center"
              alt=""
            />
          </div>
          <div className="w-[240px] h-[135px] bg-white rounded-[8px] p-[16px]">
            <img
              src={careem}
              className="w-full h-full object-contain object-center"
              alt=""
            />
          </div>
          <div className="w-[240px] h-[135px] bg-white rounded-[8px] p-[16px]">
            <img
              src={insurify}
              className="w-full h-full object-contain object-center"
              alt=""
            />
          </div>
          <div className="w-[240px] h-[135px] bg-white rounded-[8px] p-[16px]">
            <img
              src={hyperjar}
              className="w-full h-full object-contain object-center"
              alt=""
            />
          </div>
          <div className="w-[240px] h-[135px] bg-white rounded-[8px] p-[16px]">
            <img
              src={maiden_century}
              className="w-full h-full object-contain object-center"
              alt=""
            />
          </div>
          <div className="w-[240px] h-[135px] bg-white rounded-[8px] p-[16px]">
            <img
              src={predict}
              className="w-full h-full object-contain object-center"
              alt=""
            />
          </div>
          <div className="w-[240px] h-[135px] bg-white rounded-[8px] p-[16px]">
            <img
              src={twinner}
              className="w-full h-full object-contain object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
