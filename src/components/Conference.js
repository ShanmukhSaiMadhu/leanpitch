import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Conference() {
  return (
    <div className='conference-container'>
        <h1>Our Conference</h1>
        <div className='btn-groups'>
            <ButtonGroup size="lg" className="mb-2">
                <Button className='btn btn-light active'>Upcomming</Button>
                <Button className='btn btn-dark conference-past'>Past</Button>
            </ButtonGroup>
        </div>
        <p>Conferences are not just about learning from the speakers. It's also about meeting new people, learning from attendes, making connections, getting to know each other and being part of community.<br /> <br />Having hosted the conferences online last year and after close consultation with the community, speakers, exhibitors and event partners, we have decided to host our next conference in person to make it more effective.<br /><br />We will be back with more information once COVID subsides</p>
        <button className='notify-btn'>Notify Me <big>→</big></button>
    </div>
  )
}

export default Conference