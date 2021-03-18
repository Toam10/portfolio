import React from "react";
import AboutParegraph from "../about-paregraph/about-paregraph.component";
import png from "../../assets/sky.jpg";
import "./about.styles.scss";
import AboutMeFooter from "../about-me-footer/about-me-footer.component";

const AboutPage = () => (
	<div id='about-page'>
		<div className='portret-image-container'>
			<img width='100%' height='100%' src={png} alt='' />
		</div>
		<div className='about-page-center-container'>
			<h1 className='about-me-header'>About me</h1>
			<AboutParegraph />
		</div>
		<AboutMeFooter />
	</div>
);

export default AboutPage;
