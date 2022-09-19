import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import csmpsm from '../images/csmpsm.jpg'

function Videos(props) {
  return (
    <Container className='video'>
      <div className="ratio ratio-21x9" style={{width: "25rem", height: "14rem"}}>
        <iframe src={props.link} title="YouTube video" allowFullScreen></iframe>
      </div>
    </Container>
  )
}

export default Videos