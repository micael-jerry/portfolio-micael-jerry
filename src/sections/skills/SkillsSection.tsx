import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { SkillCard } from "../../components/SkillCard/SkillCard";
import { BACK_END_SKILLS, FRONT_END_SKILLS, OTHER_SKILLS } from "../../constants/user/skills.ts";
import { motion } from "framer-motion";
import { COLOR_WARNING } from "../../utils/color.ts";

const SKILLS = [
	{
		key: "front-end",
		component: <SkillCard title="Front-End" skills={FRONT_END_SKILLS} />,
	},
	{
		key: "back-end",
		component: <SkillCard title="Back-End" skills={BACK_END_SKILLS} />,
	},
	{
		key: "other",
		component: <SkillCard title="Other" skills={OTHER_SKILLS} />,
	},
];

export const SkillsSection: React.FC = () => {
	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} width={"100%"} p={5}>
			<Typography component={motion.h2} variant="h2" gutterBottom whileHover={{ color: COLOR_WARNING.dark }}>
				Skills
			</Typography>
			<Grid container spacing={2} justifyContent={"center"}>
				{SKILLS.map(({ key, component }) => (
					<Grid item xs={12} sm={6} md={4} key={key}>
						{component}
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
