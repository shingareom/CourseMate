// src/component/Explore/Explore.jsx
import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Image, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Explore() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // redirect to login if no user
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-4">
        <Navbar.Brand>Explore</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
          {user && (
            <>
              <span className="me-3">{user.name}</span>
              {user.profileImage && (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    as={Image}
                    src={`http://localhost:5000/uploads/${user.profileImage}`}
                    roundedCircle
                    style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  />
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/courses")}>
                      Back to Courses
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/")}>
                      Back to Home
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </>
          )}
        </Nav>
      </Navbar>

      <Container className="mt-5 text-center">
        <h1>Welcome, {user ? user.name : "Guest"}!</h1>
        <p>This is the Explore page.</p>
      </Container>
    </>
  );
}

export default Explore;
