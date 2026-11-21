import { Box, Grid, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { SkillType } from "../../../data/user/skills.ts";
import { cardSx } from "../../../utils/styles.ts";
import { SkillCard } from "./SkillCard.tsx";

interface SkillCategoryProps {
	category: string;
	skills: SkillType[];
	categoryIndex: number;
	skillVariants: Variants;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, categoryIndex, skillVariants }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
			viewport={{ once: true }}
		>
			<Box
				sx={{
					...cardSx,
					p: { xs: 2.5, sm: 3.5, md: 4 },
				}}
			>
				<Typography
					variant="h6"
					sx={{
						fontWeight: 700,
						fontSize: "1.1rem",
						mb: 3,
						color: "text.primary",
						letterSpacing: "-0.01em",
					}}
				>
					{category}
				</Typography>
				<Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5 }} alignItems="stretch">
					{skills.map((skill, i) => (
						<Grid
							size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
							key={skill.name}
							sx={{ display: "flex", justifyContent: "center" }}
						>
							<SkillCard skill={skill} i={i} variants={skillVariants} />
						</Grid>
					))}
				</Grid>
			</Box>
		</motion.div>
	);
};
