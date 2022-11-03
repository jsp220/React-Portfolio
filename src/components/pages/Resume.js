import React from 'react';
import ResumeFile from '../../assets/resume/resume.pdf';

const Resume = () => {
	return (
		<div className="pt-1">
			<a className="resume" href={ResumeFile} target="_blank">
				<h1 className="resume-link">Resume</h1>
			</a>
		</div>
	);
}

export default Resume;
