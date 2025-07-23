import React, { useState, useEffect } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("Please select a file");

    const formData = new FormData();
    formData.append("logo", file);

    try {
      const res = await API.put("/header/logo", formData);
      if (res.data.success) {
        setMessage("Logo uploaded successfully!");
      } else {
        setMessage("Upload failed: " + res.data.message);
      }
    } catch (err) {
      setMessage("Error uploading logo");
    }
  };

  const handlePreview = (e) => {
    const img = e.target.files[0];
    setFile(img);
    setPreview(URL.createObjectURL(img));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={handlePreview} />
        <button type="submit">Upload Logo</button>
      </form>
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <h4>Preview:</h4>
          <img src={preview} alt="Preview" style={{ height: "80px" }} />
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminDashboard;
