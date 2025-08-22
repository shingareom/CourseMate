// src/components/Header/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ profilePic }) {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" className="px-4 shadow-sm">
      {/* Left side: Brand */}
      <Navbar.Brand
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        CourseMate
      </Navbar.Brand>

      {/* Right side: Links and Profile */}
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link onClick={() => navigate("/Courses")}>Courses</Nav.Link>
          <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>
          <Nav.Link onClick={() => navigate("/sample-test")}>Sample Test</Nav.Link>

          {/* Profile Dropdown */}
          <NavDropdown
            title={
              <Image
                src={profilePic || "https://via.placeholder.com/40"} // default if none
                roundedCircle
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            }
            align="end"
          >
            <NavDropdown.Item onClick={() => navigate("/explore")}>
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => alert("Logged out!")}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
