import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import renderTitle from "../utils/renderTitle";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [logo, setLogo] = useState();
  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const logo = await axios.get("http://localhost:3000/api/footer/getimg");
        const res = await axios.get("http://localhost:3000/api/footer");
        setLogo(logo.data.data.logoUrl);
        if (res.data.success) {
          setFooterData(res.data.footer);
        }
      } catch (err) {
        console.error("Failed to fetch footer:", err);
      }
    };

    fetchFooter();
  }, []);

  return (
    <div className="w-full bg-[#02264b] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 justify-between">
        <div className="w-full lg:w-[45%]">
          <img src={logo} alt="Logo" className="mb-4 w-[160px]" />

          <h2 className="text-[42px] md:text-[56px] font-bold tracking-[-2px] leading-tight mb-6">
            {renderTitle(footerData?.heading, footerData?.highlightWords?.[0])}
          </h2>

          <p className="text-[18px] font-medium mb-4">
            Awards & Certifications
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {footerData?.certificates?.map((img, idx) => (
              <div
                key={idx}
                className="w-[120px] h-[100px] sm:w-[136px] sm:h-[110px] bg-[#011c37] p-4 rounded-[8px] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`Cert ${idx + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <FaEnvelope className="text-lg" />
            <span>{footerData?.contactEmail || "contact@arbisoft.com"}</span>
          </div>

          <div className="flex gap-4 mt-4">
            {[
              { icon: FaFacebookF, url: footerData?.socialLinks?.facebook },
              { icon: FaTwitter, url: footerData?.socialLinks?.twitter },
              { icon: FaLinkedinIn, url: footerData?.socialLinks?.linkedin },
            ].map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#02264b] transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Useful Links",
                links: ["Home", "Services", "About Us", "Contact"],
              },
              {
                title: "Arbisoft Products",
                links: [
                  "Careers",
                  "Privacy Policy",
                  "Terms of Service",
                  "Blog",
                ],
              },
              {
                title: "Careers",
                links: ["Help Center", "FAQs", "Live Chat", "Community"],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="text-[18px] font-bold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li
                      key={idx}
                      className="text-[#bdc5cd] text-sm hover:text-[#57cba6] cursor-pointer transition"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-[18px] font-medium mb-6">Our Global Offices</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {footerData?.offices?.map((office, index) => (
                <div key={index} className="w-full">
                  <p className="mb-[9px] text-[18px] font-bold">
                    {office.city}
                  </p>
                  {office.phone && (
                    <a
                      href={`tel:${office.phone}`}
                      className="flex gap-2 items-center text-[#bdc5cd]"
                    >
                      <IoCallOutline /> {office.phone}
                    </a>
                  )}
                  <div className="flex gap-2 items-center text-[#bdc5cd]">
                    <IoLocationOutline /> {office.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 border-t-1 border-[#586472] py-4 flex items-center justify-between">
        <div className="flex gap-2">
          <a href="#" className="border-r-1 pr-2">
            Privacy Policy
          </a>
          <a href="#" className="border-r-1 pr-2">
            Security Policy
          </a>
          <a href="#">Cookie Policy</a>
        </div>
        <p>© 2025 Arbisoft. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
