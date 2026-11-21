import { Box, Grid, Typography } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";
import { PROJECTS } from "../../data/user/projects.ts";
import { ProjectType } from "../../types/project.type.ts";
import "./ProjectsSection.css";

export const ProjectsSection: React.FC = () => {
	const ref = useRef(null);
	const { t } = useTranslation();
	const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

	return (
		<Box component="section" ref={ref} position="relative" py={{ xs: 6, md: 8 }} maxWidth="100%" width="100%">
			<Box component={motion.div} className="progress" pt={2} pb={4} textAlign="center">
				<Typography
					component={motion.h2}
					variant="h2"
					sx={{
						fontWeight: 800,
						fontSize: { xs: "2rem", md: "2.5rem" },
						letterSpacing: "-0.025em",
						color: "text.primary",
						mb: 1.5,
					}}
				>
					{t("projects.heading")}
				</Typography>
				<Typography variant="body1" sx={{ color: "text.secondary", mb: 3, maxWidth: 600, mx: "auto" }}>
					{t("projects.subtitle")}
				</Typography>
				<Box
					component={motion.div}
					style={{ scaleX }}
					className="progress-bar"
					sx={{
						height: 3,
						borderRadius: 9999,
						width: { xs: "40vw", md: "20vw" },
						margin: "0 auto",
						bgcolor: "text.primary",
						opacity: 0.2,
					}}
				/>
			</Box>
			<Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
				{PROJECTS.map((project: ProjectType, i) => (
					<ProjectCard project={project} i={i} key={project.title} />
				))}
			</Grid>
		</Box>
	);
};
