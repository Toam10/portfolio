import React from "react";
import "./project-section.styles.scss";
import Tilt from "react-tilt";

const toolsBackEndFunc = (toolsBackEnd) => {
	if (toolsBackEnd) {
		return (
			<>
				<span className='sub-header-project-explantion'> Back End Tools</span>
				<hr className='sub-header-project-explantion-hr' />
				<br />
				{toolsBackEnd}
			</>
		);
	}
};

const ProjectSection = ({ imageUrl, header, text, toolsBackEnd, toolsFrontEnd }) => {
	console.log(imageUrl);
	return (
		<div className='project-section'>
			<div className='project-section-image-container'>
				<Tilt
					className='Tilt'
					options={{ max: 25 }}
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img src={imageUrl} alt='' width='100%' height='auto' />
				</Tilt>
			</div>
			<div className='project-section-explantion-container'>
				<p>
					<h1>{header}</h1>
					<hr />
					{text}
					<br />
					<>
						<span className='sub-header-project-explantion'>
							{" "}
							Front End Tools
						</span>
						<hr className='sub-header-project-explantion-hr' />
						{toolsFrontEnd}
					</>
					<br />
					{toolsBackEndFunc(toolsBackEnd)}
				</p>
			</div>
		</div>
	);
};

export default ProjectSection;
