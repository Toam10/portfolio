import React from "react";
import "./about-me-footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AboutMeFooter = () => (
	<div className='about-me-footer'>
		<div className='about-me-accomplishments'>
			<FontAwesomeIcon icon={faStar} size='3x' />
			<h3>Accomplishments</h3>
			<hr/>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, facilis quasi. Officiis quia provident perspiciatis excepturi eaque minima unde asperiores necessitatibus praesentium autem, laborum ad voluptas mollitia pariatur nam in?
			</p>
		</div>
		<div className='about-me-accomplishments'>
			<FontAwesomeIcon icon={faStar} size='3x' />
			<h3>Volunteer</h3>
			<hr/>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, facilis quasi. Officiis quia provident perspiciatis excepturi eaque minima unde asperiores necessitatibus praesentium autem, laborum ad voluptas mollitia pariatur nam in?
			</p>
		</div>
		<div className='about-me-accomplishments'>
			<FontAwesomeIcon icon={faStar} size='3x' />
			<h3>Hobbies</h3>
			<hr/>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, facilis quasi. Officiis quia provident perspiciatis excepturi eaque minima unde asperiores necessitatibus praesentium autem, laborum ad voluptas mollitia pariatur nam in?
			</p>
		</div>
	</div>
);

export default AboutMeFooter;
