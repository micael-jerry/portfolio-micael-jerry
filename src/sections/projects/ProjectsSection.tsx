import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { PROJECTS, ProjectType } from "../../constants/user/projects.ts";
import { motion } from "framer-motion";
import { COLOR_WARNING } from "../../utils/color.ts";

export const ProjectsSection: React.FC = () => {
	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} p={5}>
			<Typography component={motion.h2} variant="h2" gutterBottom whileHover={{ color: COLOR_WARNING.dark }}>
				Projects
			</Typography>
			<Typography variant="h6" gutterBottom color="white">
				Here are a few projects I've worked on recently.
			</Typography>
			<Grid container spacing={2} justifyContent={"center"}>
				{PROJECTS.map((project: ProjectType) => (
					<Grid item xs={12} sm={6} md={4} key={project.title}>
						<ProjectCard project={project} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
