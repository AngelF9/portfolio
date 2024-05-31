import React, { useState } from "react";
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

function PageBar({ currentPage, totalPages, onPageChange }) {
  const items = [];
  // loop thought num from 1 - totalPages
  for (let number = 1; number <= totalPages; number++) {
    // for each num, we create Pagination.Item component: 1..2..3..4 pages
    items.push(
      <Pagination.Item
        // key prop is special attribute in react to help identify which items have changed, been added, or removed
        // key prop is set to current number, ensure each item is unique
        key={number}
        // active prop used by Bootstrap's Pagination.Item component to visually indicate the currently active page
        // set active prop to true if num matches the currentPage
        active={number == currentPage}
        // onClick prop used in react to handle click events on elements
        // handle page change on click
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination className="page-bar">
      {/* Previous button, disabled if on the first page */}
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {items}
      {/* Next button, disabled if on the last page */}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
}

function MainContent() {
  // state to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);
  // number of posts of to display per page
  const postsPerPage = 2;

  // sample blog posts data
  // Sample blog posts data
  const blogPosts = [
    {
      title: "NeoVim and I",
      imageSrc: "/portfolio/images/wallpaper_20.jpg",
      text: "The first steps in using neovim are always the hardest, however, once those first steps are taken one hardly ever returns back.",
    },
    {
      title: "Summer 2024 Goals",
      imageSrc: "/portfolio/images/goals.jpg",
      text: "I aim to build an online Forum. Friends and I discussed building an online shop so This is something I would like to build in late summer. I also aim to be working on a JS Intepreter throughout all of summer as a way to learn more about JS.",
    },
    {
      title: "One Piece talk",
      imageSrc: "/portfolio/images/onepiece.jpg",
      text: "One Piece is a long-running anime and manga series that has captured the hearts of fans all over the world. Its intricate storyline and deep characters make it a must-watch.",
    },
    {
      title: "Running at Back Bay",

      imageSrc: "/portfolio/images/backbay.jpg",
      text: "Running at Back Bay is a refreshing experience. The scenery is beautiful and it provides a great way to stay fit and enjoy nature.",
    },
  ];

  // calculate total number of pages needed
  // Math.ceil, methods that rounds up
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // function to handle page changes, when a different page number is clicked
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // calculate the posts to display on the current page
  // .slice(start, end)
  // not including end
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <div className="main-content">
      <br />
      <h3 className="blog-title"> Blog Post</h3>
      <br />
      <PageBar
        className="page-bar"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <br />
      <div className="blog-grid">
        {currentPosts.map((post, index) => (
          <div className="blog-item" key={index}>
            <GridPosts
              imageSrc={post.imageSrc}
              title={post.title}
              text={post.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
