import "./MainContent.css";
import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// pass text into gridPost
// can mention neovim and some cool keybindings or plugins
function GridPosts({ imageSrc, title, text }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
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
      {/* <PageBar className="page-bar" /> */}
      <br />
      <div className="blog-grid">
        <div className="blog-item">
          <GridPosts
            imageSrc="/portfolio/images/wallpaper_20.jpg"
            title="NeoVim and I"
            text="The first steps in using neovim are always the hardest, however, once those first steps are taken one hardly ever returns back."
          />
        </div>
        <div className="blog-item">
          <GridPosts
            imageSrc="/portfolio/images/wallpaper_21.jpg"
            title="Summer 2024 Goals"
            text="I aim to build an online Forum. Friends and I discussed building an online shop so This is something i would like to build in late summer. I also aim to be working on a JS Intepreter thoughout all of summer as a way to learn more about JS."
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
