import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: "blue" }}>Navbar Page</h1>
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

export default About;
