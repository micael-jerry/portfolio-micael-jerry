import "./ProjectsSection.css";
import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import { PROJECTS, ProjectType } from "../../constants/user/projects.ts";
import { motion, useScroll, useSpring } from "framer-motion";
import { COLOR_WARNING } from "../../utils/color.ts";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";

export const ProjectsSection: React.FC = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
	return (
		<Box
			ref={ref}
			position={"relative"}
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			p={5}
		>
			<Box component={motion.div} className="progress" pt={8} textAlign={"center"}>
				<Typography component={motion.h2} variant="h2" gutterBottom whileHover={{ color: COLOR_WARNING.dark }}>
					Projects
				</Typography>
				<Typography variant="h6" gutterBottom color="white">
					Here are a few projects I've worked on recently.
				</Typography>
				<Box component={motion.div} style={{ scaleX }} className="progress-bar"></Box>
			</Box>
			{PROJECTS.map((project: ProjectType) => (
				<ProjectCard project={project} key={project.title} />
			))}
		</Box>
	);
};
