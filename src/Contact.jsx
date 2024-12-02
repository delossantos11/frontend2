import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; 
import './Contact.css'

function Contacts() {
  return (
    <div>
      <h1 className='contact-h1'>Contact Information</h1>
      
      <Row className="mt-4">
        <Col md={4}>
          <Card style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Facebook:</Card.Title>
              <Card.Text>
              Aron Ranel Delos Santos
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Email:</Card.Title>
              <Card.Text>
                arodelossantos@gbox.ncf.edu.ph
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Contact Number:</Card.Title>
              <Card.Text>
              09674172111 
              Globe,go99
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Git Hub</Card.Title>
              <Card.Text>
               delossantos11
               https://github.com/account
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </div>
  );
}

export default Contacts;
