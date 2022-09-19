import './App.css';
import Community from './components/Community';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Register from './components/Register';
import Trainings from './components/Trainings'
import designThinking from './images/design_thinking.png'
import scrumProduct from './images/scrum_product.png'
import icp from './images/ICP-PDM.png'
import acspo from './images/A-CSPO.png'
import cpmp from './images/CPMP.png'
import Meetups from './components/Meetups';
import Webinars from './components/Webinars';
import Conference from './components/Conference';
import Videos from './components/Videos';
import PMSpeak from './components/PMSpeak';
import Blogs from './components/Blogs'
import Podcasts from './components/Podcasts';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Community />
      <Register />
      <h1 className='training-title'>Our Trainings</h1>
      <div className='training-cards'>
        <div className='card-1'><Trainings img={designThinking} title='Design Thinking' date='8th Oct, 2021' />
        </div>
        <div className='card-2'><Trainings img={scrumProduct} title='Certified Scrum Product Owner Certification' date='9th Oct, 2021' /></div>
        <div className='card-3'><Trainings img={icp} title='Product Management Launchpad' date='22nd Oct, 2021' /></div>
        <div className='card-4'><Trainings img={acspo} title='Advanced Certified Scrum Product Owner' date='8th Oct, 2021' /></div>
        <div className='card-5'><Trainings className='last-card' img={cpmp} title='Product Management Bootcamp' date='will be scheduled soon' /></div>
      </div>
      <Meetups />
      <Webinars />
      <div className='conference-main'>
        <h1 style={{display: "flex", justifyContent:"center"}}>Our Conference</h1>
          <div className='btn-groups conference-btn'>
              <ButtonGroup size="lg" className="mb-2">
                  <Button className='btn btn-light conference-upcomming'>Upcomming</Button>
                  <Button className='btn btn-dark conference-past'>Past</Button>
              </ButtonGroup>
          </div>
        <Conference />
      </div>
      
      <h1 className='videos-title'>Videos</h1>
      <div className='videos-container'>
        <Videos link="https://www.youtube.com/embed/GZL8OW1jwPM" />
        <Videos link="https://www.youtube.com/embed/Wg0X5OnZF7E" />
      </div>
      <h1 className='pmspeak-title'>PM Speak Series</h1>
      <div className='speak-series'>
        <PMSpeak />
        <PMSpeak />
        <PMSpeak />
        <PMSpeak />
      </div>
      <h1 className='blogs-title'>Blogs</h1>
      <div className='main-blogs'>
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
      </div>
      <h1 className='podcasts-title'>Podcasts</h1>
      <div className='main-podcasts'>
        <Podcasts />
        <Podcasts />
        <Podcasts />
        <Podcasts />
      </div>
      <Button className='btn btn-danger msg-btn'>Send message</Button>
    </div>
  );
}

export default App;
