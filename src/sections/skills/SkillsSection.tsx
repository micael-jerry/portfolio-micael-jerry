import { Box, Chip, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ALL_SKILLS, SKILL_CATEGORIES } from "../../../data/user/skills.ts";
import { COLOR_WARNING } from "../../utils/color.ts";

const skillVariants = {
	initial: { opacity: 0, y: 30, scale: 0.95 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: i * 0.05, duration: 0.5, type: "spring", stiffness: 120 },
	}),
};

const categoryColors = {
	[SKILL_CATEGORIES.languages]: { bg: "rgba(25, 118, 210, 0.13)", hover: "rgba(25, 118, 210, 0.25)" },
	[SKILL_CATEGORIES.frameworks]: { bg: "rgba(76, 175, 80, 0.13)", hover: "rgba(76, 175, 80, 0.25)" },
	[SKILL_CATEGORIES.databases]: { bg: "rgba(255, 152, 0, 0.13)", hover: "rgba(255, 152, 0, 0.25)" },
	[SKILL_CATEGORIES.tools]: { bg: "rgba(156, 39, 176, 0.13)", hover: "rgba(156, 39, 176, 0.25)" },
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
				{Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
					<Paper
						key={category}
						elevation={0}
						component={motion.div}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: categoryIndex * 0.2 }}
						viewport={{ once: true }}
						sx={{
							background: "rgba(30,30,40,0.55)",
							backdropFilter: "blur(8px)",
							borderRadius: 4,
							px: { xs: 1, sm: 2, md: 6 },
							py: { xs: 3, md: 5 },
							boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
							mb: 4,
						}}
					>
						<Typography
							variant="h4"
							sx={{
								fontWeight: 600,
								fontSize: { xs: "1.5rem", md: "1.8rem" },
								mb: 3,
								color: "#fff",
								textAlign: "center",
							}}
						>
							{category}
						</Typography>
						<Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" alignItems="center">
							{skills.map((skill, i) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									lg={3}
									key={skill.name}
									sx={{ display: "flex", justifyContent: "center" }}
								>
									<motion.div
										custom={i}
										initial="initial"
										whileInView="animate"
										variants={skillVariants}
										viewport={{ once: true }}
										whileHover={{
											scale: 1.08,
											boxShadow: `0 4px 24px 0 ${categoryColors[category as keyof typeof categoryColors]?.hover || "rgba(255,193,7,0.18)"}`,
										}}
										style={{ width: "100%", display: "flex", justifyContent: "center" }}
									>
										<Chip
											label={
												<Typography
													sx={{
														fontWeight: 600,
														fontSize: { xs: "1.08rem", md: "1.13rem" },
														whiteSpace: "nowrap",
														overflow: "visible",
														textOverflow: "unset",
													}}
												>
													{skill.name}
												</Typography>
											}
											icon={
												<img
													src={skill.logo}
													alt={skill.name}
													style={{
														width: 26,
														height: 26,
														objectFit: "contain",
														marginRight: 8,
													}}
												/>
											}
											sx={{
												px: 2.5,
												py: 1.2,
												fontWeight: 600,
												color: "#fff",
												background:
													categoryColors[category as keyof typeof categoryColors]?.bg || "rgba(25, 118, 210, 0.13)",
												borderRadius: 3,
												boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
												transition: "all 0.2s",
												minWidth: 120,
												maxWidth: 260,
												"& .MuiChip-label": {
													overflow: "visible",
													textOverflow: "unset",
													whiteSpace: "nowrap",
												},
												"& .MuiChip-icon": { ml: 0, mr: 1 },
											}}
										/>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</Paper>
				))}
			</Box>
		</Box>
	);
};
