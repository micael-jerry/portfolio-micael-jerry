import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_SKILLS, SKILL_CATEGORIES } from "../../data/user/skills.ts";
import { SkillCategory } from "./components/SkillCategory.tsx";

const skillVariants: Variants = {
	initial: { opacity: 0, y: 16 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.03, duration: 0.4, ease: "easeOut" },
	}),
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
	const { t } = useTranslation();

	const categoryDisplayNames: Record<string, string> = {
		[SKILL_CATEGORIES.languages]: t("skills.categories.languages"),
		[SKILL_CATEGORIES.frameworks]: t("skills.categories.frameworks"),
		[SKILL_CATEGORIES.databases]: t("skills.categories.databases"),
		[SKILL_CATEGORIES.tools]: t("skills.categories.tools"),
	};

	return (
		<Box
			component="section"
			width="100%"
			py={{ xs: 6, md: 8 }}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				component={motion.h2}
				variant="h2"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				sx={{
					fontWeight: 800,
					fontSize: { xs: "2rem", md: "2.5rem" },
					mb: 1.5,
					letterSpacing: "-0.025em",
					color: "text.primary",
					textAlign: "center",
				}}
			>
				{t("skills.heading")}
			</Typography>
			<Typography
				component={motion.p}
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				viewport={{ once: true }}
				sx={{
					color: "text.secondary",
					fontSize: { xs: "1rem", md: "1.1rem" },
					mb: 6,
					maxWidth: 680,
					textAlign: "center",
					lineHeight: 1.6,
				}}
			>
				{t("skills.subtitle")}
			</Typography>

			<Box sx={{ width: "100%", maxWidth: 1200, display: "flex", flexDirection: "column", gap: 3.5 }}>
				{Object.entries(groupedSkills).map(([category, skills], categoryIndex) => {
					const displayName = categoryDisplayNames[category] ?? category;
					return (
						<SkillCategory
							key={category}
							category={displayName}
							skills={skills}
							categoryIndex={categoryIndex}
							skillVariants={skillVariants}
						/>
					);
				})}
			</Box>
		</Box>
	);
};
