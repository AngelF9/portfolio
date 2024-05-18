import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// a problem i ran into was trying to figure out how to pass and image.
// i could have created a unique card for each prject in this file but that seemed a bit overkill.
// i also had the formating set in Project.css so i did not want to reimplement that.
//
// solution: we can pass not only image source as a prop to the 'Card' component
// but aslo title, text, and link.
// this make our job a whole lot easier now!
function BasicExample({ imageSrc, title, text, link }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={link}>
          View Git Repo
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
