import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { COLOR_WARNING } from "../../../utils/color.ts";

interface AboutQuoteProps {
	variants?: Variants;
}

export const AboutQuote: React.FC<AboutQuoteProps> = ({ variants }) => {
	return (
		<Box
			component={motion.div}
			variants={variants}
			whileHover={{ scale: 1.02, boxShadow: `0 8px 32px 0 rgba(0,180,255,0.2)` }}
			transition={{ type: "spring", stiffness: 300 }}
			sx={{
				p: { xs: 3, md: 4 },
				borderRadius: 4,
				background: "linear-gradient(135deg, rgba(20, 20, 30, 0.75) 0%, rgba(30, 30, 50, 0.65) 100%)",
				border: `2px solid ${COLOR_WARNING.main}`,
				textAlign: "center",
				backdropFilter: "blur(12px)",
				position: "relative",
				overflow: "hidden",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: "10%",
					fontSize: "6rem",
					opacity: 0.1,
					fontWeight: 800,
					lineHeight: 1,
					color: COLOR_WARNING.main,
				}}
			>
				"
			</Box>
			<Typography
				sx={{
					fontStyle: "italic",
					color: "#fff",
					letterSpacing: 0.5,
					fontWeight: 500,
					fontSize: { xs: "1.1rem", md: "1.3rem" },
					position: "relative",
					zIndex: 1,
					lineHeight: 1.6,
				}}
			>
				Stay <span style={{ color: COLOR_WARNING.main, fontWeight: 700 }}>curious</span>, keep{" "}
				<span style={{ color: "#00b4ff", fontWeight: 700 }}>learning</span>, and never stop{" "}
				<span style={{ color: "#4caf50", fontWeight: 700 }}>building</span>.
			</Typography>
		</Box>
	);
};
