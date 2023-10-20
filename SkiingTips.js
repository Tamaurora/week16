import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function SkiingTips() {
  return (
    <Container>
      <h2>Skiing Tips</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/skiing-tip1.jpg" />
            <Card.Body>
              <Card.Title>Tip 1</Card.Title>
              <Card.Text>Tip description goes here.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          {/* Add more cards for additional tips */}
        </Col>
      </Row>
    </Container>
  );
}

export default SkiingTips;
