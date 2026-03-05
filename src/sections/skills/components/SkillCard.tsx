import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { SkillType } from "../../../data/user/skills.ts";

interface SkillCardProps {
	skill: SkillType;
	i: number;
	colors: { bg: string; border: string; accent: string };
	variants: Variants;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, i, colors, variants }) => {
	return (
		<motion.div
			custom={i}
			initial="initial"
			whileInView="animate"
			variants={variants}
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
						loading="lazy"
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
	);
};
