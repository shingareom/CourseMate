import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Learn MERN stack with hands-on projects.",
      modules: ["HTML & CSS", "JavaScript", "React", "Node.js & Express", "MongoDB"]
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      description: "Master problem-solving and algorithms.",
      modules: ["Arrays & Strings", "Recursion", "Dynamic Programming", "Graphs", "Trees"]
    }
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(selectedCourse?.id === course.id ? null : course);
  };

  return (
    <Container className="mt-4">
      <Row className="g-4">
        {courses.map((course) => (
          <Col md={6} key={course.id}>
            <Card
              onClick={() => handleCourseClick(course)}
              className="shadow-sm p-3"
              style={{ cursor: "pointer", minHeight: "200px" }}
            >
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                {selectedCourse?.id === course.id && (
                  <ListGroup className="mt-3" variant="flush">
                    {course.modules.map((module, index) => (
                      <ListGroup.Item key={index}>{module}</ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
