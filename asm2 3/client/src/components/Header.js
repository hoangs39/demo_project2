import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { isLoggedIn, logout, getRole } from "../service/authService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLock } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();

  return (
    // <Navbar bg="light" expand="sm" className="p-0 m-0 mt-1">
    //   <Navbar.Collapse
    //     id="basic-navbar-nav"
    //     className="d-flex flex-row justify-content-end"
    //   >
    //     <Nav className="mx-5">
    //       <Nav.Link
    //         to="/"
    //         className="mx-5"
    //         onClick={() => {
    //           navigate("/");
    //         }}
    //       >
    //         <FontAwesomeIcon icon={faHome} className="mx-1" />
    //         Home
    //       </Nav.Link>
    //     </Nav>
    //     <Nav style={{ marginRight: "10rem" }}>
    //       {isLoggedIn() && getRole() === "admin" && (
    //         <>
    //           <Nav.Link>
    //             <Link to="/">Category Management</Link>
    //           </Nav.Link>
    //           <Nav.Link>
    //             <Link to="/admin/sellerapproval">Seller Approval</Link>
    //           </Nav.Link>
    //         </>
    //       )}
    //       {isLoggedIn() && getRole() === "seller" && (
    //         <>
    //           <Nav.Link>
    //             <Link to="/">Product Management</Link>
    //           </Nav.Link>
    //           <Nav.Link>
    //             <Link to="/seller/order">Order Management</Link>
    //           </Nav.Link>
    //           <Nav.Link>
    //             <Link to="/seller/salestatistic">Statistic</Link>
    //           </Nav.Link>
    //         </>
    //       )}

    //       {isLoggedIn() && (
    //         <NavDropdown title="Account" id="account-dropdown" className="mx-1">
    //           <NavDropdown.Item
    //             onClick={() => {
    //               logout();
    //               navigate("/");
    //               window.location.reload();
    //             }}
    //           >
    //             Logout
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       )}
    //       {!isLoggedIn() && (
    //         <Nav.Link className="mx-1">
    //           <Link
    //             to="/auth"
    //             style={{ textDecoration: "none", color: "#000" }}
    //           >
    //             <FontAwesomeIcon icon={faLock} className="mx-1" />
    //             Login
    //           </Link>
    //         </Nav.Link>
    //       )}
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar
      bg="light"
      key={"xxl"}
      expand={"xxl"}
      className="bg-body-tertiary mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex">
          <Nav className="mx-5">
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
          </Nav>
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
            <Nav style={{ marginRight: "10rem" }}>
              {isLoggedIn() && getRole() === "admin" && (
                <>
                  <Nav.Link>
                    <Link to="/">Category Management</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/admin/sellerapproval">Seller Approval</Link>
                  </Nav.Link>
                </>
              )}
              {isLoggedIn() && getRole() === "seller" && (
                <>
                  <Nav.Link>
                    <Link to="/">Product Management</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/seller/order">Order Management</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/seller/salestatistic">Statistic</Link>
                  </Nav.Link>
                </>
              )}

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
                <Nav.Link className="mx-1">
                  <Link
                    to="/auth"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faLock} className="mx-1" />
                    Login
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
