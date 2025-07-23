import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [logo, setLogo] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/api/header/").then((res) => {
      setLogo(res.data.logoUrl);
    });
  }, []);
  return (
    <header style={styles.header}>
      <div>{logo && <img src={logo} alt="Logo" style={styles.logo} />}</div>
      <nav style={styles.nav}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    borderBottom: "1px solid #ccc",
  },
  logo: {
    height: "50px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
};

export default App;
