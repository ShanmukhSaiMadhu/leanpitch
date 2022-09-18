import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Meetups() {
  return (
    <div className='meetups-container'>
        <h1>Our Meetups</h1>
        <div className='btn-groups'>
          <ButtonGroup size="lg" className="mb-2">
              <Button className='btn btn-dark active'>Upcomming</Button>
              <Button className='btn btn-light'>Past</Button>
          </ButtonGroup>
          <button className='btn-filter'><i class="fa-solid fa-filter"></i>Filter By City</button>
        </div>
        <h2>Awesome meetups will be here soon!</h2>
    </div>
  )
}

export default Meetups