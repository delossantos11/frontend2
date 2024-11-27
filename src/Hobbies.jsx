import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; 
import './Hobbies.css'

function Hobbies() {
  return (
    <div>
      <h1 className='hobbies-h1'>My Hobbies</h1>

      <Row className="mt-4">
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Music</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">I love singing but I have a bad voice</Card.Subtitle>
              <Card.Text>
              I like to play musical instruments such as the piano and guitar. I also like music, and this is one of the things that makes me happy when I'm alone and it's 
              also my stress reliever when I have a lot of problems.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Rides my peace of mind</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">I love beautiful nature</Card.Subtitle>
              <Card.Text>
              When I don't have school or I don't have much to do, I go for rides and go to places with beautiful views, using my motorcycle
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Playing Mobile Games</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
              Sometimes I play solitaire online, and I also know how to play piano tiles on my cellphone, it's my hobby when I'm bored
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Hobbies;
