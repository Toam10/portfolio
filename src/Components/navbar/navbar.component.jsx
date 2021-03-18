import React from "react";
import { div } from "react-router-dom";
import "./navbar.styles.scss";
import { useScrollSection } from "react-scroll-section";
const Navbar = () => {
	const homeSection = useScrollSection("home");
	const aboutSection = useScrollSection("about");
	const portfolioSection = useScrollSection("portfolio");
	return (
		<div className='navbar-sections-container'>
			<div
				onClick={homeSection.onClick}
				onSelect={homeSection.selected}
				className='section-nevigation-bar'
			>
				Home
			</div>
			<div
				onClick={aboutSection.onClick}
				onSelect={aboutSection.selected}
				className='section-nevigation-bar'
			>
				About
			</div>
			<div
				onClick={portfolioSection.onClick}
				onSelect={portfolioSection.selected}
				className='section-nevigation-bar'
			>
				Projects
			</div>
		</div>
	);
};

export default Navbar;
