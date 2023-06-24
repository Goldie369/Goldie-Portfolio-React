import React from 'react';
import photo from '../../assets/imgs/photo/profile-pic.jpeg';
// import photoTransparent from '../../assets/imgs/photo/photo-transparent.png';

export default function About() {
    return (
      <div className="about-page d-flex flex-row-reverse align-items-center" style={{height:  "85vh", border: "2px solid #161615", borderRadius: "44px", overflow: "hidden", marginTop:"5vh", marginBottom:"5vh" }}>
        <img 
          src={photo} 
            alt="Goldie Rizova profile" 
            // hide photo when screen gets too small
            className="d-none d-sm-block d-md-block d-lg-block"
            style={{
              width: "600px", 
              height: "800px", 
              border: "2px solid #161615", 
              borderTopRightRadius: "40px", 
              borderBottomRightRadius: "40px"
            }}/>
        <div>
          <h3 className="about-me-header" style={{ color: '#161615', textAlign:"center", fontWeight: "bold", marginBottom: "5vh" }}>About Me</h3>
          <p style={{ color: '#161615', paddingLeft: "6vw", paddingRight: "6vw", textAlign:"center" }}>
            My name is Goldie Rizova!!!
          </p>
        </div>
       
      </div>
    );
  }