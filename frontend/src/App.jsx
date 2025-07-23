import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  const [logo, setLogo] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/api/header/").then((res) => {
      setLogo(res.data.logoUrl);
    });
  }, []);
  return (
    <>
      <Header logo={logo} />
      <HeroSection />
    </>
  );
};

export default App;
