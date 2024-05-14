import "./App.css";
// src/index.js or src/index.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar.jsx";
import Layout from "./Layout.jsx";

function Image() {
  return (
    <div className="wallpaper-container">
      <img src="images/wallpaper_15.jpg" alt="" className="wallpaper-photo" />
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Image />
      <Layout />
    </>
  );
}
export default App;
