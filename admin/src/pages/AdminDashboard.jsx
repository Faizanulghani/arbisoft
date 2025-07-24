import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoUploader from "../components/logoUploader";
import TitleUpdater from "../components/TitleUpdater";
import DescriptionUpdate from "../components/descriptionUpdate";
import HeroImageUpdate from "../components/HeroImageUpdate";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Admin Dashboard
        </h1>
        <LogoUploader />
        <TitleUpdater />
        <DescriptionUpdate />
        <HeroImageUpdate />
      </div>
    </>
  );
};

export default AdminDashboard;
