import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineLinkedin } from 'react-icons/ai';
import { DiGithubBadge, DiStackoverflow } from 'react-icons/di';

const socials = [
    {
        id: 0,
        name: 'GitHub',
        link: 'https://github.com/',
        icon: DiGithubBadge,
    },
    {
        id: 1,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/',
        icon: AiOutlineLinkedin,
    },
    {
        id: 2,
        name: 'StackOverflow',
        link: 'https://stackoverflow.com/',
        icon: DiStackoverflow,
    },
]

export default function Footer() {
    return (
        <div className="footer">
          <ul className="icons-list d-flex justify-content-start">
                {
                    socials.map((social) => (
                        <li className="icon-item p-2" key={social.id}>
                            <a href={social.link} target="_blank" rel="noreferrer">
                            <IconContext.Provider value={{ color: "#161615"}}>
                                <social.icon size={40}/>
                            </IconContext.Provider>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
