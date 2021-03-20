import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./footer.styles.scss";
import { ReactComponent as GitHubLogo } from "../../assets/github-logo.svg";
import { ReactComponent as GmailLogo } from "../../assets/gmail.svg";
import { Link } from "react-router-dom";

const gitHubIconStyles = {
	width: "48px",
	height: "48px",
	backgroundColor: "white",
	borderRadius: "50%",
	border: "1px solid",
};

const gmailIconSyles = {
	width:"48px",
	height:"48px",
}

const phoneIconStyles = {
	width:"42px",
	height:"42px", 
	margin:"5px 0",
}

const Footer = () => (
	<div className='footer-page'>
		<div className='contact-email'>
			<div className='footer-icon-container'>
				<GmailLogo style={gmailIconSyles} />
			</div>
			toamcohen10@gmail.com
		</div>
		<div className='contact-nubmer'>
			<div className='footer-icon-container'>
				<FontAwesomeIcon icon={faPhone} style={phoneIconStyles} />
			</div>
			054-523-3649
		</div>
		<div className='contact-github'>
			<div className='footer-icon-container'>
				<GitHubLogo style={gitHubIconStyles} />
			</div>
			<a href='https://github.com/Toam10'>My Github Profile</a>
		</div>
	</div>
);

export default Footer;
