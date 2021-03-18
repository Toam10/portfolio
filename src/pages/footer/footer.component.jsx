import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./footer.styles.scss";

const Footer = () => (
	<div className='footer-page'>
		<div className='contact-email'>
			<div className='footer-icon-container'>
				<FontAwesomeIcon icon={faAt} size='3x' />
			</div>
			toamcohen10@gmail.com
		</div>
		<div className='contact-nubmer'>
			<div className='footer-icon-container'>
				<FontAwesomeIcon icon={faPhone} size='3x' />
			</div>
			054-523-3649
		</div>
		<div className='contact-github'>
			<div className='footer-icon-container'>
				<FontAwesomeIcon icon={faUser} size='3x' />
			</div>
			My Github Profile
		</div>
	</div>
);

export default Footer;
