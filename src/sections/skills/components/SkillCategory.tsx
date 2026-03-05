import { Box, Grid, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { SkillType } from "../../../../data/user/skills.ts";
import { SkillCard } from "./SkillCard.tsx";

interface SkillCategoryProps {
	category: string;
	skills: SkillType[];
	categoryIndex: number;
	colors: { bg: string; border: string; accent: string };
	skillVariants: Variants;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({
	category,
	skills,
	categoryIndex,
	colors,
	skillVariants,
}) => {
	return (
		<motion.div
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
							size={{ xs: 12, sm: 6, md: "auto" }}
							key={skill.name}
							sx={{ display: "flex", justifyContent: "center" }}
						>
							<SkillCard skill={skill} i={i} colors={colors} variants={skillVariants} />
						</Grid>
					))}
				</Grid>
			</Box>
		</motion.div>
	);
};
