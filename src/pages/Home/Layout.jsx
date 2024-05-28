import "./Layout.css";

import MainContent from "./MainContent";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import Tab from "react-bootstrap/Tab";

function TabsExample() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={20}>
          <ListGroup>
            <ListGroup.Item>
              <Image
                src="/portfolio/images/pin.png"
                roundedCircle
                className="logos"
              />
              Costa Mesa, CA
            </ListGroup.Item>

            <ListGroup.Item action href="mailto:angelfc@csu.fullerton.edu">
              <Image
                src="/portfolio/images/email.png"
                roundedCircle
                className="logos"
              />
              Email - School Related
            </ListGroup.Item>

            <ListGroup.Item action href="mailto:angelfuentesc01@gmail.com">
              <Image
                src="/portfolio/images/email.png"
                roundedCircle
                className="logos"
              />
              Email - Work
            </ListGroup.Item>

            <ListGroup.Item
              action
              href="https://github.com/AngelF9?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/portfolio/images/github.png"
                roundedCircle
                className="logos"
              />
              Github
            </ListGroup.Item>

            <ListGroup.Item
              action
              href="https://www.linkedin.com/in/angel-fuentes-6b3b15243"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/portfolio/images/linkedin.png"
                roundedCircle
                className="logos"
              />
              LinkedIn
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Tab.Container>
  );
}

function ShapeExample() {
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

function ProfileCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <ShapeExample />
      <Card.Body>
        <Card.Title>Angel Fuentes</Card.Title>
        <Card.Text>
          A cinema-enjoyer, book-loving, running-addict, fishing-noviest,
          software engineer and student at Cal State, Fullerton.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <TabsExample />
      </ListGroup>
    </Card>
  );
}

function Layout() {
  return (
    <div className="layout-container">
      <div className="profile-card">
        <ProfileCard />
      </div>
      <div className="main-content-layout">
        <MainContent />
      </div>
    </div>
  );
}

export default Layout;
