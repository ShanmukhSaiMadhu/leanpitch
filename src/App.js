import './App.css';
import Community from './components/Community';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Community />
      <Register />
    </div>
  );
}

export default App;
