import { useState } from "react";
import API from "../api";

const TestimonialTitle = () => {
  const [updatedMessage, setUpdatedMessage] = useState("");
  const [message, setMessage] = useState("");
  const [title,setTitle] = useState("")

  let handleTitleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/testimonialsTitle", {
        title,
      });
      if (response.data.success) {
        setUpdatedMessage(response.data.message);
      } else {
        setMessage("Update failed: " + response.data.message);
      }
    } catch (err) {
      console.log(err);
      setMessage("Something went wrong");
    }
    e.target[0].value = "";
  };
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-md w-full mt-8">
      <h2 className="text-xl font-semibold mb-4">Update Testimonial Title</h2>
      <form onSubmit={handleTitleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Enter new Title"
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

export default TestimonialTitle;
