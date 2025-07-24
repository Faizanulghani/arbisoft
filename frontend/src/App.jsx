import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";

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
      <Header logo={logo} />
      <HeroSection
        title={title}
        description={description}
        heroImage={heroImage}
      />
      <StatsSection />
    </>
  );
};

export default App;
