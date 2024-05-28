import React from "react";
import NavBar from "./Home/Navbar";
import "./About/About.css";

function Image() {
  return (
    <div className="wallpaper-container-about">
      <img
        src="images/wallpaper_16.jpg"
        alt=""
        className="wallpaper-photo-about"
      />
      <div className="overlay-text">
        <h1>
          <strong>So Who Am I?</strong>
        </h1>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <NavBar />
      <Image />
      <br />
      <br />
      <div className="about-me">
        <h5>A Bit About Me</h5>
        <p>
          Hello! My name is Angel Fuentes, and I am currently a student at
          California State University, Fullerton (CSUF), majoring in Computer
          Science with a minor in Mathematics. I am from the vibrant city of
          Costa Mesa, California, at the heart of Orange County.
        </p>
        <p>
          My journey to CSUF wasn't initially planned. Encouraged by my parents,
          who are immigrants to the United States, I enrolled in college. I
          started my academic career majoring in Business. However, seeking a
          greater challenge and driven by my passion for problem-solving, I
          switched to Computer Science after my first year. This decision has
          been pivotal in shaping my academic and professional aspirations.
        </p>
        <br />
        <h5>Hobbies and Interests</h5>
        <p>
          Outside of academics, I have a diverse range of interests. I love
          reading, running, and cooking. Recently, I've developed an interest in
          dispersed camping and am excited to explore the great outdoors. These
          activities provide me with a balance between mental and physical
          stimulation, keeping me grounded and energized.
        </p>
        <br />
        <h5>Personal Goals</h5>
        <h6>Short-term Goals:</h6>
        <ul>
          <li>
            Land an internship to gain hands-on experience in the tech industry.
          </li>
          <li>
            Train for and complete a marathon, combining my love for running
            with a challenging personal milestone.
          </li>
        </ul>
        <h6>Long-term Goals:</h6>
        <ul>
          <li>
            Pursue a Master’s degree in Computer Science. While I am still
            exploring specific areas of focus, I am excited on delving deeper
            into advanced topics in the field.
          </li>
          <li>
            Complete an Ironman triathlon, pushing my physical and mental limits
            to achieve this ambitious goal.
          </li>
        </ul>
        <br />
        <h5>Inspirations and Motivations</h5>
        <p>
          I draw inspiration from several remarkable individuals. My mother,
          father, and aunt, who have overcome immense challenges as immigrants,
          are my greatest motivators. Additionally, the words and life of Greg
          Plitt, a fitness influencer, continue to inspire me even after his
          passing.
        </p>
        <p>
          Literature also plays a significant role in my life. I am profoundly
          influenced by authors like Fyodor Dostoevsky, whose work "Crime and
          Punishment" explores the human struggle to connect with a higher
          power. Herman Hesse’s "Steppenwolf" has taught me the importance of
          not taking oneself too seriously, allowing room to enjoy life.
          Friedrich Nietzsche's "Thus Spoke Zarathustra" is another favorite,
          while i dont agree with all his points I do find his writing poetic
          and stimulating.
        </p>
        <br />
        <h5>Extracurricular Activities</h5>
        <p>
          Although I am not currently a member of any club, I am looking forward
          to joining the Computer Science Club at CSUF in the upcoming semester.
          I believe this will provide me with additional opportunities to
          network, collaborate, and grow alongside my peers.
        </p>
        <br />
        <h5>Skills and Strenghts</h5>
        <p>
          I love to learn, constantly writing down questions and seeking their
          answers to deepen my understanding. I thrive in team environments,
          valuing communication and collaboration. My drive to complete tasks
          and not let down my peers is a testament to my commitment and
          reliability.
        </p>
        <br />
        <h5>Future Plan</h5>
        <p>
          Looking ahead, my immediate plan is to secure an internship that
          aligns with my academic and career goals. In the longer term, I aim to
          pursue a Master’s degree in Computer Science, exploring advanced
          topics that will equip me for a successful career in the tech
          industry. Additionally, I aspire to complete an Ironman triathlon,
          reflecting my dedication to both personal and professional growth.
        </p>
        <p>
          Thank you for taking the time to learn more about me. I am excited
          about the future and eager to embrace the challenges and opportunities
          that lie ahead.
        </p>
      </div>
      <br />
      <br />
    </div>
  );
}

export default About;
