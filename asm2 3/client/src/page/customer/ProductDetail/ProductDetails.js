import React, { useEffect, useState } from "react";
import { Col, Row, Button, Image, Container } from "react-bootstrap";
import { findById } from "../../../api/product";
import { getSellerById } from "../../../api/customer";
import "./Productdetail.css";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

function ProductDetail({ addToCart }) {
  const [product, setProduct] = useState({});
  const [businessName, setBusinessName] = useState("");
  const { id } = useParams();

  const getProduct = async (id) => {
    let productt = await findById(id);
    console.log(productt);
    getBusinessName(productt.seller);
    setProduct(productt);
  };

  const getBusinessName = async (id) => {
    let seller = await getSellerById(id);
    console.log(seller);
    setBusinessName(seller);
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div>
      <Container
        style={{
          backgroundColor: "#F3EAD8",
          color: "#292621",
        }}
        fluid
      >
        <Row className="g-4">
          <Col
            xl={5}
            md={5}
            sm={10}
            key={product._id}
            className="my-5"
            style={{
              marginLeft: "40px",
            }}
          >
            <Image
              src={product?.img}
              style={{
                width: "100%",
                minHeight: "25rem",
                objectFit: "contain",
              }}
            ></Image>
          </Col>
          <Col xl={5} md={5} sm={12} key={product._id} className="my-5 mx-4">
            <h3
              style={{
                color: "#292621",
                fontSize: "40px",
                lineHeight: "1.2",
                marginBottom: "9px",
                marginTop: "5rem",
                fontWeight: "400",
              }}
            >
              {product.name}
            </h3>

            <h5
              className="mt-2 mb-1"
              style={{
                fontSize: "14px",
                lineHeight: "1.5",
                color: "#292621",
                marginBottom: "30px",
              }}
            >
              By: <span className=" mx-2">{businessName?.businessName}</span>
            </h5>

            <div className="ratings mt-3 mb-1 d-flex">
              <FontAwesomeIcon
                icon={faStar}
                size={"md"}
                style={{ color: "#292621" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                size={"md"}
                style={{ color: "#292621" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                size={"md"}
                style={{ color: "#292621" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                size={"md"}
                style={{ color: "#292621" }}
              />
              <FontAwesomeIcon
                icon={faStarHalfStroke}
                size={"md"}
                style={{ color: "#292621" }}
              />
              <span>300 Ratings</span>
            </div>

            <div
              className="d-flex flex-column"
              style={{
                fontWeight: "500",
                color: "#292621",
                fontSize: "32px",
                marginBottom: "9px",
              }}
            >
              <h3 className=" mb-5 mt-3">${product.price}</h3>
            </div>

            <div className="d-flex justify-content-between">
              <Button
                variant="primary"
                className="text-center"
                style={{
                  height: "4em",
                  width: "20em",

                  backgroundColor: "#fff",
                  padding: "25px 36px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  color: "#222222",
                  borderRadius: "25px",
                  cursor: "pointer",
                  display: "inline-block",
                  lineHeight: "0",
                  cursor: "pointer",
                  transition: "color 0.4s linear",
                  position: "relative",
                  zIndex: "1",
                  border: "0",
                  overflow: "hidden",
                }}
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="w-100">
          <div
            className="d-flex mt-4 mb-3 p-2"
            style={{
              borderBottom: "4px solid #E6C105",
              color: "#E6C105",
              width: "20%",
            }}
          >
            <h3>Product's Description:</h3>
          </div>

          <div className="mx-3 mt-4 w-100 text-wrap">
            <h5>Description:</h5>
            <p>{product.description}</p>
            <p>
              {product.attributes &&
                product.attributes.map((item) => {
                  if (item.value) {
                    return (
                      <h5 key={item.name}>
                        {item.name} : {item.value}
                      </h5>
                    );
                  }
                  return null; // or any other fallback if needed
                })}
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
