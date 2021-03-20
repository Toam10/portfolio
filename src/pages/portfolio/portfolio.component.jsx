import React from "react";
import ProjectsBag from "../../Components/projects-bag/projects-bag.component";
import Footer from "../footer/footer.component";
import "./portfolio.styles.scss";

const PortfolioPage = () => (
	<div className='portfolio-page'>
		<h1 className='projects-sction-header' >My Projects</h1>
		<hr/>
		<ProjectsBag />
		<Footer/>
	</div>
	
);

export default PortfolioPage;
