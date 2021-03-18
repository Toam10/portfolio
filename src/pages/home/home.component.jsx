import React from "react";
import Header from "../../Components/header/header.component";
import MyToolsAndSkills from "../../Components/my-tools-and-skills/my-tools-and-skills.component";
import Navbar from "../../Components/navbar/navbar.component";
import "./home.styles.scss";

const HomePage = () => (
	<div id='home-page' >
		<Navbar />

		<Header />

		<MyToolsAndSkills />
	</div>
);

export default HomePage;
