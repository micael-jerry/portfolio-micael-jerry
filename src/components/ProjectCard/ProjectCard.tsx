import "./ProjectCard.css"
import React, { useRef } from "react";
import { Typography, Box, Container } from "@mui/material";
import { ProjectType } from "../../constants/user/projects.ts";
import { useScroll, useTransform } from "framer-motion";

interface ProjectCardProps {
	project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const { image, title, description, githubLink, demoLink, status } = project;
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
	return (
		<Container maxWidth="lg">
			<Box ref={ref} height={"70vh"} maxWidth={"100vw"} display={"flex"} alignItems={"center"}>
				<Box width={"50%"} borderRadius={"2rem"} boxShadow={10} overflow={"hidden"}>
					<img src={image} alt={title} className="project-img" />
				</Box>
				<Box sx={{ width: "50%", marginLeft: "2rem" }}>
					<Typography variant="h3" component="h1" gutterBottom>
						{title}
					</Typography>
					<Typography variant="body1" paragraph>
						{description}
					</Typography>
				</Box>
			</Box>
		</Container>
	);
};

export default ProjectCard;
