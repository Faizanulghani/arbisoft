import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";

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
    </>
  );
};

export default App;
