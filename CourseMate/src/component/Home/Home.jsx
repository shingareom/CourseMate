// src/component/Home/Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

import heroImage from "../../Media/hero-image.png";
import aboutImage from "../../Media/about-image.png";
import servicesImage from "../../Media/services-image.png";
import contactImage from "../../Media/contact-image.png";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      {/* Header */}
      <Navbar bg="light" expand="lg" className="px-4 shadow-sm">
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          CourseMate
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => navigate("/courses")}>Courses</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>
            <Nav.Link onClick={() => navigate("/sample-test")}>Sample Test</Nav.Link>

            {user && (
              <NavDropdown
                title={
                  user.profileImage ? (
                    <Image
                      src={`http://localhost:5000/uploads/${user.profileImage}`}
                      roundedCircle
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  ) : (
                    <Image
                      src="https://via.placeholder.com/40"
                      roundedCircle
                      style={{ width: "40px", height: "40px" }}
                    />
                  )
                }
                align="end"
              >
                <NavDropdown.Item onClick={() => navigate("/explore")}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <section className="text-center bg-light py-5">
        <div className="container">
          <img
            src={heroImage}
            alt="Hero"
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "400px" }}
          />
          <h1 className="display-4">Welcome to Our Website</h1>
          <p className="lead">
            We provide amazing services to help your business grow.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
            <button
              className="btn btn-outline-secondary btn-lg"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <img
            src={aboutImage}
            alt="About"
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "300px" }}
          />
          <h2>About Us</h2>
          <p>Learn more about our mission and vision.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <img
            src={servicesImage}
            alt="Services"
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "300px" }}
          />
          <h2>Our Services</h2>
          <p>Check out the amazing services we offer.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <img
            src={contactImage}
            alt="Contact"
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "300px" }}
          />
          <h2>Contact Us</h2>
          <p>Reach out for more information.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
