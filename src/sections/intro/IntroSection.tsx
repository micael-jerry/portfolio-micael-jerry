import { Box, Grid } from "@mui/material";
import { Variants, motion } from "framer-motion";
import React from "react";
import "./IntroSection.css";
import { IntroProfileImage } from "./components/IntroProfileImage.tsx";
import { IntroText } from "./components/IntroText.tsx";

const textVariants: Variants = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.15 } },
	scrollButton: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const imageVariants: Variants = {
	initial: { scale: 0.8, opacity: 0 },
	animate: { scale: 1, opacity: 1, transition: { duration: 1.2, delay: 0.3 } },
};

export const IntroSection: React.FC = () => {
	return (
		<Box
			component="section"
			sx={{
				position: "relative",
				overflow: "hidden",
				py: { xs: 6, md: 10 },
				px: { xs: 2, md: 6 },
				minHeight: { xs: "auto", md: "80vh" },
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "transparent",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					inset: 0,
					zIndex: 0,
					background: "radial-gradient(ellipse at 60% 40%, rgba(0,180,255,0.18) 0%, transparent 70%)",
					animation: "gradientMove 8s ease-in-out infinite alternate",
				}}
			/>
			<Grid
				container
				spacing={6}
				alignItems="center"
				justifyContent="center"
				sx={{
					position: "relative",
					zIndex: 1,
					flexDirection: { xs: "column-reverse", md: "row" },
					textAlign: { xs: "center", md: "left" },
				}}
			>
				<Grid
					size={{ xs: 12, md: 6 }}
					component={motion.div}
					variants={textVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<IntroText textVariants={textVariants} />
				</Grid>
				<Grid
					size={{ xs: 12, md: 6 }}
					component={motion.div}
					variants={imageVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mb: { xs: 4, md: 0 },
					}}
				>
					<IntroProfileImage />
				</Grid>
			</Grid>
		</Box>
	);
};
