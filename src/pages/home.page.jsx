import React from "react";
// import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Image2024 from "../assets/2024/LandingBackground.png";

const HomePage = () => {
  return (
    <div
      className="home-page"
      style={{ width: "100vw", height: "100vh", position: "relative" }} // Ensure the parent is positioned relatively for better control
      alt="TOSIA"
    >
      <img
        src={Image2024}
        alt="TOSIA"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }} // Make the image fill the div completely
      />
      <button
        style={{
          padding: "0.5rem 4rem",
          borderRadius: "8px",
          border: "none",
          fontSize: "1.5rem",
          fontFamily: "bold",
          position: "fixed",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          color: "rgb(0, 102, 204)",
        }}
      >
        <Link
          to="/login"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          {" "}
          ENTER{" "}
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
