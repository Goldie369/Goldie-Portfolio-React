import React, { useState } from 'react';
import { CiTextAlignJustify, CiSquareRemove } from "react-icons/ci";

const navTabs = [
    {
        id: 0,
        name: 'About',
        text: 'About Me',
        href: '#about',
    },
    {
        id: 1,
        name: 'Project',
        text: 'Portfolio',
        href: '#portfolio',
    },
    {
        id: 2,
        name: 'Contact',
        text: 'Contact',
        href: '#contact',
    },
    {
        id: 3,
        name: 'Resume',
        text: 'Resume',
        href: '#resume',
    },
];

// pass prop objects
export default function NavTabs({ currentPage, handlePageChange }) {

    // use state to vary navigation display based on screen size
    const [ icon, setIcon ] = useState(true);

    // ternary logic to check current page
    return (
        <div className="navigation-container">
            <ul className="nav">
                {
                    navTabs.map((nav) => (
                        // hide navtabs on small and sx small screens
                        <li className="nav-item d-sm-none d-md-block d-none d-sm-block" key={nav.id}>
                            <a 
                                href={nav.href}
                                // handles event
                                onClick={() => handlePageChange(nav.name)}
                                // ternary logic to assign active link when current page is selected
                                className={currentPage === nav.name ? 'nav-link active' : 'nav-link'}
                                // ternary logic to highlight only nav tab corresponding to current page
                                style={{ color: '#161615', fontWeight: currentPage === nav.name ? 'bold' : 'normal'}}
                            >
                                {nav.text}
                            </a>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
}