import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { SkillCard } from "../../components/SkillCard/SkillCard";
import {
	BACK_END_SKILLS,
	FRONT_END_SKILLS,
	OTHER_SKILLS,
} from "../../constants/skills";

export const SkillsSection: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "90vh",
			}}
		>
			<Typography variant="h2" align="center" gutterBottom>
				Skills
			</Typography>
			<Grid container justifyContent={"center"} spacing={3}>
				<Grid item xs={12} md={4}>
					<SkillCard title="Front-End" skills={FRONT_END_SKILLS} />
				</Grid>
				<Grid item xs={12} md={4}>
					<SkillCard title="Back-End" skills={BACK_END_SKILLS} />
				</Grid>
				<Grid item xs={12} md={4}>
					<SkillCard title="Other" skills={OTHER_SKILLS} />
				</Grid>
			</Grid>
		</Box>
	);
};
