import React from 'react';
import NavTabs from './NavTabs';

export default function Navigation({currentPage, handlePageChange}) {
    return (
        <div 
            className="header d-flex flex-row justify-content-between align-items-center" 
            style={{ paddingTop: "5vh",
                     paddingBottom: "2vh"
                }}
            >
            <h1 className="header-name " style={{ color: '#161615' }}>Goldie</h1>
            {/* pass page props to navtabs */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}