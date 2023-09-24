import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  isLoggedIn,
  logout,
  getUsers,
  getRole,
} from "../../service/authService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faFileLines,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faHomeUser,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./CustomerHeader.css";

const Header = ({ handleSearchName, setShowCart }) => {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <Navbar key={"xxl"} expand={"xxl"} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex">
          <Nav.Link
            to="/"
            className="mx-5"
            onClick={() => {
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faHome} className="mx-1" />
            Home
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xxl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              style={{ marginLeft: "8rem" }}
              className="justify-content-end mt-3"
            >
              {getRole() === "customer" && (
                <>
                  <Link to="/cus/order">Order Management</Link>
                </>
              )}
              <div
                className="rounded-3 mx-3 cursor-pointer"
                onClick={() => setShowCart(true)}
              >
                <FontAwesomeIcon icon={faCartShopping} size="lg" /> Cart
              </div>
              {isLoggedIn() && (
                <NavDropdown
                  title="Account"
                  id="account-dropdown"
                  className="mx-1"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      logout();
                      navigate("/");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {!isLoggedIn() && (
                <Link
                  to="/auth"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <FontAwesomeIcon icon={faLock} className="mx-1" />
                  Login
                </Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
