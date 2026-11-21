import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../../../data/user/projects.ts";
import { ALL_SKILLS } from "../../../data/user/skills.ts";
import { cardSx } from "../../../utils/styles.ts";

interface AboutStatsProps {
	variants?: Variants;
}

export const AboutStats: React.FC<AboutStatsProps> = ({ variants }) => {
	const { t } = useTranslation();

	const stats = [
		{ label: t("about.stats.projects"), value: PROJECTS.length },
		{ label: t("about.stats.skills"), value: ALL_SKILLS.length },
		{ label: t("about.stats.experience_label"), value: t("about.stats.experience") },
	];

	return (
		<Box
			component={motion.div}
			variants={variants}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				height: "100%",
				justifyContent: "space-between",
			}}
		>
			{stats.map((stat) => (
				<Box
					key={stat.label}
					component={motion.div}
					whileHover={{ y: -4 }}
					transition={{ duration: 0.2 }}
					sx={{
						...cardSx,
						p: 2.5,
						textAlign: "center",
						flex: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", md: "2.3rem" },
							fontWeight: 800,
							color: "text.primary",
							letterSpacing: "-0.03em",
							lineHeight: 1.1,
							mb: 0.5,
						}}
					>
						{stat.value}
					</Typography>
					<Typography
						sx={{
							fontSize: "0.82rem",
							color: "text.secondary",
							fontWeight: 600,
							letterSpacing: "0.02em",
						}}
					>
						{stat.label}
					</Typography>
				</Box>
			))}
		</Box>
	);
};
