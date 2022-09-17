import React from 'react'
import redArrow from '../images/red_arrow.png'

function Community() {
  return (
    <div className='community-container'>
        <h1>Why We Matter?</h1>
        <img src={redArrow} className='arrow-img' />
        <div>
            <div className='community-grid'>
                <div className='community-text'>
                    <h1>Creative Thinking for creating an impact!</h1>
                    <p>Leanpitch is problem solving. Whether it's your kid asking for a solution to his day to day problems or the rise in threats of Global Warming, it's evident that the whole human kind needs to be product thinkers. We, at Product Thinking community, strive to provide such a platform for practitioners to come together and learn from each other about the craft of building products. This Platform is run by the community for the community. We are a community with 46K+ product thinkers hosting various events across India: Webinars every week, meet-ups every month in every city, two conference a year. </p>
                </div>
                

                <img src='https://i.ytimg.com/vi/aeNruMCoDDo/maxresdefault.jpg' />
            </div>

            <div className='join-btn'>
                <a href=''>Join Our Community <big>→</big></a>
            </div>
        </div>
    </div>
  )
}

export default Community