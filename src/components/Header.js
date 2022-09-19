import React, {useState} from 'react'
import Blogs from './Blogs';
import Conference from './Conference';
import Meetups from './Meetups';
import PMSpeak from './PMSpeak';
import Podcasts from './Podcasts';
import Register from './Register';
import Trainings from './Trainings';
import Videos from './Videos';
import Webinars from './Webinars';
import designThinking from '../images/design_thinking.png'
import scrumProduct from '../images/scrum_product.png'
import icp from '../images/ICP-PDM.png'
import acspo from '../images/A-CSPO.png'
import cpmp from '../images/CPMP.png'

function Header() {
  // let styles = {
  //   display: "flex",
  //   justifyContent: "center",
  //   height: "95%",
  //   width: "90%",
  //   border: "6px solid yellow",
  //   color: "white",
  //   backgroundColor: "rgba(40, 40, 40, 0.354)"
  // }

    const [isUl, setIsUl] = useState(false);
    const [isTraining, setIsTraining] = useState(false);
    const [isMeetup, setIsMeetup] = useState(false);
    const [isWebinar, setIsWebinar] = useState(false);
    const [isConference, setIsConference] = useState(false);
    const [isVideos, setIsVideos] = useState(false);
    const [isPMSpeak, setIsPMSpeak] = useState(false);
    const [isBlogs, setIsBlogs] = useState(false);
    const [isPodcasts, setIsPodcasts] = useState(false);
  
    const handleUlAreaOver = () => {
      setIsUl(true)
    }

    const handleUlAreaOut = () => {
      setIsUl(false)
    }
    const handleTrainingsOver = () => {
      setIsTraining(true)
      setIsMeetup(false)
      setIsWebinar(false)
      setIsConference(false)
      setIsVideos(false)
      setIsPMSpeak(false)
      setIsBlogs(false)
      setIsPodcasts(false)
    };
  
    // const handleTrainingsOut = () => {
    //   setIsTraining(false);
    // };

    const handleMeetupOver = () => {
      setIsMeetup(true);
      setIsTraining(false)
      setIsWebinar(false)
      setIsConference(false)
      setIsVideos(false)
      setIsPMSpeak(false)
      setIsBlogs(false)
      setIsPodcasts(false)
    };
  
    // const handleMeetupOut = () => {
    //   setIsMeetup(false);
    // };

    const handleWebinarsOver = () => {
      setIsWebinar(true);
      setIsTraining(false)
      setIsMeetup(false)
      setIsConference(false)
      setIsVideos(false)
      setIsPMSpeak(false)
      setIsBlogs(false)
      setIsPodcasts(false)
    };
  
    // const handleWebinarsOut = () => {
    //   setIsWebinar(false);
    // };

    const handleConferenceOver = () => {
      setIsConference(true);
      setIsTraining(false)
      setIsMeetup(false)
      setIsWebinar(false)
      setIsVideos(false)
      setIsPMSpeak(false)
      setIsBlogs(false)
      setIsPodcasts(false)
    };
  
    // const handleConferenceOut = () => {
    //   setIsConference(false);
    // };

    const handleVideosOver = () => {
      setIsVideos(true);
      setIsTraining(false)
      setIsMeetup(false)
      setIsWebinar(false)
      setIsConference(false)
      setIsPMSpeak(false)
      setIsBlogs(false)
      setIsPodcasts(false)
    };
  
    // const handleVideosOut = () => {
    //   setIsVideos(false);
    // };

    const handlePmSpeakOver = () => {
      setIsPMSpeak(true);
      setIsTraining(false)
      setIsMeetup(false)
      setIsWebinar(false)
      setIsConference(false)
      setIsVideos(false)
      setIsBlogs(false)
      setIsPodcasts(false)
    };
  
    // const handlePmSpeakOut = () => {
    //   setIsPMSpeak(false);
    // };

    const handleBlogsOver = () => {
      setIsBlogs(true);
      setIsTraining(false)
      setIsMeetup(false)
      setIsWebinar(false)
      setIsConference(false)
      setIsVideos(false)
      setIsPMSpeak(false)
      setIsPodcasts(false)
    };
  
    // const handleBlogsOut = () => {
    //   setIsBlogs(false);
    // };

    const handlePodcastsOver = () => {
      setIsPodcasts(true);
      setIsTraining(false)
      setIsMeetup(false)
      setIsWebinar(false)
      setIsConference(false)
      setIsVideos(false)
      setIsPMSpeak(false)
      setIsBlogs(false)
    };
  
    // const handlePodcastsOut = () => {
    //   setIsPodcasts(false);
    // };

  return (
    <div className='header'>
      <div className='ul-area' onMouseOver={handleUlAreaOver}>
        <ul className='header-ul' >
            <li className='list-item' onMouseOver={handleTrainingsOver} >Trainings</li>
            <li className='list-item'  onMouseOver={handleMeetupOver} >Meetups</li>
            <li className='list-item' onMouseOver={handleWebinarsOver}  >Webinars</li>
            <li className='list-item' onMouseOver={handleConferenceOver}  >Conference</li>
            <li className='list-item' onMouseOver={handleVideosOver} >Videos</li>
            <li className='list-item' onMouseOver={handlePmSpeakOver} >PM Speak Series</li>
            <li className='list-item' onMouseOver={handleBlogsOver}  >Blogs</li>
            <li className='list-item' onMouseOver={handlePodcastsOver} >Podcasts</li>
            <li onMouseOut={handleUlAreaOut}>Be A Speaker</li>
            <li>Be A Volunteer</li>
            <li>About Us</li>
        </ul>
      </div>
        

        {isUl && (<div className='show-hover'>
          {isTraining && (
            <div className='training-cards'>
            <div className='card-1'><Trainings img={designThinking} title='Design Thinking' date='8th Oct, 2021' />
            </div>
            <div className='card-2'><Trainings img={scrumProduct} title='Certified Scrum Product Owner Certification' date='9th Oct, 2021' /></div>
            <div className='card-3'><Trainings img={icp} title='Product Management Launchpad' date='22nd Oct, 2021' /></div>
            <div className='card-4'><Trainings img={acspo} title='Advanced Certified Scrum Product Owner' date='8th Oct, 2021' /></div>
            <div className='card-5'><Trainings className='last-card' img={cpmp} title='Product Management Bootcamp' date='will be scheduled soon' /></div>
          </div>
          )}

          {isMeetup && (
            <div>
              <Meetups />
            </div>
          )}

          {isWebinar && (
                      <div>
                        <Webinars />
                      </div>
                    )}

          {isConference && (
                      <div>
                        <Conference />
                      </div>
                    )}

          {isVideos && (
                      <div>
                        <Videos />
                      </div>
                    )}

          {isPMSpeak && (
                      <div style={{display:"flex"}}>
                        <PMSpeak />
                        <PMSpeak />
                        <PMSpeak />
                      </div>
                    )}

          {isBlogs && (
                      <div style={{display:"flex"}}>
                        <Blogs />
                        <Blogs />
                        <Blogs />
                      </div>
                    )}
        {isPodcasts && (
                      <div style={{display:"flex"}}>
                        <Podcasts />
                        <Podcasts />
                        <Podcasts />
                      </div>
                    )}

        </div>)}
    </div>
  )
}

export default Header