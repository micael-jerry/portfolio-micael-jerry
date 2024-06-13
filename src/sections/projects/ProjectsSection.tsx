import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { PROJECTS, ProjectType } from "../../constants/projects";

export const ProjectsSection: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "90vh",
				p: 5,
			}}
		>
			<Typography variant="h2" align="center" gutterBottom>
				Projects
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				{PROJECTS.map((project: ProjectType) => (
					<Grid item xs={12} sm={6} md={4} key={project.name}>
						<ProjectCard project={project} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
