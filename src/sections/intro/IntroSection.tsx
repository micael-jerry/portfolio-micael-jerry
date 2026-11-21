import { Box, Grid } from "@mui/material";
import { Variants, motion } from "framer-motion";
import React from "react";
import "./IntroSection.css";
import { IntroProfileImage } from "./components/IntroProfileImage.tsx";
import { IntroText } from "./components/IntroText.tsx";

const textVariants: Variants = {
	initial: { opacity: 0, y: 24 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } },
	scrollButton: {
		opacity: 0,
		y: 16,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const imageVariants: Variants = {
	initial: { scale: 0.92, opacity: 0 },
	animate: { scale: 1, opacity: 1, transition: { duration: 0.9, delay: 0.15 } },
};

export const IntroSection: React.FC = () => {
	return (
		<Box
			component="section"
			sx={{
				position: "relative",
				py: { xs: 6, md: 10 },
				minHeight: { xs: "auto", md: "78vh" },
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
			}}
		>
			<Grid
				container
				spacing={{ xs: 4, md: 6 }}
				alignItems="center"
				justifyContent="center"
				sx={{
					flexDirection: { xs: "column-reverse", md: "row" },
					textAlign: { xs: "center", md: "left" },
				}}
			>
				<Grid
					size={{ xs: 12, md: 7 }}
					component={motion.div}
					variants={textVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<IntroText textVariants={textVariants} />
				</Grid>
				<Grid
					size={{ xs: 12, md: 5 }}
					component={motion.div}
					variants={imageVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<IntroProfileImage />
				</Grid>
			</Grid>
		</Box>
	);
};
