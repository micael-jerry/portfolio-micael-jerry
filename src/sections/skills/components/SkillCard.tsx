import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { SkillType } from "../../../data/user/skills.ts";

interface SkillCardProps {
	skill: SkillType;
	i: number;
	variants: Variants;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, i, variants }) => {
	return (
		<motion.div
			custom={i}
			initial="initial"
			whileInView="animate"
			variants={variants}
			viewport={{ once: true }}
			whileHover={{ y: -4 }}
			whileTap={{ scale: 0.97 }}
			style={{ width: "100%" }}
		>
			<Box
				sx={{
					p: 2,
					borderRadius: 3,
					bgcolor: "background.paper",
					border: "1px solid",
					borderColor: "divider",
					transition: "border-color 0.2s ease, box-shadow 0.2s ease",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 1.2,
					width: "100%",
					minHeight: 104,
					cursor: "pointer",
					boxShadow: (theme) =>
						theme.palette.mode === "light" ? "0 1px 2px 0 rgba(0, 0, 0, 0.03)" : "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
					"&:hover": {
						borderColor: "text.primary",
						boxShadow: (theme) =>
							theme.palette.mode === "light"
								? "0 6px 16px -2px rgba(0, 0, 0, 0.06)"
								: "0 6px 16px -2px rgba(0, 0, 0, 0.35)",
					},
				}}
			>
				<Box
					sx={{
						width: 40,
						height: 40,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						bgcolor: "action.hover",
						borderRadius: 2,
						p: 0.6,
					}}
				>
					<img
						src={skill.logo}
						alt={skill.name}
						loading="lazy"
						style={{
							width: 28,
							height: 28,
							objectFit: "contain",
						}}
					/>
				</Box>
				<Typography
					sx={{
						fontWeight: 600,
						fontSize: "0.85rem",
						color: "text.primary",
						textAlign: "center",
						letterSpacing: "0.01em",
					}}
				>
					{skill.name}
				</Typography>
			</Box>
		</motion.div>
	);
};
