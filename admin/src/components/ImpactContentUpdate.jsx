import { useState } from "react";
import API from "../api";

const ImpactContentUpdate = () => {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [highlightword, setHighlightword] = useState("");
  let [updatedMessage, setUpdatedMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await API.post("/impact/content", {
      heading,
      highlightword,
      subheading,
    });
    if (res.data.success) {
        setTimeout(() => {
            setUpdatedMessage("");
        }, 2000);
        setUpdatedMessage(res.data.message);
    } else {
      setMessage("Update failed: " + res.data.message);
    }
    } catch (error) {
        setMessage("Something went wrong");
    }
    
  };
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-md w-full mt-8">
      <h2 className="text-xl font-semibold mb-4">Update Impact Content</h2>
      <form onSubmit={handleTextSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter new title"
          className="w-full border px-3 py-2 rounded"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter new subtitle"
          className="w-full border px-3 py-2 rounded"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
        />
        <input
          type="text"
          placeholder="Word to highlight"
          className="w-full border px-3 py-2 rounded"
          value={highlightword}
          onChange={(e) => setHighlightword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>
      {updatedMessage && (
        <p className="mt-2 text-green-700 font-medium">{updatedMessage}</p>
      )}
      {message && <p className="mt-2 text-red-600 font-medium">{message}</p>}
    </div>
  );
};

export default ImpactContentUpdate;
