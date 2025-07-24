import axios from "axios";
import { useEffect, useState } from "react";

const Feedback = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(4);
  const [loading, setLoading] = useState(false);

  const categories = [
    "All",
    "Ed-Tech",
    "Travel",
    "Fintech",
    "Healthcare",
    "Technology",
    "E-commerce",
  ];

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const url =
        filter === "All"
          ? "http://localhost:3000/api/testimonials"
          : `http://localhost:3000/api/testimonials?category=${filter}`;
      const res = await axios.get(url);
      setTestimonials(res.data);
    } catch (err) {
      console.error("Error fetching testimonials", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
    setVisible(4);
  }, [filter]);

  const visibleTestimonials = testimonials.slice(0, visible);

  return (
    <section className="px-4 md:px-10 py-12">
      <h2 className="text-[48px] font-semibold text-[#223554] mb-6">
        What Our <span className="text-[#0A76DB]">Clients</span> Say About Us
      </h2>

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
            }}
            className={`px-4 py-2 rounded-full border ${
              filter === cat
                ? "bg-[#0A76DB] text-white"
                : "bg-white text-[#223554] border-[#ccc]"
            } transition-all`}
          >
            {cat}
          </button>
        ))}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {visibleTestimonials.map((t) => (
            <div
              key={t._id}
              className="break-inside-avoid border border-[#ccc] rounded-[1em] p-8 flex flex-col gap-6 bg-white"
            >
              <img
                src={t.logo}
                alt="Company Logo"
                className="max-w-[140px] h-auto object-contain"
              />

              <p className="text-[#223554] text-base leading-relaxed">
                “{t.text}”
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#223554]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {visible < testimonials.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisible((prev) => prev + 4)}
            className="px-6 py-2 bg-[#0A76DB] text-white rounded-full font-medium hover:bg-[#095bb5] transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Feedback;
