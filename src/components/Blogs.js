import React from 'react'
import Card from 'react-bootstrap/Card';

function Blogs() {
  return (
    <div className='blogs-container'>
        <a href='https://leanpitch.com/blogs/why-technical-skills-are-not-required-to-become-a-scrum-master' target='_blank'>
            <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Text>
                    Remaining in Problem Domain for User Needs - How does it help?<br />
                    <p>Avantika Nayak</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
        
    </div>
  )
}

export default Blogs
