

import './App.css';

import "./fonts/Yustika.ttf"
import "./fonts/Yustika.woff"
import "./fonts/Yustika.woff2"


import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Wow from './Components/Wow/Wow';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Wow/>
      <About/>
      <Shop/>
      <Contact/>
    </div>
  );
}

export default App;
