import React from "react";
import "./my-tools-and-skills.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
console.log(FontAwesomeIcon);

const serverText = `Mongo DB , mySql , postgrest Sql , Node.js , Express, mongoose , kenx`;
const clientToolsText = `React, React-functional-Components ,MobX, Redux, Redux-thunk, JavaScript (ES5/6),
	,firebase, reselect, HTML, CSS, Sass, Materialize, Material-UI`;

const tools = `Git, Github ,Github-Pages, Heroku, Trello, Slack`;

const MyToolsAndSkills = () => (
	<div className='warper-tools-sections-container'>
		<div className='tools-sections-container'>
			<div className='section-tools-icons'>
				<FontAwesomeIcon icon={faServer} size='2x' />
				<div className='info'>{serverText}</div>
			</div>
			<div className='section-tools-icons'>
				<FontAwesomeIcon icon={faDesktop} size='2x' />
				<div className='info'>{clientToolsText}</div>
			</div>
			<div className='section-tools-icons'>
				<FontAwesomeIcon icon={faTools} size='2x' />
				<div className='info'>{tools}</div>
			</div>
		</div>
	</div>
);

export default MyToolsAndSkills;
