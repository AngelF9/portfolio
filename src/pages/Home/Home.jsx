import React from "react";
import NavBar from "./Navbar";
import MainContent from "./MainContent";
import "./Home.css";

function Image() {
  return (
    <div className="wallpaper-container">
      <img
        src="/portfolio/images/wallpaper_15.jpg"
        alt=""
        className="wallpaper-photo"
      />
      <div className="overlay-text">
        <h1>
          <strong>Angel's Software Engineer Portfolio</strong>
        </h1>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <NavBar />
      <Image />
      <MainContent />
      {/* <Layout /> */}
    </div>
  );
}

export default HomePage;
