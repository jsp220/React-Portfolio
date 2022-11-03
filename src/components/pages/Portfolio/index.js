import React from 'react';
import Project from './Project';
// import all images
import projOne from '../../../assets/images/proj1.png';
import projTwo from '../../../assets/images/proj2.png';
import projThree from '../../../assets/images/proj3.png';
import projFour from '../../../assets/images/proj4.png';
import projFive from '../../../assets/images/proj5.png';
import projSix from '../../../assets/images/proj6.png';


const Portfolio = () => {
	// organize all projects as an array of objects so that they can be mapped through
	const projects = [
		{
			name: "Corgis Messenger",
			link: "https://corgi-messenger.herokuapp.com/",
			repo: "https://github.com/jsp220/Chat-App",
			img: projOne
		},
		{
			name: "Fullstech Blog",
			link: "https://fullstech-blog.herokuapp.com/",
			repo: "https://github.com/jsp220/Fullstech-Blog",
			img: projTwo
		},
		{
			name: "Work Day Scheduler",
			link: "https://jsp220.github.io/Work-Day-Scheduler/",
			repo: "https://github.com/jsp220/Work-Day-Scheduler",
			img: projThree
		},
		{
			name: "Weather Dashboard",
			link: "https://jsp220.github.io/Weather-Dashboard/",
			repo: "https://github.com/jsp220/Weather-Dashboard",
			img: projFour
		},
		{
			name: "Employee Tracker",
			link: "https://github.com/jsp220/Employee-Tracker",
			repo: "https://github.com/jsp220/Employee-Tracker",
			img: projFive
		},
		{
			name: "Team Profile Generator",
			link: "https://github.com/jsp220/Team-Profile-Generator",
			repo: "https://github.com/jsp220/Team-Profile-Generator",
			img: projSix
		},
	]
	
	return (
		<div className="row portfolio justify-content-around">
			{projects.map((item) => {
				return <Project {...item} />
			})}
		</div>	

	);
}

export default Portfolio;
