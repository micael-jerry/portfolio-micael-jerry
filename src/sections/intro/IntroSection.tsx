import React from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { IMAGES, LOGO } from "../../assets";
import "./IntroSection.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SectionIdEnum } from "../../types/sectionId/sectionId";
import { ME } from "../../constants/user/me.ts";
import { COLOR_WARNING } from "../../utils/color.ts";
import { Variants, motion } from "framer-motion";
import { useIsSmallWidthScreen } from "../../hooks/useIsSmallWidthScreen.ts";

const textVariants: Variants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1.5,
			staggedChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

export const IntroSection: React.FC = () => {
	const isSmall = useIsSmallWidthScreen();

	return (
		<Box display={"flex"} alignItems={"center"} pt={"6%"} pb={4}>
			<Grid container spacing={4} alignItems="center">
				<Grid
					item
					xs={12}
					md={6}
					component={motion.div}
					variants={textVariants}
					initial={"initial"}
					animate={"animate"}
				>
					<Box component={motion.div} variants={textVariants}>
						<Typography component={motion.h6} variant="h6" variants={textVariants}>
							Hello 👋, my name is
						</Typography>
						<Typography
							component={motion.h4}
							variant="h4"
							mb={1}
							fontWeight={500}
							color={COLOR_WARNING.dark}
							variants={textVariants}
						>
							{ME.firstname}
						</Typography>
						<Typography component={motion.h3} variant="h3" mb={3} variants={textVariants}>
							Computer science student and Web developer
						</Typography>
						<Typography component={motion.h5} variant="h5" variants={textVariants}>
							I am passionate about technology and I love to learn new things.
						</Typography>
					</Box>
					<Box component={motion.div} display={"flex"} gap={2} mt={2} variants={textVariants}>
						<AnchorLink href={`#${SectionIdEnum.ABOUT}`}>
							<Button
								component={motion.button}
								variant="contained"
								color="warning"
								size="large"
								variants={textVariants}
							>
								About
							</Button>
						</AnchorLink>
						<AnchorLink href={`#${SectionIdEnum.CONTACT}`}>
							<Button component={motion.button} variant="outlined" color="warning" size="large" variants={textVariants}>
								Contact
							</Button>
						</AnchorLink>
					</Box>
					{!isSmall && (
						<Box component={motion.div} mt={2} variants={textVariants}>
							<motion.img
								alt="scroll"
								src={LOGO.scroll}
								id="scroll-img"
								variants={textVariants}
								animate={"scrollButton"}
							/>
						</Box>
					)}
				</Grid>
				<Grid item xs={12} md={6}>
					<Card
						sx={{
							borderRadius: "5%",
							boxShadow: 4,
							backgroundColor: "transparent",
						}}
					>
						<img alt="jerry" src={IMAGES.jerryImg} id="jerry" />
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};
