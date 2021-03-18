import React from "react";
import "./project-section.styles.scss";

const ProjectSection = ({ imageUrl, text }) => (
	<div className='project-section'>
		<div className='project-section-image-container'>
			<img width='100%' height='100%' src={imageUrl} alt='' />
		</div>
		<div className='project-section-explantion-container'>
			<p>{text}</p>
		</div>
	</div>
);

export default ProjectSection;
