import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import Feedback from "./components/Feedback";
import ImpactStats from "./components/ImpactStats";
import RecognitionSection from "./components/RecognitionSection";
import OurOfferings from "./components/OurOfferings";
import EngagementModels from "./components/EngagementModels";
import ContactForm from "./components/ContactForm";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  const [logo, setLogo] = useState("");
  const [title, setTitle] = useState("");
  const [highlightWord, setHighlightWord] = useState("");
  const [feedbackHighlightWord, setFeedbackHighlightWord] = useState("");
  const [description, setDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [testimonialsTitle, setTestimonialsTitle] = useState("");
  const [text, setText] = useState("");
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:3000/api/header/").then((res) => {
        setLogo(res.data.logoUrl);
      });

      await axios
        .get("http://localhost:3000/api/hero-section/title/")
        .then((res) => {
          setTitle(res.data.title);
          setHighlightWord(res.data.highlightWord);
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

      await axios
        .get("http://localhost:3000/api/testimonialsTitle/")
        .then((res) => {
          setTestimonialsTitle(res.data.title);
          setFeedbackHighlightWord(res.data.highlightword);
        });

      const textRes = await axios.get("http://localhost:3000/api/impact/content");
      setText(textRes.data.data);

      const logosRes = await axios.get("http://localhost:3000/api/impact/images");
      setLogos(logosRes.data.data);
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
          highlightWord={highlightWord}
        />
      </div>
      <StatsSection />
      <div className="max-w-[1440px] mx-auto">
        <Feedback
          testimonialsTitle={testimonialsTitle}
          highlightWord={feedbackHighlightWord}
        />
      </div>
      <ImpactStats text={text} logos={logos} />
      <RecognitionSection />
      <div className="max-w-[1440px] mx-auto">
        <OurOfferings />
        <EngagementModels />
      </div>
      <ContactForm />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
