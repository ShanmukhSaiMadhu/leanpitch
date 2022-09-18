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
    </div>
  );
}

export default App;
