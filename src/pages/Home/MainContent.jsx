import "./MainContent.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";
import Stack from "react-bootstrap/Stack";

// this is something new to mee i did not know i could make div into an object
function HorizontalBar({ width, height }) {
  return <div className="horizontal-bar" style={{ width, height }}></div>;
}

function ToggleList({ items }) {
  return (
    <Stack gap={3}>
      {/* map() as iterative method */}
      {/* returns a new array  */}
      {Object.entries(items).map(([key, value], index) => (
        <div key={index} className="p-2">
          <div className="item-container">
            <div className="items">{key}</div>
            <div className="item-right">{value}</div>
          </div>

          <HorizontalBar width="100%" height="10px" />
        </div>
      ))}
    </Stack>
  );
}

function ButtonPage({ page, title }) {
  return (
    <>
      <Button variant="dark" as={Link} to={page}>
        {title}
      </Button>
    </>
  );
}

function ProfilePic() {
  return (
    <Container>
      <Row>
        <Col xs={4} md={2}>
          <Image
            src="/portfolio/images/headshot.png"
            roundedCircle
            className="profile-image"
          />
        </Col>
      </Row>
    </Container>
  );
}

const items = {
  HTML: "<1 year",
  CSS: "<1 year",
  JavaScript: "<1 year",
  Python: "<1 year",
};

const items_used = {
  "x86 Assembly": "<1 year",
  "C++": "1+ year",
};

function Lister({ title, list_items }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <strong>
        <Dropdown.Toggle as={NavLink} onClick={() => setShow(!show)}>
          {title}
        </Dropdown.Toggle>
      </strong>
      {show ? <ToggleList items={list_items} /> : null}
    </>
  );
}

function MainContent() {
  // const [show, setShow] = useState(true);
  return (
    <div className="main-content">
      <br />
      <br />
      <div className="center-box">
        <div className="container">
          <div className="image">
            <ProfilePic />
          </div>
          <div className="text">
            <br />
            <br />
            <h4>Angel Fuentes</h4>
            <h5>Computer Science Major and Mathematics Minor</h5>
            <div className="social-chain">
              <a
                href="mailto:angelfuentesc01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/portfolio/images/email.png"
                  roundedCircle
                  className="logos"
                />
              </a>
              <a
                href="https://github.com/AngelF9?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/portfolio/images/github.png"
                  roundedCircle
                  className="logos"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/angel-fuentes-6b3b15243"
                target="_blank"
              >
                <Image
                  src="/portfolio/images/linkedin.png"
                  roundedCircle
                  className="logos"
                />
              </a>
            </div>
          </div>
        </div>
        <br />
        <p>
          Hello I'm Angel, a computer science student at CUSF, where I got
          experience using C++, Python, JavaScript, HTML, CSS, React, and Flask.
          In the following semseter of Fall 2024 I'm looking forward to learn
          more about backend langauges ranging from Node.js, Express.js, and
          MongoDB. I will also be looking into PHP and SQL but I have a feeling
          I'll be placing alot of my focus on the former list. Moreover, I enjoy
          learning new things but more than anything I love to understand how
          they work, as this tends to be of more use to me in the long run. To
          learn more about me, please check out the page linked below
        </p>
        <ButtonPage page="/about" title="About Me Page" />
        <br />
        <br />
        <br />

        <h5>
          <strong>Skills</strong>
        </h5>

        <Lister title="Language I'm actively using" list_items={items} />
        <br />
        <Lister title="Language I've used previously" list_items={items_used} />
        <br />
        <p>
          To get a full fledge understanding of my skills and knowledge check
          out my project page linked below
        </p>

        <ButtonPage page="/project" title="Project Page" />

        {/* <Dropdown.Toggle as={NavLink} onClick={() => setShow(!show)}> */}
        {/*   Languages I'm actively using */}
        {/* </Dropdown.Toggle> */}
        {/**/}
        {/* {show ? <ToggleList items={items} /> : null} */}
      </div>
      <br />
      <br />
    </div>
  );
}

export default MainContent;
