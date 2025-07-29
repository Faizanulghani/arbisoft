import bg from "../assets/lines.svg";
import renderTitle from "../utils/renderTitle";

const ImpactStats = ({ text, logos }) => {
  return (
    <div className="relative bg-[#f4f5f7] overflow-hidden">
      <div
        className="absolute md:bottom-0 bottom-[18%] top-0 left-0 w-full bg-no-repeat bg-bottom bg-contain opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col justify-center items-center relative z-10">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#223554] mb-6 text-center leading-tight">
          {renderTitle(text.heading, text.highlightword)}
        </h2>

        <p className="text-[#0D0D0D] text-[20px] text-center mb-10">
          {text.subheading}
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

        <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
          {logos.map((item, index) => (
            <div
              key={index}
              className="lg:w-[240px] w-[120px] lg:h-[135px] h-[70px] bg-white rounded-[8px] p-[16px]"
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

export default ImpactStats;
