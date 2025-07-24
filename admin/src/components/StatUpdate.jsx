import { useState } from "react";
import axios from "axios";
import API from "../api";

const StatUpdate = () => {
  const [heading, setHeading] = useState("");
  const [stats, setStats] = useState([
    { title: "", subtitle: "" },
    { title: "", subtitle: "" },
    { title: "", subtitle: "" },
    { title: "", subtitle: "" },
  ]);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleStatChange = (index, key, value) => {
    const updated = [...stats];
    updated[index][key] = value;
    setStats(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const res = await API.post("/stat-section", {
        heading,
        stats,
      });
      if (res.data.success) {
        setMsg("Updated successfully!");
      } else {
        setMsg("Failed to update.");
      }
    } catch (err) {
      setMsg("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-md w-full mt-8">
      <h2 className="text-xl font-semibold mb-4">Update Hero Description</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Heading</label>
          <textarea
            rows={3}
            className="w-full border p-2 rounded"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>

        {stats.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Title #{index + 1}</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={item.title}
                onChange={(e) =>
                  handleStatChange(index, "title", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block font-medium">Subtitle #{index + 1}</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={item.subtitle}
                onChange={(e) =>
                  handleStatChange(index, "subtitle", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Stats Section"}
        </button>
        {msg && <p className="mt-3 text-green-600 font-medium">{msg}</p>}
      </form>
    </div>
  );
};

export default StatUpdate;
