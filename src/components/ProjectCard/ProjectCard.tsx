import "./ProjectCard.css";
import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import { ProjectType } from "../../constants/user/projects.ts";

interface ProjectCardProps {
	project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const { image, title, description, githubLink, demoLink, status } = project;
	return (
		<Grid container height={"70vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
			<Grid item xs={11} md={6} width={"50%"} borderRadius={"2rem"} boxShadow={10} overflow={"hidden"}>
				<img src={image} alt={title} className="project-img" />
			</Grid>
			<Grid item xs={12} md={6} p={5} width={"50%"}>
				<Typography variant="h3" component="h1" gutterBottom>
					{title}
				</Typography>
				<Typography variant="body1" paragraph gutterBottom>
					{description}
				</Typography>
				<Box mb={2}>
					<Typography variant="body2" color="primary">
						Status: {status.toUpperCase()}
					</Typography>
				</Box>
				<Box display={"flex"} justifyContent={"space-evenly"}>
					<Button size="medium" color="warning" variant="outlined" href={githubLink} target="_blank">
						GitHub
					</Button>
					{demoLink && (
						<Button size="medium" color="warning" variant="outlined" href={demoLink} target="_blank">
							Demo
						</Button>
					)}
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProjectCard;
