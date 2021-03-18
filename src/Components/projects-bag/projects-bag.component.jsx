import React from "react";
import ProjectSection from "../project-section/project-section.component";
import "./projects-bag.styles.scss";
import imageUrl1 from "../../assets/Capture.PNG";
const project1 = {
	imageUrl: imageUrl1,
	text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quo quod labore nostrum ab quia. Magnam, voluptatum! Dolorum, officia laboriosam nam adipisci repudiandae dolores aperiam possimus! Numquam rem sunt iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quo quod labore nostrum ab quia. Magnam, voluptatum! Dolorum, officia laboriosam nam adipisci repudiandae dolores aperiam possimus! Numquam rem sunt iusto.
`,
};
const project2 = {
	imageUrl: imageUrl1,
	text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quo quod labore nostrum ab quia. Magnam, voluptatum! Dolorum, officia laboriosam nam adipisci repudiandae dolores aperiam possimus! Numquam rem sunt iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quo quod labore nostrum ab quia. Magnam, voluptatum! Dolorum, officia laboriosam nam adipisci repudiandae dolores aperiam possimus! Numquam rem sunt iusto.
`,
};
const project3 = {
	imageUrl: imageUrl1,
	text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quo quod labore nostrum ab quia. Magnam, voluptatum! Dolorum, officia laboriosam nam adipisci repudiandae dolores aperiam possimus! Numquam rem sunt iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quo quod labore nostrum ab quia. Magnam, voluptatum! Dolorum, officia laboriosam nam adipisci repudiandae dolores aperiam possimus! Numquam rem sunt iusto.
`,
};
const ProjectsBag = () => (
	<div className='projects-bag-container'>
		<div>
			<ProjectSection imageUrl={project1.imageUrl} text={project1.text} />
		</div>
		<div>
			<ProjectSection imageUrl={project2.imageUrl} text={project2.text} />
		</div>
		<div>
			<ProjectSection imageUrl={project3.imageUrl} text={project3.text} />
		</div>
	</div>
);

export default ProjectsBag;
