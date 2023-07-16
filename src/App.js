import './App.css';
import React from 'react';
import Activity from './components/Activity';
import BMC from './images/bmc-logo.png';
import BMC2 from './images/bmc-full logo.png';
import { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const getImgLink = () => {
    if(isHovered){
      return BMC2;
    }
    return BMC;
  }

  return (
    <div className="App">
      
      <Activity />
      <a  
      className={isHovered ? 'link-hovered ' : 'buyme'}
      target="_blank" 
      href="https://www.buymeacoffee.com/thecodedesigner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      
      <img src={getImgLink()} alt="" />
      </a>
      
    </div>
  );
}

export default App;
