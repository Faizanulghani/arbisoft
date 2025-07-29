import { useState, useEffect } from "react";
import API from "../api";

const OfferingsUpdate = () => {
  const [type, setType] = useState("services");
  const [items, setItems] = useState([{ title: "", details: "" }]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const res = await API.get(`/offerings/${type}`);
        if (res.data.success) {
          const data = res.data;
          setItems(
            data.offerings.map((o) => ({
              id: o._id,
              title: o.title,
              details: o.content,
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch offerings:", error);
      }
    };

    fetchOfferings();
  }, [type]);

  const handleItemChange = (index, key, value) => {
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      [key]: value,
    };
    setItems(updated);
  };

  const addNewItem = () => {
    setItems([...items, { title: "", details: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      for (const item of items) {
        const payload = {
          id: item.id || null,
          type,
          title: item.title,
          content: item.details,
        };
        await API.post("/offerings", payload);
      }

      const res = await API.get(`/offerings/${type}`);
      if (res.data.success) {
        setItems(
          res.data.offerings.map((o) => ({
            id: o._id,
            title: o.title,
            details: o.content,
          }))
        );
      }

      setMessage("Updated successfully!");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error(err);
      setMessage("Failed to update");
    }
  };

  return (
    <div className="w-[32%] mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-semibold mb-4">Update Our Offerings</h2>

      <div className="mb-4">
        <label className="mr-4">Choose Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="services">Services</option>
          <option value="solutions">Solutions</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg font-semibold mt-4">Offerings List</h3>

        {items.map((item, index) => (
          <div key={index} className="border p-3 rounded bg-gray-50">
            <input
              type="text"
              placeholder="Offering Title"
              value={item.title}
              onChange={(e) => handleItemChange(index, "title", e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
            />
            <textarea
              rows={5}
              placeholder="Offering Content (HTML/JSX allowed)"
              value={item.details}
              onChange={(e) =>
                handleItemChange(index, "details", e.target.value)
              }
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addNewItem}
          className="mt-2 text-blue-600"
        >
          + Add More
        </button>

        <button
          type="submit"
          className="block bg-blue-600 text-white px-4 py-2 mt-6 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default OfferingsUpdate;
