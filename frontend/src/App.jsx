import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import Feedback from "./components/Feedback";
import ImpactStats from "./components/ImpactStats";
import RecognitionSection from "./components/RecognitionSection";
import OurOfferings from "./components/OurOfferings";

const App = () => {
  const [logo, setLogo] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:3000/api/header/").then((res) => {
        setLogo(res.data.logoUrl);
      });

      await axios
        .get("http://localhost:3000/api/hero-section/title/")
        .then((res) => {
          setTitle(res.data.title);
        });

      await axios
        .get("http://localhost:3000/api/hero-section/description/")
        .then((res) => {
          setDescription(res.data.description);
        });

      await axios
        .get("http://localhost:3000/api/hero-section/hero-img/")
        .then((res) => {
          setHeroImage(res.data.image);
        });
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Header logo={logo} />
        <HeroSection
          title={title}
          description={description}
          heroImage={heroImage}
        />
      </div>
      <StatsSection />
      <div className="max-w-[1440px] mx-auto">
        <Feedback />
      </div>
      <ImpactStats />
      <RecognitionSection />
      <div className="max-w-[1440px] mx-auto">
          <OurOfferings />
      </div>
    </>
  );
};

export default App;
