const servicesData = [
  {
    title: "Development & QA",
    items: [
      "UX/UI Design",
      "Backend Development",
      "Custom Software Development",
      "Software Testing",
      "SAAS Development",
      "MVP Development",
      "Software Consulting",
      "Frontend Development",
      "Enterprise Software Development",
    ],
  },
  {
    title: "Mobility & Apps",
    items: [
      "Mobile App Development",
      "Android App Development",
      "iOS App Development",
      "Web App Development",
    ],
  },
  {
    title: "IT Operations",
    items: [
      "Odoo ERP Services",
      "DevOps Services",
      "Cybersecurity",
      "Infrastructure Design",
    ],
  },
];

import bg from "../assets/service_nav.png";

const ServicesMegaMenu = () => {
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
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="p-[32px] lg:w-[40%] w-[100%] lg:h-[480px] h-[300px]"
      >
        <h2 className="text-[#71bbff] text-[40px] font-black">NPS</h2>
        <strong className="text-[48px] font-semibold text-white ">81.8%</strong>
        <p className="text-white">
          78% of our clients believe that Arbisoft is better than most other
          providers they have worked with.
        </p>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
