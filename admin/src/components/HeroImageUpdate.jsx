import { useState } from "react";
import API from "../api";

const HeroImageUpdate = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState("");
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("Please select a file");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await API.put("/hero-section/hero-img", formData);
      if (res.data.success) {
        setMessage("✅ Logo uploaded successfully!");
      } else {
        setMessage("❌ Upload failed: " + res.data.message);
      }
    } catch (err) {
      setMessage("❌ Error uploading logo");
    }
  };

  const handlePreview = (e) => {
    const img = e.target.files[0];
    setFile(img);
    setPreview(URL.createObjectURL(img));
  };
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-md w-full mt-8">
      <h2 className="text-xl font-semibold mb-4">Update Hero Image</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept="image/*,image/webp"
          onChange={handlePreview}
          className="block w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
      {preview && (
        <div className="mt-4">
          <h4 className="mb-2">Preview:</h4>
          <img src={preview} alt="Preview" className="h-20 object-contain" />
        </div>
      )}
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
};

export default HeroImageUpdate;
