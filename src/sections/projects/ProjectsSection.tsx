import { Box, Grid, Typography } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { useRef } from "react";
import { PROJECTS } from "../../../data/user/projects.ts";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";
import { COLOR_WARNING } from "../../utils/color.ts";
import "./ProjectsSection.css";
import { ProjectType } from "../../types/project.type.ts";

export const ProjectsSection: React.FC = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

	return (
		<Box
			ref={ref}
			position={"relative"}
			py={{ xs: 6, md: 10 }}
			px={{ xs: 1, md: 4 }}
			maxWidth={"100%"}
			sx={{
				background: "rgba(20, 20, 30, 0.10)",
				borderRadius: 4,
				overflow: "hidden",
			}}
		>
			<Box component={motion.div} className="progress" pt={8} textAlign={"center"}>
				<Typography
					component={motion.h2}
					variant="h2"
					gutterBottom
					color={COLOR_WARNING.dark}
					whileHover={{ color: "white" }}
					sx={{
						fontWeight: 700,
						fontSize: { xs: "2.2rem", md: "2.8rem" },
						letterSpacing: 1,
					}}
				>
					Projects
				</Typography>
				<Typography variant="h6" gutterBottom sx={{ color: "#bdbdbd", mb: 2 }}>
					Here are a few projects I've worked on recently.
				</Typography>
				<Box
					component={motion.div}
					style={{ scaleX }}
					className="progress-bar"
					sx={{
						height: 6,
						borderRadius: 3,
						width: { xs: "60vw", md: "30vw" },
						margin: "0 auto",
						mb: 4,
					}}
				/>
			</Box>
			<Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center" alignItems="stretch">
				{PROJECTS.map((project: ProjectType, i) => (
					<ProjectCard project={project} i={i} key={project.title} />
				))}
			</Grid>
		</Box>
	);
};
