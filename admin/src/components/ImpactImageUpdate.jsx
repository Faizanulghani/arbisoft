import { useState } from "react";
import API from "../api";

const ImpactImageUpdate = () => {
  const [logo, setLogo] = useState(null);
  let [updatedMessage, setUpdatedMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleLogoUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", logo);
      let res = await API.post("/impact/image", formData);
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
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md mt-10">
      <h2 className="text-xl font-semibold mb-4">Upload Impact Logo</h2>
      <form onSubmit={handleLogoUpload} className="space-y-4">
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
      {updatedMessage && (
        <p className="mt-2 text-green-700 font-medium">{updatedMessage}</p>
      )}
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default ImpactImageUpdate;
