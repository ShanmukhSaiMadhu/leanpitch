import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

function Webinars() {
  return (
    <div className='webinars-container'>
    <h1>Our Webinars</h1>
    <div className='btn-groups'>
      <ButtonGroup size="lg" className="mb-2">
          <Button className='btn btn-dark webinar-upcomming'>Upcomming</Button>
          <Button className='btn btn-light webinar-past'>Past</Button>
      </ButtonGroup>
    </div>
    <Card style={{ width: '22rem' }}>
      <Card.Body>
        <Card.Text>
          Remaining in Problem Domain for User Needs - How does it help?<br />
          <p>30th Sep, 2021</p>
        </Card.Text>
      </Card.Body>
    </Card>
</div>
  )
}

export default Webinars