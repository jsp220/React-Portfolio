import React from 'react';
import Me from '../../assets/images/me.jpg';

export default function AboutMe() {
	return (
		<div className="pt-1">
			<h1 className="pb-1">About Me</h1>
			<img src={Me} className="me-photo" alt="Joon Park" />
			<p>
				Joon Park is a professional full stack developer based in San Diego, CA. He completed his certificate for full stack web development at UC San Diego Extended Studies in November 2022. Joon has developed various frontend, backend, and full stack applications, some of which can be found on the Portfolio page.
			</p>
		</div>
	);
}
