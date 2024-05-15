import "./MainContent.css";
import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridPosts() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function PageBar() {
  return (
    <Pagination className="page-bar">
      {/* <Pagination.First /> */}
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}
      {/**/}
      {/* <Pagination.Item>{10}</Pagination.Item> */}
      {/* <Pagination.Item>{11}</Pagination.Item> */}
      {/* <Pagination.Item active>{12}</Pagination.Item> */}
      {/* <Pagination.Item>{13}</Pagination.Item> */}
      {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
      {/**/}
      {/* <Pagination.Ellipsis /> */}
      {/* <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next />
      {/* <Pagination.Last /> */}
    </Pagination>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <br />
      <h3 className="blog-title"> Blog Post</h3>
      <br />
      <PageBar className="page-bar" />
      <br />
      <GridPosts />
    </div>
  );
}

export default MainContent;
