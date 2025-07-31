import { useEffect, useState } from "react";
import API from "../api";

const InquiryForm = () => {
  const [inquiries, setInquiries] = useState([]);
  const fetchInquiries = async () => {
    try {
      const res = await API.get("/inquiryform");
        console.log(res);
        
      if (res.data.success) {
        setInquiries(res.data.inquiries);
      }
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#223554]">
        Inquiry Submissions
      </h2>

      {inquiries.length === 0 ? (
        <p className="text-gray-600">No inquiries found.</p>
      ) : (
        <div className="space-y-6">
          {inquiries.map((item) => (
              <div
              key={item._id}
              className="p-4 bg-white rounded-lg border shadow-sm"
              >
                {console.log(item)}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <strong>Name:</strong> {item.name}
                </div>
                <div>
                  <strong>Email:</strong> {item.email}
                </div>
                <div>
                  <strong>Service:</strong> {item.service}
                </div>
                <div>
                  <strong>Phone:</strong> {item.phoneCode} {item.phoneNumber}
                </div>
                <div className="md:col-span-2">
                  <strong>Message:</strong> {item.message}
                </div>
                <div>
                  <strong>Budget:</strong> {item.budget}
                </div>
                <div>
                  <strong>NDA Requested:</strong> {item.nda ? "Yes" : "No"}
                </div>
                <div className="text-gray-500 text-sm md:col-span-2">
                  Submitted on: {new Date(item.createdAt).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
