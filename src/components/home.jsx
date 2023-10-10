import "./home.css";
import logo from "./Thigh High Black Stilletos Boots.jpg";
import React from 'react';



function Home() {
  return (
    <div className="home page">
       <div>  
         <p>⊂⊃ SEXY     ⊂⊃ CONFIDENCE    ⊂⊃ FASHIONABLE  ⊂⊃ LURRING ⊂⊃ APPEALING ⊂⊃ HYPNOTIZING</p>
       </div>
      <h1>👠KICK'IN UP HEELS👠</h1>
      <p>Where We Make All Your Shoe Dreams Come True</p>
      <header className="App-header">
        
        <div className="image-container">
          <img src={logo} className="header-pic" alt="logo" />
       
          <img src={logo} className="header-pic" alt="logo" />
          
          <img src={logo} className="header-pic" alt="logo" />
         
        </div>
      
    
      </header>
    </div>
  );
}


export default Home;

