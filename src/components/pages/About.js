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
            Proficient full stack Web Developer who wants to put the “FUN” in functions. Uses knowledge of multiple technologies to help create a unique experience and creatively solve problems in both front-end and back-end environments. Exceptionally adept in relationship building and innovative problem solving. A highly effective communicator both verbally and written. Active listener who can take an idea, concept, or problem and break it down to create a unique resolution or experience. Consummate networker who finds passion in bringing people together and is able to bridge gaps. Passionate about learning not only computer programming but about people and their experiences. 
Experience with HTML, CSS, JavaScript, JQuery, Node.js, Responsive Design, Bootstrap, Handlebars, Local Storage, React.js, MySQL, MongoDB, Express, User Authentication, Mern Stack (MongoDB, Express.js, React.js, Node.js), 
Also worked with these programs: Microsoft Teams, Excel, Word, Outlook, Power Point, GitHub, Git, Visual Studio Code, Whimsical, Canva, Heroku, ReplIt, Postman. 
Open to roles that allow for travel and/or remote work in full stack, front end, and back end web development, junior developer roles. Looking to continue my passion in coding and creating fun experiences for users, and help organizations better optimize systems and processes. 

“When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.” —Alexander Graham Bell
          </p>
        </div>
       
      </div>
    );
  }