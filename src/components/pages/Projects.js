import React from 'react';
import Project from './Project';
import project1 from '../../assets/imgs/photo/Project1.jpg';
import project2 from '../../assets/imgs/photo/Project2.jpg';
import project3 from '../../assets/imgs/photo/Screen Shot 2023-06-24 at 11.46.32 AM.png';
import project4 from '../../assets/imgs/photo/Screen Shot 2023-06-24 at 11.26.27 AM.png';
import project5 from '../../assets/imgs/photo/Screen Shot 2023-06-24 at 11.50.29 AM.png';
import project6 from '../../assets/imgs/photo/Picture1.png ';

//array of project objects
const projects = [
  {
    key: 1,
    name: "Calpal",
    description: "CalPal, your ultimate companion in the journey towards a healthier lifestyle!",
    img: project1,
    alt: "Picture of Calpal",
    url: "https://calpal-d266c388df3c.herokuapp.com",
    github: "https://github.com/orgs/Bit-Bandits/repositories",
},
    {
      key: 2,
      name: "The Passion of Greens",
      description: "JavaScript/RecepieApi/Bulma",
      img: project2,
      alt: "Picture of The Passion of greens",
      url: "https://the-passion-of-the-greens.github.io/The-Passion-Of-The-Greens/",
      github: "https://github.com/The-Passion-of-the-Greens/The-Passion-Of-The-Greens",
  },
  {
    id: 3,
    name: "Knowledge is Power",
    description: "Node/Express/MySQL/Bootstrap",
    img: project3,
    alt: "Picture of the Knowledge is Power",
    url: "https://knowledge-is-power.herokuapp.com/login",
    github: "https://github.com/JAKGD/knowledge-is-power",
},
{
    id: 4,
    name: "Weater Dashboard",
    description: "Javascript/WeatherAPI/GoogleFonts",
    img: project4,
    alt: "Picture of the Weater Dashboard",
    url: "https://goldie369.github.io/Weather-Dashboard/",
    github: "https://github.com/Goldie369/Weather-Dashboard",
},
{
    id: 5,
    name: "Note Taker",
    description: "Node/Express",
    img: project5,
    alt: "Picture of the Note Taker App",
    url: "https://goldie-note-taker.herokuapp.com",
    github: "https://github.com/Goldie369/Note-taker-app",
},
{
    id: 6,
    name: "Work Day Scheduler",
    description: "JavaScript/CSS",
    img: project6,
    alt: "Picture of the Workcday Scheduler",
    url: "https://goldie369.github.io/Work-Day-Scheduler/",
    github: "https://github.com/Goldie369/Work-Day-Scheduler",
},

];

export default function Projects() {
  return (
    <div className="projects-page">
      <ul className="projects-list d-flex flex-wrap" style={{marginTop: "8vh", marginBottom: "8vh"}}>
        {
          projects.map((project) => (
            <Project project={project}/>
          ))
        }
      </ul>
    </div>
  );
}