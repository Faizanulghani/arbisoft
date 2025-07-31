import { useState } from "react";
import axios from "axios";
const Newsletter = () => {
  let [newsLetter, setNewsLetter] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3000/api/newsletter", {
      email: newsLetter,
    });
    console.log(res);
    if (res.data.success) {
      alert(res.data.message);
    } else {
      alert(res.data.message);
    }
  };
  return (
    <div className="w-full bg-[#001a34] text-white py-6">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-[40px] font-semibold tracking-[-2px] mb-3">
            Newsletter
          </h2>
          <p className="text-[20px] leading-snug">
            Join us to stay connected with the global trends and technologies
          </p>
        </div>

        <div className="bg-white rounded-md px-4 py-3 w-full max-w-md">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              value={newsLetter}
              onChange={(e) => setNewsLetter(e.target.value)}
              className="flex-1 w-full text-[#001a34] placeholder:text-[#999] px-2 py-1 focus:outline-none border-none"
            />
            <button className="bg-[#0a76db] text-white px-6 py-2 rounded-md font-medium hover:bg-[#085eb6] transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
