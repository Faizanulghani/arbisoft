import { useEffect, useState } from "react";
import API from "../api";

const Footer = () => {
  const [formData, setFormData] = useState({
    heading: "",
    highlightWords: ["", ""],
    contactEmail: "",
    certificates: [],
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    offices: [{ city: "", phone: "", address: "" }],
  });

  const [message, setMessage] = useState("");

  const fetchFooter = async () => {
    try {
      const res = await API.get("/footer");
      if (res.data.success && res.data.footer) {
        const footer = res.data.footer;
        setFormData({
          heading: footer.heading || "",
          highlightWords: footer.highlightWords || ["", ""],
          contactEmail: footer.contactEmail || "",
          certificates: footer.certificates?.map((url) => ({ url })) || [],
          socialLinks: footer.socialLinks || {
            facebook: "",
            twitter: "",
            linkedin: "",
          },
          offices: footer.offices?.length
            ? footer.offices
            : [{ city: "", phone: "", address: "" }],
        });
      }
    } catch (err) {
      console.error("Failed to fetch footer data:", err);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  const handleOfficeChange = (index, field, value) => {
    const updated = [...formData.offices];
    updated[index][field] = value;
    setFormData({ ...formData, offices: updated });
  };

  const addOffice = () => {
    setFormData({
      ...formData,
      offices: [...formData.offices, { city: "", phone: "", address: "" }],
    });
  };

  const removeOffice = (index) => {
    const updated = [...formData.offices];
    updated.splice(index, 1);
    setFormData({ ...formData, offices: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.heading);
      data.append("highlightWords", JSON.stringify(formData.highlightWords));
      data.append("contactEmail", formData.contactEmail);
      data.append("socialLinks", JSON.stringify(formData.socialLinks));
      data.append("offices", JSON.stringify(formData.offices));

      const existingCerts = formData.certificates
        .filter((cert) => cert.url && !cert.file)
        .map((cert) => cert.url);

      data.append("existingCertificates", JSON.stringify(existingCerts));

      formData.certificates.forEach((certObj) => {
        if (certObj.file) {
          data.append("certificates", certObj.file);
        }
      });

      const res = await API.post("/footer", data);

      if (res.data.success) {
        setMessage("Footer updated successfully");
        setTimeout(() => setMessage(""), 3000);
        fetchFooter();
      }
    } catch (err) {
      console.error(err);
      setMessage("Error updating footer");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Footer Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Main Heading"
          value={formData.heading}
          onChange={(e) =>
            setFormData({ ...formData, heading: e.target.value })
          }
          className="w-full border p-2 rounded"
        />

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Highlight Word 1"
            value={formData.highlightWords[0]}
            onChange={(e) => {
              const updated = [...formData.highlightWords];
              updated[0] = e.target.value;
              setFormData({ ...formData, highlightWords: updated });
            }}
            className="flex-1 border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Highlight Word 2"
            value={formData.highlightWords[1]}
            onChange={(e) => {
              const updated = [...formData.highlightWords];
              updated[1] = e.target.value;
              setFormData({ ...formData, highlightWords: updated });
            }}
            className="flex-1 border p-2 rounded"
          />
        </div>

        <input
          type="email"
          placeholder="Contact Email"
          value={formData.contactEmail}
          onChange={(e) =>
            setFormData({ ...formData, contactEmail: e.target.value })
          }
          className="w-full border p-2 rounded"
        />

        <div>
          <label className="font-semibold block mb-1">Social Links</label>
          {["facebook", "twitter", "linkedin"].map((platform) => (
            <input
              key={platform}
              type="url"
              placeholder={`${platform} URL`}
              value={formData.socialLinks[platform]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socialLinks: {
                    ...formData.socialLinks,
                    [platform]: e.target.value,
                  },
                })
              }
              className="w-full border p-2 rounded mb-2"
            />
          ))}
        </div>

        <div>
          <label className="font-semibold block mb-1">
            Upload Certificates
          </label>

          {formData.certificates.map((cert, idx) => (
            <div key={idx} className="flex items-center gap-4 mb-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const updated = [...formData.certificates];
                  updated[idx] = { file: e.target.files[0] }; // Replace with new file
                  setFormData({ ...formData, certificates: updated });
                }}
                className="flex-1 border p-2 rounded"
              />

              {(cert.file || cert.url) && (
                <img
                  src={cert.file ? URL.createObjectURL(cert.file) : cert.url}
                  alt={`Cert ${idx + 1}`}
                  className="w-20 h-16 object-contain border rounded"
                />
              )}

              <button
                type="button"
                onClick={() => {
                  const updated = [...formData.certificates];
                  updated.splice(idx, 1);
                  setFormData({ ...formData, certificates: updated });
                }}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                certificates: [...formData.certificates, { file: null }],
              })
            }
            className="text-blue-600 mt-2"
          >
            + Add Certificate
          </button>
        </div>

        <div>
          <label className="font-semibold block mb-1">Global Offices</label>
          {formData.offices.map((office, idx) => (
            <div
              key={idx}
              className="space-y-2 mb-4 border p-3 rounded bg-gray-50"
            >
              <input
                type="text"
                placeholder="City"
                value={office.city}
                onChange={(e) =>
                  handleOfficeChange(idx, "city", e.target.value)
                }
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                value={office.phone}
                onChange={(e) =>
                  handleOfficeChange(idx, "phone", e.target.value)
                }
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Address"
                value={office.address}
                onChange={(e) =>
                  handleOfficeChange(idx, "address", e.target.value)
                }
                className="w-full border p-2 rounded"
              />
              <button
                type="button"
                onClick={() => removeOffice(idx)}
                className="text-red-600 text-sm mt-1"
              >
                Remove Office
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addOffice}
            className="text-blue-600 mt-2"
          >
            + Add Office
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Footer
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default Footer;
