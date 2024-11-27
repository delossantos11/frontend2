import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; 
import './Education.css'

function Education() {
  return (
    <div>
      <h1 className='education-h1'>My Educational background</h1>

      <Row className="mt-4">
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Elementary</Card.Title>
              <Card.Text>
                Baliguian Elementary school, Baliguian Presentacion Cam. Sur
              </Card.Text>
              This is where I met my first crush
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Junior High School</Card.Title>
              <Card.Text>
                Taytay Nationa High School, Goa Cam. Sur
              </Card.Text>
              Goods Student
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Senior High School</Card.Title>
              <Card.Text>
                Bitaogan National High School, Bitaogan Presentacion Cam Sur
              </Card.Text>
              No guidance since birth
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>College</Card.Title>
              <Card.Text>
                Naga College Foundation Inc.
              </Card.Text>
              Stress
            </Card.Body>
          </Card>
        </Col>
      </Row>
</div>

 
  );
}

export default Education;
