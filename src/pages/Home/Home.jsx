import React from "react";
import NavBar from "./Navbar";
import Layout from "./Layout";

function Image() {
  return (
    <div className="wallpaper-container">
      <img src="images/wallpaper_15.jpg" alt="" className="wallpaper-photo" />
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <NavBar />
      <Image />
      <Layout />
    </div>
  );
}

export default HomePage;
