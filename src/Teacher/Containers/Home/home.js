import React, { useState } from "react";
import Header from "../../Components/Header/header";
import "../../Assets/Styles/home.css";

const Home = () => {
  const [name, setName] = useState({});
  return (
    <>
      <Header />
      <center>
        <div style={{ marginTop: "200px" }}>Welcome </div>
      </center>
    </>
  );
};

export default Home;
