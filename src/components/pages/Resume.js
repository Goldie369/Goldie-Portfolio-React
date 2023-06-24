import React from 'react';
import resume from '../../assets/resume/Resume.pdf'
import {
    DiJavascript1,
    DiCss3Full,
    DiHtml5,
    DiReact,
    DiNodejsSmall,
    DiMysql,
    DiMongodb,
    DiBootstrap,

} from 'react-icons/di';

import {
    SiExpress,
    SiGraphql,
    SiWebpack,
    SiHandlebarsdotjs
} from 'react-icons/si';

const skills = [
    {
        id: 0,
        name: 'JavaScript',
        icon: DiJavascript1,
    },
    {
        id: 1,
        name: 'CSS',
        icon: DiCss3Full,
    },
    {
        id: 2,
        name: 'HTML',
        icon: DiHtml5,
    },
    {
        id: 3,
        name: 'React',
        icon: DiReact,
    },
    {
        id: 4,
        name: 'Node',
        icon: DiNodejsSmall,
    },
    {
        id: 5,
        name: 'Express',
        icon: SiExpress,
    },
    {
        id: 6,
        name: 'MySQL',
        icon: DiMysql,
    },
    {
        id: 7,
        name: 'MongoDB',
        icon: DiMongodb,
    },
    {
        id: 8,
        name: 'GraphQL',
        icon: SiGraphql,
    },
    {
        id: 9,
        name: 'Webpack',
        icon: SiWebpack,
    },
    {
        id: 10,
        name: 'Bootstrap',
        icon: DiBootstrap,
    },
    {
        id: 11,
        name: 'Handlebars',
        icon: SiHandlebarsdotjs,
    },
];

export default function Resume() {
    return (
      <div className="resume-page d-flex flex-row align-items-center justify-content-around" style={{height:  "85vh", border: "2px solid #161615", borderRadius: "44px", overflow: "hidden", marginTop:"5vh", marginBottom:"5vh" }}>
        {/* link to download pdf resume */}
       
        <a href={resume} download="Goldie-Rizova-Resume" target='_blank' rel="noreferrer">
        <button 
            className="btn btn-primary"
            style={{
                backgroundColor: "#F8f7f3", 
                color: "#161615", 
                borderRadius: "0", 
                border: "2px solid #161615",
                fontFamily: "abril-fatface, serif",
                padding: "2vh 5vw",
                fontSize: "25px"
              }}
            > 
            Download Resume
        </button>
        </a>
        
        <div style={{textAlign: 'center'}}>
            <ul className="skills-list">
                {
                    skills.map((skill) => (
                        <li className="skill-item d-flex align-items-center p-1" key={skill.id}>
                            <div className="p-1"><skill.icon size={30}/></div>
                            <div style={{color: '#161615'}}>{skill.name}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
    );
  }