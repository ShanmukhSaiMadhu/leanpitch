import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Trainings(props) {
  return (
    <div className='training-container'>
        <Card style={{ width: '20rem'}} >
            <Card.Img variant="top" src={props.img} className='card-img' />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                  <div className='card-main-text'>
                    <h4><small className='card-small'>Upcomming Training</small><br />{props.date}</h4>
                  </div>
                </Card.Text>
                <Button variant="primary" className='card-btn'>Register</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Trainings