import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from "@mui/material";
import { ProjectType } from "../../constants/user/projects.ts";
import { IMAGES } from "../../assets";

interface ProjectCardProps {
	project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const { image, title, description, githubLink, demoLink, status } = project;
	return (
		<Card
			sx={{
				maxWidth: 345,
				margin: "auto",
				backgroundColor: "transparent",
				boxShadow: 9,
			}}
		>
			<CardMedia component="img" height="140" image={image ?? IMAGES.projectDefaultImg} alt={title} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" color="white">
					{title}
				</Typography>
				<Typography variant="body2" color="white">
					{description}
				</Typography>
				<Box mt={2}>
					<Typography variant="body2" color="primary">
						Status: {status.toUpperCase()}
					</Typography>
				</Box>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary" variant="outlined" href={githubLink} target="_blank">
					GitHub
				</Button>
				{demoLink && (
					<Button size="small" color="primary" variant="outlined" href={demoLink} target="_blank">
						Demo
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
