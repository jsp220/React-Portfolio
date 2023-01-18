import React from 'react';
import ResumeFile from '../../assets/resume/resume.pdf';

const Resume = () => {
	return (
		<div className="pt-1">
			<h1 className="resume">Resume</h1>
			<a className="resume resume-link" href={ResumeFile} target="_blank" rel="noreferrer">
			Click Here!
			</a>
		</div>
	);
}

export default Resume;
