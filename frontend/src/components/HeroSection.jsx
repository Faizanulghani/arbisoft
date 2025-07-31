import renderTitle from "../utils/renderTitle";

const HeroSection = ({ title, description, heroImage, highlightWord }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-center justify-between pl-6 max-w-[100%] mx-auto">
        <div className="max-w-[730px] mb-10 md:mb-0 z-10 lg:py-0 py-13">
          <h1 className="text-[40px] sm:text-[48px] md:text-[60px] leading-[1.2] tracking-[-2px] text-[#223554] font-bold">
            {renderTitle(title, highlightWord)}
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[#0D0D0D] mt-6">
            {description}
          </p>
          <button className="mt-8 px-6 py-3 bg-[#0a76db] text-white rounded-md font-semibold hover:bg-[#085eb6] transition">
            Let's Talk
          </button>
        </div>
        {heroImage && (
          <div className="hidden md:flex w-full justify-center lg:relative absolute right-0">
            <img
              src={heroImage}
              alt="Tech Illustration"
              className="max-w-[100%] w-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
