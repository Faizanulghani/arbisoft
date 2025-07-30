import { useState } from "react";
import API from "../api";

const Inquiry = () => {
  const [updatedMessage, setUpdatedMessage] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [highlightword, setHighlightword] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("highlightword", highlightword);
      if (image) formData.append("image", image);

      const response = await API.post("/inquiry", formData);
      if (response.data.success) {
        setUpdatedMessage(response.data.message);
        setTimeout(() => setUpdatedMessage(""), 2000);
      } else {
        setMessage("Update failed: " + response.data.message);
      }
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-md w-full mt-8">
      <h2 className="text-xl font-semibold mb-4">Update Inquiry Section</h2>
      <form onSubmit={handleTitleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Enter new title"
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter new sub title"
          className="w-full border px-3 py-2 rounded"
          value={subtitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter new highlight word"
          className="w-full border px-3 py-2 rounded"
          value={highlightword}
          onChange={(e) => setHighlightword(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setImage(e.target.files[0])}
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

export default Inquiry;
