import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function SkiingLocations() {
  return (
    <Container>
      <h2>Skiing Locations</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/skiing-location1.jpg" />
            <Card.Body>
              <Card.Title>Location 1</Card.Title>
              <Card.Text>Location description goes here.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          {/* Add more cards for additional locations */}
        </Col>
      </Row>
    </Container>
  );
}

export default SkiingLocations;
