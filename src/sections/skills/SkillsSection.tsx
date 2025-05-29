import { Box, Typography, Chip, Grid, Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { COLOR_WARNING } from "../../utils/color.ts";
import { ALL_SKILLS } from "../../data/user/skills.ts";

const skillVariants = {
	initial: { opacity: 0, y: 30, scale: 0.95 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: i * 0.05, duration: 0.5, type: "spring", stiffness: 120 },
	}),
};

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
			<Paper
				elevation={0}
				sx={{
					background: "rgba(30,30,40,0.55)",
					backdropFilter: "blur(8px)",
					borderRadius: 4,
					px: { xs: 1, sm: 2, md: 6 },
					py: { xs: 3, md: 5 },
					boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
					width: "100%",
					maxWidth: 1200,
				}}
			>
				<Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" alignItems="center">
					{ALL_SKILLS.map((skill, i) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={skill.name} sx={{ display: "flex", justifyContent: "center" }}>
							<motion.div
								custom={i}
								initial="initial"
								whileInView="animate"
								variants={skillVariants}
								viewport={{ once: true }}
								whileHover={{
									scale: 1.08,
									boxShadow: "0 4px 24px 0 rgba(255,193,7,0.18)",
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
										background: "rgba(25, 118, 210, 0.13)",
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
		</Box>
	);
};
