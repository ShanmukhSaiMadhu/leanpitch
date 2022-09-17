import React from 'react'
import ptImage from '../images/pt_lab_image.png'

function Register() {
  return (
    <div className='register-container'>
        <div className='register-grid'>
            <div className='register-text'>
                <h1>Leanpitch Thinking Labs</h1>
                <p>Product Thinking Community introduces PT Labs powered by Leanpitch, Product Managers are creative thinkers and life long researchers. Their curiosity to understand the problem, persistence to solve them, and empathy to make the solutions easy makes them resourceful in solving Social Problems.<br /><br />
                If you have it in you and are looking for an oppurtunity to contribute back to society, join PT Labs. Become part of a produt team of volunteers, pickup a social problem, swarm together, design, and run experiments to find a problem/solution fit. Present your discovery and be recognized at next Product Thinking Conference. Product Thinking community will pursue further on implementing a solution in the subsequent cohorts, which you can again be part of.<br /><br />
                <b>Share your intrests by submitting your details. We will get back to you with more information.</b>
                </p>

                <div className='register-btns'>
                    <div className='details-btn'>
                        <a href=''>View Details <big>→</big></a>
                    </div>

                    <div className='register-btn'>
                        <a href=''>Register Now <big>→</big></a>
                    </div>
                </div>
            </div>
            <img src={ptImage} />
        </div>

        {/* <div className='register-btns'>
            <div className='details-btn'>
                <a href=''>View Details <big>→</big></a>
            </div>

            <div className='register-btn'>
                <a href=''>Register Now <big>→</big></a>
            </div>
        </div> */}
    </div>
  )
}

export default Register