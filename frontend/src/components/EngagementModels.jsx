import dedicatedTeam from "../assets/Dedicated_Team.gif";
import softwareOutsourcing from "../assets/Software_Outsourcing.gif";
import staffAugmentation from "../assets/Staff_Augmentation.gif";

const EngagementModels = () => {
  return (
    <section className="px-4 md:px-10 py-12">
      <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#223554] mb-12 text-center leading-tight">
        How Can We Work With You
      </h2>

      <div className="space-y-12">
        <div className="bg-[#f5f5f5] flex flex-col md:flex-row items-center rounded-[16px] overflow-hidden">
          <div className="w-full md:w-1/2 px-6 py-10 md:px-10">
            <h3 className="text-[32px] md:text-[35px] font-semibold text-[#223554]">
              IT Staff Augmentation
            </h3>
            <p className="text-[18px] md:text-[20px] mt-6">
              Fill skills gaps fast by bringing in qualified professionals
              whenever you need them.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={staffAugmentation}
              alt="IT Staff Augmentation"
              className="w-full h-auto max-h-[310px] object-cover"
            />
          </div>
        </div>

        <div className="bg-[#f5f5f5] flex flex-col md:flex-row items-center rounded-[16px] overflow-hidden">
          <div className="w-full md:w-1/2 px-6 py-10 md:px-10">
            <h3 className="text-[32px] md:text-[35px] font-semibold text-[#223554]">
              Dedicated Teams
            </h3>
            <p className="text-[18px] md:text-[20px] mt-6">
              You get a fully committed team that integrates into your
              organization and culture.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={dedicatedTeam}
              alt="Dedicated Teams"
              className="w-full h-auto max-h-[310px] object-cover"
            />
          </div>
        </div>

        <div className="bg-[#f5f5f5] flex flex-col md:flex-row items-center rounded-[16px] overflow-hidden">
          <div className="w-full md:w-1/2 px-6 py-10 md:px-10">
            <h3 className="text-[32px] md:text-[35px] font-semibold text-[#223554]">
              Software Development Outsourcing
            </h3>
            <p className="text-[18px] md:text-[20px] mt-6">
              We build your software from start to finish, letting you focus on
              your core business.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={softwareOutsourcing}
              alt="Software Development Outsourcing"
              className="w-full h-auto max-h-[310px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
