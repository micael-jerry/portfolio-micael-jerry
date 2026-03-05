import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { ALL_SKILLS, SKILL_CATEGORIES } from "../../../data/user/skills.ts";
import { COLOR_WARNING } from "../../utils/color.ts";
import { SkillCategory } from "./components/SkillCategory.tsx";

const skillVariants: Variants = {
	initial: { opacity: 0, y: 30, scale: 0.95 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: i * 0.05, duration: 0.5, type: "spring" as const, stiffness: 120 },
	}),
};

const categoryColors = {
	[SKILL_CATEGORIES.languages]: { bg: "rgba(0, 180, 255, 0.12)", border: "rgba(0, 180, 255, 0.3)", accent: "#00b4ff" },
	[SKILL_CATEGORIES.frameworks]: { bg: "rgba(76, 175, 80, 0.12)", border: "rgba(76, 175, 80, 0.3)", accent: "#4caf50" },
	[SKILL_CATEGORIES.databases]: { bg: "rgba(255, 152, 0, 0.12)", border: "rgba(255, 152, 0, 0.3)", accent: "#ff9800" },
	[SKILL_CATEGORIES.tools]: { bg: "rgba(156, 39, 176, 0.12)", border: "rgba(156, 39, 176, 0.3)", accent: "#9c27b0" },
};

const groupedSkills = ALL_SKILLS.reduce(
	(acc, skill) => {
		if (!acc[skill.category]) acc[skill.category] = [];
		acc[skill.category].push(skill);
		return acc;
	},
	{} as Record<string, typeof ALL_SKILLS>,
);

export const SkillsSection: React.FC = () => {
	return (
		<Box
			component="section"
			width="100%"
			py={{ xs: 6, md: 10 }}
			px={{ xs: 0, md: 0 }}
			sx={{
				background: "rgba(20, 20, 30, 0.10)",
				borderRadius: 4,
				minHeight: { xs: "80vh", md: "90vh" },
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				component={motion.h2}
				variant="h2"
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				sx={{
					fontWeight: 700,
					fontSize: { xs: "2.2rem", md: "2.8rem" },
					mb: 2,
					letterSpacing: 1,
					color: COLOR_WARNING.dark,
					textAlign: "center",
				}}
			>
				My Tech Stack
			</Typography>
			<Typography
				component={motion.p}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.2 }}
				viewport={{ once: true }}
				sx={{
					color: "#bdbdbd",
					fontSize: { xs: "1.08rem", md: "1.18rem" },
					mb: 4,
					maxWidth: 700,
					textAlign: "center",
				}}
			>
				These are the technologies and tools I use most often, acquired through my studies, personal and professional
				projects.
			</Typography>
			<Box sx={{ width: "100%", maxWidth: 1200 }}>
				{Object.entries(groupedSkills).map(([category, skills], categoryIndex) => {
					const colors = categoryColors[category as keyof typeof categoryColors];
					return (
						<SkillCategory
							key={category}
							category={category}
							skills={skills}
							categoryIndex={categoryIndex}
							colors={colors}
							skillVariants={skillVariants}
						/>
					);
				})}
			</Box>
		</Box>
	);
};
