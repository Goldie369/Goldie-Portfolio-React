import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function PortfolioContainer() {

    // use state default 'About'
    const [currentPage, setCurrentPage] = useState('About');

    // method to check value of current page and render
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      } 
      if (currentPage === 'Project') {
        return <Projects />;
      } 
      return <Resume />;
    };

    // handle page change
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="container d-flex flex-column justify-content-between">
          {/* pass page props top header */}
          <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
          {/* render a section based on user choice */}
          {renderPage()}
          <Footer/>
        </div>
    );
}