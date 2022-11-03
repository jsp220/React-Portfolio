import React from 'react';
import Project from './Project';
import projOne from '../../../assets/images/proj1.png';



const Portfolio = () => {
	const projects = [
		{
			name: "Corgis Messenger",
			link: "https://corgi-messenger.herokuapp.com/",
			repo: "https://github.com/ricky8221/chat-project",
			img: projOne
		},
		{
			name: "Corgis Messenger",
			link: "https://corgi-messenger.herokuapp.com/",
			img: projOne
		},
		// {
		// 	name: "Corgis Messenger",
		// 	link: "https://corgi-messenger.herokuapp.com/",
		// 	img: projTwo
		// },
		// {
		// 	name: "Corgis Messenger",
		// 	link: "https://corgi-messenger.herokuapp.com/",
		// 	img: projTwo
		// },
		// {
		// 	name: "Corgis Messenger",
		// 	link: "https://corgi-messenger.herokuapp.com/",
		// 	img: projTwo
		// },
		// {
		// 	name: "Corgis Messenger",
		// 	link: "https://corgi-messenger.herokuapp.com/",
		// 	img: projTwo
		// },
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
