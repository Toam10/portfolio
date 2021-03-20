import React from "react";
import "./about-me-footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AboutMeFooter = () => (
	<div className='about-me-footer'>
		<div className='about-me-accomplishments'>
			<FontAwesomeIcon icon={faStar} size='3x' />
			<h3>Accomplishments</h3>
			<hr />
			<p>
				Done successfully a web development course of about 4 and a half months 5 days a
				week in Elevation
			</p>
		</div>
		<div className='about-me-accomplishments'>
			<FontAwesomeIcon icon={faStar} size='3x' />
			<h3>Volunteer</h3>
			<hr />
			<p>
				I volunteered at a kennel in Herzliya for about six months while serving in the
				Army
			</p>
		</div>
		<div className='about-me-accomplishments'>
			<FontAwesomeIcon icon={faStar} size='3x' />
			<h3>Hobbies</h3>
			<hr />
			<p>
				I like to be smarter And I like to sit in bars One of my best hobbies is sitting
				at a bar while having some interesting lecture, One of my loves is photography I
				discovered that when I served in the military as a result of being also
				documenting information gathered in the field
			</p>
		</div>
	</div>
);

export default AboutMeFooter;
