import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../../../data/user/projects.ts";
import { ALL_SKILLS } from "../../../data/user/skills.ts";
import { COLOR_WARNING } from "../../../utils/color.ts";

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
					whileHover={{ scale: 1.05, boxShadow: `0 12px 32px 0 rgba(0,180,255,0.25)` }}
					transition={{ type: "spring", stiffness: 300 }}
					sx={{
						p: 2.5,
						borderRadius: 4,
						background: "linear-gradient(135deg, rgba(0,180,255,0.1) 0%, rgba(0,180,255,0.05) 100%)",
						border: "1px solid rgba(0,180,255,0.2)",
						textAlign: "center",
						backdropFilter: "blur(8px)",
						cursor: "pointer",
						flex: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", md: "2.4rem" },
							fontWeight: 800,
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
							fontSize: "0.9rem",
							color: "#9e9e9e",
							fontWeight: 600,
							letterSpacing: 0.5,
						}}
					>
						{stat.label}
					</Typography>
				</Box>
			))}
		</Box>
	);
};
