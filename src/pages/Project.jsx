import NavBar from "./Home/Navbar";
import "./Project/Project.css";
import Card from "./Project/ProjectItem";

function Project() {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <h1 className="project">Projects</h1>
      <p className="welcome-prompt">
        Hello, Welcome to my Projects page. Here you can find a link to my
        personal and group projects.
      </p>
      <br />

      <div className="project-grid">
        <div className="project-item">
          <Card
            imageSrc="/images/socket.png"
            title="Web Socket Program"
            text="Construct a web socket program for both client and server side"
            link="https://github.com/samv-33/cpsc-471-socket-program"
          />
        </div>
        <div className="project-item">
          <Card
            imageSrc="/images/blog.jpg"
            title="Blog Web App"
            text="Blog web app allows users to view blogs, create account, and make blog post"
            link="https://github.com/AngelF9/blogger"
          />
        </div>
        <div className="project-item">
          <Card
            imageSrc="/images/tuffynav.jpg"
            title="Tuffy Navigation GUI"
            text="construct a navigation system pertaining to CSUF campus"
            link="https://github.com/Ahmir-Bijanzadeh/TuffyNav"
          />
        </div>

        <div className="project-item">
          <Card />
        </div>
        <div className="project-item">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Project;
