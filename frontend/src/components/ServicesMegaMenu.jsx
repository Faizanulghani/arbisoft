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

const ServicesMegaMenu = () => {
  return (
    <div className="lg:absolute relative top-0 lg:top-[50px] left-0 lg:-left-88 z-50 bg-white p-8 flex flex-col lg:flex-row gap-8 w-full lg:w-[1100px]">
      {servicesData.map((section, index) => (
        <div key={index} className="w-full lg:w-1/3">
          <p
            className="mb-3"
            style={{
              fontSize: "17px",
              fontWeight: "700",
              color: "#223554",
            }}
          >
            {section.title}
          </p>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#000000",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicesMegaMenu;
