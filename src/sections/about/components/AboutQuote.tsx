import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { COLOR_WARNING } from "../../../utils/color.ts";

export const AboutQuote: React.FC = () => {
	return (
		<Box
			component={motion.div}
			whileHover={{ scale: 1.02, boxShadow: `0 8px 32px 0 rgba(0,180,255,0.2)` }}
			transition={{ type: "spring", stiffness: 300 }}
			sx={{
				p: 3,
				borderRadius: 3,
				background: "rgba(0,180,255,0.05)",
				border: `2px solid ${COLOR_WARNING.main}`,
				textAlign: "center",
				backdropFilter: "blur(8px)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: -2,
					left: "10%",
					fontSize: "3rem",
					opacity: 0.1,
					fontWeight: 700,
				}}
			>
				"
			</Box>
			<Typography
				sx={{
					fontStyle: "italic",
					color: COLOR_WARNING.main,
					letterSpacing: 0.5,
					fontWeight: 600,
					fontSize: "1.05rem",
					position: "relative",
					zIndex: 1,
				}}
			>
				Stay curious, keep learning, and never stop building.
			</Typography>
		</Box>
	);
};
