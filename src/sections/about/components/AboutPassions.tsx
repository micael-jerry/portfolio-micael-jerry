import CodeIcon from "@mui/icons-material/Code";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { COLOR_WARNING } from "../../../utils/color.ts";

interface AboutPassionsProps {
	variants?: Variants;
}

export const AboutPassions: React.FC<AboutPassionsProps> = ({ variants }) => {
	const passions = [
		{
			icon: <CodeIcon sx={{ color: COLOR_WARNING.main, fontSize: 28 }} />,
			title: "Elegant Coding",
			description: "Crafting clean, scalable, and maintainable digital experiences.",
		},
		{
			icon: <LightbulbIcon sx={{ color: "#00b4ff", fontSize: 28 }} />,
			title: "Problem Solving",
			description: "Turning complex requirements into innovative, real-world solutions.",
		},
		{
			icon: <RocketLaunchIcon sx={{ color: "#4caf50", fontSize: 28 }} />,
			title: "Lifelong Learning",
			description: "Constantly pushing skills, exploring emerging tech, and staying ahead.",
		},
	];

	return (
		<Box
			component={motion.div}
			variants={variants}
			whileHover={{ scale: 1.02, boxShadow: "0 12px 40px 0 rgba(255,193,7,0.15)" }}
			transition={{ type: "spring", stiffness: 200 }}
			sx={{
				p: { xs: 3, md: 4 },
				borderRadius: 4,
				background: "linear-gradient(135deg, rgba(20, 20, 30, 0.75) 0%, rgba(30, 30, 50, 0.65) 100%)",
				backdropFilter: "blur(12px)",
				boxShadow: "0 4px 24px 0 rgba(255,193,7,0.08)",
				border: "1px solid rgba(255,193,7,0.1)",
				position: "relative",
				overflow: "hidden",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
					What Drives Me
				</Typography>
				<Typography variant="body2" sx={{ color: "#9e9e9e" }}>
					My passion lies in bridging the gap between design and intricate logic.
				</Typography>
			</Box>

			<Box display="flex" flexDirection="column" gap={3}>
				{passions.map((passion) => (
					<Box key={passion.title} display="flex" gap={2} alignItems="flex-start">
						<Box
							sx={{
								p: 1.5,
								borderRadius: 2,
								background: "rgba(255,255,255,0.03)",
								border: "1px solid rgba(255,255,255,0.08)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{passion.icon}
						</Box>
						<Box>
							<Typography variant="body1" sx={{ color: "#e0e0e0", fontWeight: 600, mb: 0.5 }}>
								{passion.title}
							</Typography>
							<Typography variant="body2" sx={{ color: "#9e9e9e", lineHeight: 1.5 }}>
								{passion.description}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};
