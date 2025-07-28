import { useState } from "react";
import img from "../assets/contact.webp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    countryCode: "+92",
    description: "",
    budget: "",
  });

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center ">
      <div className="flex w-full flex-col md:flex-row">
        <div className="bg-[#0a76db] flex-2 hidden md:flex items-center justify-end">
          <img
            src={img}
            alt="Talk to us"
            className="object-contain w-auto h-[905px]"
          />
        </div>

        <div className="flex-3 md:w-[65%] lg:w-full py-[64px] lg:px-[32px] px-[16px]">
          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[#223554] mb-6">
            Have Questions? Let's Talk.
          </h2>
          <p className="text-[18px] text-[#0D0D0D] mb-10">
            We have got the answers to your questions
          </p>

          <form className="flex items-baseline flex-col gap-[42px]">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="Your Name *"
                className="flex-1 border-0 border-b border-[#ccc] px-1 py-2 focus:outline-none focus:border-[#0a76db]"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="flex-1 border-0 border-b border-[#ccc] px-1 py-2 focus:outline-none focus:border-[#0a76db]"
              />
            </div>

            <select className="w-full border-0 border-b border-[#ccc] px-1 py-2 text-[#555] focus:outline-none focus:border-[#0a76db]">
              <option>Select the service you need *</option>
              <optgroup label="Development & QA">
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Quality Assurance</option>
              </optgroup>
            </select>

            <div className="flex gap-4">
              <select className=" border-0 border-b border-[#ccc] px-1 py-2 text-[#555] focus:outline-none focus:border-[#0a76db]">
                <option value="+92">+92</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 border-0 border-b border-[#ccc] px-1 py-2 focus:outline-none focus:border-[#0a76db]"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Please describe your project *"
              className="w-full border-0 border-b border-[#ccc] px-1 py-2 focus:outline-none focus:border-[#0a76db] resize-none"
            ></textarea>

            <select className="w-full border-0 border-b border-[#ccc] px-1 py-2 text-[#555] focus:outline-none focus:border-[#0a76db]">
              <option>What is your budget? *</option>
              <option>Less than USD 50,000</option>
              <option>USD 50,000 - USD 100,000</option>
              <option>USD 100,000 - USD 200,000</option>
            </select>

            <div className="flex gap-3">
              <input type="checkbox" id="nda" />
              <label htmlFor="nda" className="text-[#6A6A6A] text-[17px]">
                Request NDA
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#0a76db] hover:bg-[#085eb6] text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
