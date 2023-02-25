

import './App.css';

import "./fonts/Yustika.ttf"
import "./fonts/Yustika.woff"
import "./fonts/Yustika.woff2"


import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Wow from './Components/Wow/Wow';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Wow/>
    </div>
  );
}

export default App;
