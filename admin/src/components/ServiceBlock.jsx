import { useEffect, useState } from "react";
import API from "../api";

const ServiceBlock = () => {
  const [blocks, setBlocks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: null,
    order: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchBlocks = async () => {
    const res = await API.get("/serviceblock");
    if (res.data.success) setBlocks(res.data.blocks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData();
    data.append("title", formData.title);
    data.append("subtitle", formData.subtitle);
    data.append("order", formData.order);
    if (formData.image) data.append("image", formData.image);
    if (editingId) data.append("id", editingId);

    const res = await API.post("/serviceblock", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (res.data.success) {
      fetchBlocks();
      setFormData({ title: "", subtitle: "", image: null, order: "" });
      setEditingId(null);
    }
    setSubmitting(false);
  };

  const handleEdit = (block) => {
    setFormData({
      title: block.title,
      subtitle: block.subtitle,
      image: null,
      order: block.order,
    });
    setEditingId(block._id);
  };

  const handleDelete = async (id) => {
    await API.delete(`/serviceblock/${id}`);
    fetchBlocks();
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Service Blocks</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Subtitle"
          value={formData.subtitle}
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Order"
          value={formData.order}
          onChange={(e) => setFormData({ ...formData, order: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button
          disabled={submitting}
          className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
            submitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {submitting
            ? "Submitting..."
            : editingId
            ? "Update Block"
            : "Add Block"}
        </button>
      </form>

      <div className="space-y-4">
        {blocks.map((block) => (
          <div key={block._id} className="p-4 border rounded shadow bg-white">
            <h3 className="font-semibold text-xl">{block.title}</h3>
            <p className="text-gray-700">{block.subtitle}</p>
            <img
              src={block.imageUrl}
              alt={block.title}
              className="w-full max-h-[200px] mt-2 object-cover"
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(block)}
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(block._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBlock;
