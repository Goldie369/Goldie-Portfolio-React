import React from 'react';
import { IconContext } from "react-icons";
import { DiGithubBadge} from 'react-icons/di';

export default function Project({project}) {
    return (
        <li className="project-item" style={{marginBottom: "2vh"}} key={project.id}>
            <img alt={project.alt} className="project-img" src={project.img} style={{width: "400px", height: "300px", marginBottom: "2vh"}}/>
            <div className="project-description-container" style={{textAlign: "center"}}>
                <h5 className="project-name" style={{fontWeight: "bold", color: "#161615", margin: "0"}}>{project.name}</h5>
                <h6 className="project-description" style={{color: "#161615", margin: "0"}}>{project.description}</h6>
                <p className="project-url" style={{margin: "0"}}>
                    <a 
                        lassName="project-url-link" href={project.url} 
                        target="_blank" rel="noreferrer" 
                        style={{color: "#161615", fontSize: "2vh"}}
                    >
                        Link to Deployed App
                    </a>
                </p>
                <p className="project-github" style={{margin: "0"}}>
                    <a className="project-github-link" href={project.github} target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "#161615"}}>
                            <DiGithubBadge size={40}/>
                        </IconContext.Provider>
                    </a>
                </p>
            </div>
            
        </li>
    );
}