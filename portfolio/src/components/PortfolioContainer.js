import React, { useState } from 'react'
import Header from './Header'

import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Footer from './Footer'

function PortfolioContainer() {
    //TODO: Display Header (with navbar), about Me section as default, and the footer
    // So should return 4 different components here
    //header should have navigation component children?

    const [currPage, setPage] = useState('about');

    const renderPage = () => {
        if (currPage === 'about') {
            return <About />;
        } else if (currPage === 'portfolio') {
          return <Portfolio />;
        } else if (currPage === 'contact') {
          return <Contact />
        }
        return <Resume />;
    }
    const handlePageChange = (page) => setPage(page);

    return (
        <div>
            <Header currentPage={currPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default PortfolioContainer;