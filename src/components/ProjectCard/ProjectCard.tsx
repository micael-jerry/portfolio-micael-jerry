import React from "react";
import { Typography, Link, Paper } from "@mui/material";
import { ProjectStatusEnum, ProjectType } from "../../constants/projects";

type ProjectCardProps = {
	project: ProjectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<Paper
			elevation={3}
			sx={{
				p: 2,
				m: 2,
				borderRadius: "15px",
				backgroundColor: "#1e1e1e",
				color: "#fff",
				border: "1px solid #e0e0e0",
			}}
		>
			<Typography
				variant="h6"
				sx={{
					mb: 1,
					color:
						project.status === ProjectStatusEnum.IN_PROGRESS
							? "#ffb74d"
							: "#64dd17",
				}}
			>
				{project.name}
			</Typography>
			<Typography variant="body2" sx={{ mb: 1 }}>
				{project.description}
			</Typography>
			<Link
				href={project.githubRepository}
				target="_blank"
				rel="noopener"
				color="secondary"
			>
				GitHub Repository
			</Link>
		</Paper>
	);
};

export default ProjectCard;
