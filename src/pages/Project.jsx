import NavBar from "./Home/Navbar";
import "./Project/Project.css";
import Card from "./Project/ProjectItem";
// import "./About/About.css";

function Image() {
  return (
    <div className="wallpaper-container">
      <img src="images/wallpaper_19.jpg" alt="" className="wallpaper-photo" />
      <div className="overlay-text">
        <h1>
          <strong>Technologies and Projects</strong>
        </h1>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div>
      <NavBar />
      <Image />
      <br />
      <br />

      <h2 className="tech-tools">Technologies and Tools</h2>
      <p className="tech-stack">
        Using a combination of modern tech stacks and reliable open-source
        software, I like to build personal projects driven by interest and the
        excitement of seeing ideas come to fruition step by step. Here are some
        of the key technologies and tools I work with:
      </p>
      <div className="tech-grid">
        <div className="tech-item">
          <img src="images/cpp.png" alt="CPP" />
          <p>
            <strong>C++</strong>
          </p>
        </div>

        <div className="tech-item">
          <img src="images/JS.png" alt="JS" />
          <p>
            <strong>JavaScript</strong>
          </p>
        </div>

        <div className="tech-item">
          <img src="images/linux.png" alt="Linux" />
          <p>
            <strong>Linux</strong>
          </p>
        </div>

        <div className="tech-item">
          <img src="images/python.svg.png" alt="Python" />
          <p>
            <strong>Python</strong>
          </p>
        </div>

        <div className="tech-item">
          <img src="images/react.svg.png" alt="React" />
          <p>
            <strong>ReactJS</strong>
          </p>
        </div>

        <div className="tech-item">
          <img src="images/flask.png" alt="Flask" />
          <p>
            <strong>Flask</strong>
          </p>
        </div>
      </div>

      <br />
      <br />

      <h2 className="project">Projects</h2>
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
          <Card
            imageSrc="/images/interpreter.png"
            title="Interpreter"
            text="directly exectures instructions written in a JS without previously converting them to an object code or machine code."
            link=""
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
