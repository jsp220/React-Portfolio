import React from 'react';


const Navigation = ( { currentPage, handlePageChange}) => {
    return (
        <ul className="col-7 nav justify-content-end ms-auto mt-2 mt-lg-0 text-end">
            <li className="nav-item">
                <a 
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link fw-bolder' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link fw-bolder' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link fw-bolder' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link fw-bolder' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link fw-bolder' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default Navigation