import React from 'react';
import Navigation from './Navigation';

function Header( { currentPage, handlePageChange }) {
	return (
		<header>
			<nav className="navbar navbar-expand-lg justify-content-between">
				<div className="container-fluid">
					<a 
						className="col-4 ms-2 fw-bolder navbar-brand" 
						href="#home"
						onClick={() => handlePageChange('Home')}
					>
						Joon Park
					</a>
					<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
				</div>
			</nav>
			<h1 className="headline">Full Stack Web Developer</h1>
		</header>
	);
}

export default Header;