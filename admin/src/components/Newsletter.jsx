import { useEffect, useState } from "react";
import API from "../api";

const Newsletter = () => {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState("");
  const fetchEmails = async () => {
    try {
      const res = await API.get("/newsletter");
      if (res.data.success) {
        setEmails(res.data.newsLetter);
      } else {
        setError("Failed to fetch emails");
      }
    } catch (err) {
      setError("Something went wrong while fetching data.");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Newsletter Subscriptions</h2>
      {error && <p className="text-red-500">{error}</p>}
      {emails.length === 0 ? (
        <p>No newsletter emails found.</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => (
              <tr key={item._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Newsletter;
