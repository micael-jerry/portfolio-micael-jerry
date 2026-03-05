import { Box, Grid, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { PROJECTS } from "../../../../data/user/projects.ts";
import { ALL_SKILLS } from "../../../../data/user/skills.ts";
import { COLOR_WARNING } from "../../../utils/color.ts";

const statsVariants: Variants = {
	initial: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export const AboutStats: React.FC = () => {
	return (
		<Grid container spacing={2}>
			{[
				{ label: "Projects", value: PROJECTS.length },
				{ label: "Skills", value: ALL_SKILLS.length },
				{ label: "Experience", value: "1+ yr" },
			].map((stat) => (
				<Grid size={{ xs: 4 }} key={stat.label}>
					<motion.div
						variants={statsVariants}
						whileHover={{ y: -8, boxShadow: `0 12px 32px 0 rgba(0,180,255,0.25)` }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<Box
							sx={{
								p: 2.5,
								borderRadius: 3,
								background: "linear-gradient(135deg, rgba(0,180,255,0.1) 0%, rgba(0,180,255,0.05) 100%)",
								border: "1px solid rgba(0,180,255,0.2)",
								textAlign: "center",
								backdropFilter: "blur(8px)",
								cursor: "pointer",
								transition: "all 0.3s ease",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "1.8rem", md: "2.2rem" },
									fontWeight: 700,
									background: `linear-gradient(135deg, ${COLOR_WARNING.main} 0%, #00c9ff 100%)`,
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									mb: 0.5,
								}}
							>
								{stat.value}
							</Typography>
							<Typography
								sx={{
									fontSize: "0.85rem",
									color: "#9e9e9e",
									fontWeight: 600,
									letterSpacing: 0.5,
								}}
							>
								{stat.label}
							</Typography>
						</Box>
					</motion.div>
				</Grid>
			))}
		</Grid>
	);
};
