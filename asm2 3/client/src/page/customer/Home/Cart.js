import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal, Button, ListGroup, Row, Col, Form } from "react-bootstrap";

const Cart = ({
  cartItems,
  showCart,
  setShowCart,
  updateCartItem,
  removeFromCart,
  placeOrderF,
  added,
}) => {
  const [err, setErr] = useState("");

  const getTotalPrice = () => {
    return cartItems?.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Modal
      show={showCart}
      onHide={() => setShowCart(false)}
      dialogClassName="cart-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            color: "#292621",
            fontSize: "35px",
            fontWeight: "500",
            marginBottom: "12px",
          }}
          className="text-center"
        >
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </Modal.Title>
        <Modal.Title className="text-center text-danger">
          {err !== "" && err}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems?.map((item) => (
            <ListGroup.Item key={item._id}>
              <Row>
                <Col xs={5}>
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                </Col>
                <Col xs={4}>
                  <Form.Control
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItem(item._id, parseInt(e.target.value))
                    }
                  />
                </Col>
                <Col xs={2}>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item._id)}
                    className="p-3"
                    style={{ borderRadius: "25px" }}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-start">
        <p>Total Price: ${getTotalPrice()}</p>
      </Modal.Footer>
      <Modal.Footer>
        <Button
          variant="primary"
          className="p-3"
          style={{ borderRadius: "25px", width: "30rem" }}
          onClick={async () => {
            if (added) {
              const bool = await placeOrderF(cartItems);
              if (!bool) {
                setShowCart(false);
              }
            }
            setErr("");
          }}
        >
          Checkout
        </Button>
        <Button
          variant="secondary"
          className="p-3"
          style={{ borderRadius: "25px", width: "30rem" }}
          onClick={() => setShowCart(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
