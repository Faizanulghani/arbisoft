const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-screen-xl mx-auto">
      {/* Left Content */}
      <div className="max-w-[730px] mb-10 md:mb-0">
        <h1 className="text-[60px] leading-[1.2] tracking-[-2px] text-[#223554] font-bold">
          We Create <span className="text-[#0a76db]">Value</span> Through
          Innovative and Reliable Tech Solutions
        </h1>
        <p className="text-[20px] text-[#0D0D0D] mt-6">
          Trusted by top platforms like <span className="font-bold">edX</span>,{" "}
          <span className="font-bold">KAYAK</span>, and{" "}
          <span className="font-bold">Careem</span> for our transformative
          solutions and exceptional results.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#0a76db] text-white rounded-md font-semibold hover:bg-[#085eb6] transition">
          Let's Talk
        </button>
      </div>

      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="banner-background.webp"
          alt="Tech Illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
