import React from "react";
import AboutParagraph from "../about-paragraph/about-paragraph.component";
import png from "../../assets/sky.jpg";
import "./about.styles.scss";
import AboutMeFooter from "../about-me-footer/about-me-footer.component";
import Tilt from "react-tilt";

const AboutPage = () => (
	<div id='about-page'>
		<div className='portret-image-container'>
			<Tilt
				className='Tilt'
				options={{ max: 25 }}
				style={{ width: "100%", height: "100%" }}
			>
				<img width='100%' height='100%' src={png} alt='' />
			</Tilt>
		</div>
		<div className='about-page-center-container'>
			<h1 className='about-me-header'>About me</h1>
			<hr />
			<AboutParagraph />
		</div>
		<AboutMeFooter />
	</div>
);

export default AboutPage;
