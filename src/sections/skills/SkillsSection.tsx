import { Box, Grid, Typography } from "@mui/material";
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
						<motion.div
							key={category}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: categoryIndex * 0.2 }}
							viewport={{ once: true }}
							style={{ marginBottom: 32 }}
						>
							<Box
								sx={{
									background: `linear-gradient(135deg, ${colors?.bg} 0%, rgba(30, 30, 50, 0.4) 100%)`,
									backdropFilter: "blur(12px)",
									borderRadius: 4,
									px: { xs: 1, sm: 2, md: 6 },
									py: { xs: 3, md: 5 },
									boxShadow: `0 8px 32px 0 ${colors?.bg.replace("0.12", "0.15")}`,
									border: `1px solid ${colors?.border}`,
									position: "relative",
									overflow: "hidden",
								}}
							>
								{/* Background Accent */}
								<motion.div
									style={{
										position: "absolute",
										top: -50,
										right: -50,
										width: 150,
										height: 150,
										background: `radial-gradient(circle, ${colors?.accent}20 0%, transparent 70%)`,
										zIndex: 0,
									}}
									animate={{ scale: [1, 1.2, 1] }}
									transition={{ duration: 4, repeat: Infinity }}
								/>

								<Typography
									variant="h4"
									sx={{
										fontWeight: 700,
										fontSize: { xs: "1.6rem", md: "1.9rem" },
										mb: 4,
										color: colors?.accent,
										textAlign: "center",
										position: "relative",
										zIndex: 1,
										letterSpacing: 1,
									}}
								>
									{category}
								</Typography>
								<Grid
									container
									spacing={{ xs: 2, sm: 3, md: 3 }}
									justifyContent="center"
									alignItems="center"
									sx={{ position: "relative", zIndex: 1 }}
								>
									{skills.map((skill, i) => (
										<Grid
											item
											xs={12}
											sm={6}
											md={"auto"}
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
													scale: 1.12,
													boxShadow: `0 12px 40px 0 ${colors?.accent}40`,
												}}
												whileTap={{ scale: 0.95 }}
											>
												<Box
													sx={{
														p: 2,
														borderRadius: 2,
														background: `linear-gradient(135deg, ${colors?.bg} 0%, rgba(0,0,0,0.1) 100%)`,
														border: `1.5px solid ${colors?.accent}40`,
														boxShadow: `0 4px 16px 0 ${colors?.accent}20`,
														transition: "all 0.3s ease",
														display: "flex",
														flexDirection: "column",
														alignItems: "center",
														gap: 1.5,
														minWidth: 100,
														cursor: "pointer",
													}}
												>
													<Box
														sx={{
															width: 48,
															height: 48,
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															background: `${colors?.accent}15`,
															borderRadius: 1.5,
														}}
													>
														<img
															src={skill.logo}
															alt={skill.name}
															style={{
																width: 32,
																height: 32,
																objectFit: "contain",
															}}
														/>
													</Box>
													<Typography
														sx={{
															fontWeight: 600,
															fontSize: "0.95rem",
															color: "#fff",
															textAlign: "center",
														}}
													>
														{skill.name}
													</Typography>
												</Box>
											</motion.div>
										</Grid>
									))}
								</Grid>
							</Box>
						</motion.div>
					);
				})}
			</Box>
		</Box>
	);
};
