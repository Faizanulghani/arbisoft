import { useState } from "react";
import API from "../api";

const StatImageUpdate = () => {
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!logo) return setMessage("Please select an image.");

    const formData = new FormData();
    formData.append("image", logo);

    try {
      const res = await API.post("/stat-section/statimage", formData);
      if (res.data.success) {
        setTimeout(() => {
            setMessage("");
        }, 2000);
        setMessage("Logo uploaded successfully!");
        setLogo(null);
      } else {
        setMessage("Upload failed.");
      }
    } catch (err) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md mt-10">
      <h2 className="text-xl font-semibold mb-4">Upload Company Logo</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default StatImageUpdate;
