import React, { useState } from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import "./Product.css";
import { useNavigate } from "react-router";
import Filter from "./Filter";
import Promotion from "./Promotion";
import Banner from "./Banner";
const ProductList = ({
  removeFilter,
  searchName,
  order,
  decision,
  products,
  addToCart,
  categories,
  handleFilter,
  handleCategory,
  handleSearchName,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 6; 

  const data = [...products];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = data.slice(startIndex, endIndex);

  return (
    <div className="bg-light">
      {/* <Container fluid className="mt-3 mb-3">
        <Promotion />
      </Container> */}
      <Container className="products-container ">
        <Row>
          <Col xl={3} md={4} sm={12}>
            <Filter
              searchName={searchName}
              removeFilter={removeFilter}
              order={order}
              handleSearchName={handleSearchName}
              decision={decision}
              categories={categories}
              handleFilter={handleFilter}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              handleCategory={handleCategory}
            />
          </Col>

          <Col xl={9} md={8} sm={12}>
            {productsToDisplay.length !== 0 ? (
              <Row className="g-4">
                {productsToDisplay.map((product) => (
                  <Col
                    xl={4}
                    md={6}
                    sm={12}
                    key={product._id}
                    style={{ marginTop: "3rem" }}
                  >
                    <Card className="h-100 product-list">
                      <Card.Img
                        variant="top"
                        src={product.img}
                        alt={product.name}
                        style={{
                          maxWidth: "100%",
                          height: "200px",
                          objectFit: "contain",
                          margin: "0px auto",
                        }}
                      />
                      <Card.Body
                        style={{ fontSize: "17px", lineHeight: "18px" }}
                      >
                        <Card.Title
                          className="text-start mt-2 mb-3"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxHeight: "100px",
                          }}
                        >
                          {product.name}
                        </Card.Title>
                        <Card.Text
                          className="mt-4 mb-2"
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: "500",
                            color: "#ee4d2d",
                          }}
                        >
                          Price: ${product.price}
                        </Card.Text>

                        {/* <Card.Text className="mb-3">{product.description}</Card.Text> */}
                        <Button
                          variant="primary"
                          onClick={() => {
                            navigate("/productDetails/" + product._id);
                          }}
                          className="w-100 my-2"
                          style={{
                            color: "#487ec5",
                            backgroundColor: "#e4f2ff",
                            borderColor: "#0c5db6",
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => addToCart(product)}
                          className="w-100 my-2"
                          style={{
                            color: "#ffbf00",
                            backgroundColor: "#fefaec",
                            borderColor: "#e59b11",
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                <div>Cant Find Your Product!</div>
              </Row>
            )}

            <Row className="mt-5">
              <Pagination className="d-flex justify-content-center">
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages).keys()].map((page) => (
                  <Pagination.Item
                    key={page + 1}
                    active={page + 1 === currentPage}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    {page + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </Row>
          </Col>
        </Row>
      </Container>

      <Banner />
    </div>
  );
};

export default ProductList;
