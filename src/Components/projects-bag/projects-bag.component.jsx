import React from "react";
import ProjectSection from "../project-section/project-section.component";
import "./projects-bag.styles.scss";
import imageUrl1 from "../../assets/Capture.PNG";
import imageUrl2 from "../../assets/Capture2.PNG";
import imageUrl3 from "../../assets/Capture3.PNG";
const project1 = {
	header: "Smart-Brain",
	imageUrl: imageUrl1,
	text: `Smart Brain App: This app will detect your picture and tell you where the face in the picture is. The app will tell you how much time you detected on your spesific account`,
	toolsFrontEnd: `React , Redux, Redux-thunk, Api face recognition.`,
	toolsBackEnd: `Express, postgrest SQL , kenx.`,
};
const project2 = {
	header: "CRWN-Clothing",
	imageUrl: imageUrl2,
	text: `CRWN-Clothing-App: is a shopping app where you can buy clothes and this app have a pleasant experience in buying clothes.`,
	toolsFrontEnd: `React , Redux, Reselct, firebase-auth, firebase-store, Stripe-Api, Sass.`,
	toolsBackEnd: `firebase handle the database for this app and the authentications.`,
};
const project3 = {
	header: "Robo-Friends",
	imageUrl: imageUrl3,
	text: `Robo-Friends-App: in this app you can search a robo-friend.`,
	toolsFrontEnd: `React , React-lifsycle-methods,  Robots-Cards-Api.`,
	toolsBackEnd: `none`,
};
const ProjectsBag = () => (
	<div className='projects-bag-container'>
		<div>
			<ProjectSection
				toolsFrontEnd={project1.toolsFrontEnd}
				toolsBackEnd={project1.toolsBackEnd}
				header={project1.header}
				imageUrl={project1.imageUrl}
				text={project1.text}
			/>
		</div>
		<div>
			<ProjectSection
				toolsFrontEnd={project2.toolsFrontEnd}
				toolsBackEnd={project2.toolsBackEnd}
				header={project2.header}
				imageUrl={project2.imageUrl}
				text={project2.text}
			/>
		</div>
		<div>
			<ProjectSection
				toolsFrontEnd={project3.toolsFrontEnd}
				header={project3.header}
				imageUrl={project3.imageUrl}
				text={project3.text}
			/>
		</div>
	</div>
);

export default ProjectsBag;
