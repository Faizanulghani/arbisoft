import { useState } from "react";
import API from "../api";

const StatUpdate = () => {
  const [heading, setHeading] = useState("");
  const [highlightWord, setHighlightWord] = useState("");
  const [stats, setStats] = useState([
    { title: "", subtitle: "" },
    { title: "", subtitle: "" },
    { title: "", subtitle: "" },
    { title: "", subtitle: "" },
  ]);

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");

  const handleStatChange = (index, key, value) => {
    const updated = [...stats];
    updated[index][key] = value;
    setStats(updated);
  };

  const handleHeadingSubmit = async (e) => {
    e.preventDefault();
    setLoading1(true);
    setMsg1("");
    try {
      const res = await API.post("/stat-section/heading", {
        heading,
        highlightWord,
      });
      if (res.data.success) {
        setTimeout(() => {
          setMsg1("");
        }, 2000);
        setMsg1("Heading and Highlight updated successfully!");
        setLogo(null);
      } else {
        setMsg1("Failed to update.");
      }
    } catch (err) {
      setMsg1("Error: " + err.message);
    }
    setLoading1(false);
  };

  const handleStatsSubmit = async (e) => {
    e.preventDefault();
    setLoading2(true);
    setMsg2("");
    try {
      const res = await API.post("/stat-section/stats", { stats });
      if (res.data.success) {
        setTimeout(() => {
          setMsg2("");
        }, 2000);
        setMsg2("Stats updated successfully!");
        setLogo(null);
      } else {
        setMsg2("Failed to update stats.");
      }
    } catch (err) {
      setMsg2("Error: " + err.message);
    }
    setLoading2(false);
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-2xl w-full mt-8 space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Update Section Heading</h2>
        <form onSubmit={handleHeadingSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Heading</label>
            <textarea
              rows={3}
              className="w-full border p-2 rounded"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Highlight Words (comma separated)
            </label>
            <input
              type="text"
              value={highlightWord}
              onChange={(e) => setHighlightWord(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="e.g. Build,Digital,Scale"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            disabled={loading1}
          >
            {loading1 ? "Updating..." : "Update Heading"}
          </button>
        </form>
      </div>
      {msg1 && <p className="text-green-600 font-medium">{msg1}</p>}
      <hr className="border-gray-300" />

      <div>
        <h2 className="text-xl font-semibold mb-4">Update Stats</h2>
        <form onSubmit={handleStatsSubmit} className="space-y-4">
          {stats.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label className="block font-medium">
                  Subtitle #{index + 1}
                </label>
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
            className="bg-blue-600 text-white px-6 py-2 mt-2 rounded hover:bg-blue-700"
            disabled={loading2}
          >
            {loading2 ? "Updating..." : "Update Stats"}
          </button>
        </form>
      </div>

      {msg2 && <p className="text-green-600 font-medium">{msg2}</p>}
    </div>
  );
};

export default StatUpdate;
