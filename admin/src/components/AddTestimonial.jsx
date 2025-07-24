import { useState } from "react";
import axios from "axios";
import API from "../api";

const AddTestimonial = () => {
  const [formData, setFormData] = useState({
    category: "",
    text: "",
    name: "",
    title: "",
  });
  const [logo, setLogo] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const data = new FormData();
      data.append("category", formData.category);
      data.append("text", formData.text);
      data.append("name", formData.name);
      data.append("title", formData.title);
      data.append("logo", logo);
      data.append("image", image);

      const res = await API.post("/testimonials", data);
      console.log(res);

      setMsg("Testimonial added successfully!");
      setFormData({ category: "", text: "", name: "", title: "" });
      setLogo(null);
      setImage(null);
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-md w-full mt-8">
      <h2 className="text-xl font-semibold mb-4">Add New Testimonial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            className="w-full border p-2 rounded"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        {/* Name & Title */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Reviewer Name</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 rounded"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Reviewer Title</label>
            <input
              type="text"
              name="title"
              className="w-full border p-2 rounded"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Textarea */}
        <div>
          <label className="block font-medium mb-1">Testimonial Text</label>
          <textarea
            name="text"
            rows={4}
            className="w-full border p-2 rounded"
            value={formData.text}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Logo Upload */}
        <div>
          <label className="block font-medium mb-1">Company Logo</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </div>

        {/* Reviewer Image Upload */}
        <div>
          <label className="block font-medium mb-1">Reviewer Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Testimonial"}
        </button>

        {msg && <p className="mt-3 text-green-600 font-medium">{msg}</p>}
      </form>
    </div>
  );
};

export default AddTestimonial;
