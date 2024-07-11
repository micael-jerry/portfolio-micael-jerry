import "./AboutSection.css";
import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import { IMAGES } from "../../assets";
import { ME } from "../../constants/user/me.ts";
import { useScreenSizeChecker } from "../../hooks/useScreenSizeChecker.ts";
import { motion, useInView, Variants } from "framer-motion";
import { COLOR_WARNING } from "../../utils/color.ts";

const variants: Variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggedChildren: 0.1,
		},
	},
};

export const AboutSection: React.FC = () => {
	const aboutSectionRef = useRef(null);
	const isInView = useInView(aboutSectionRef, { margin: "100px" });
	const checkScreenWidth = useScreenSizeChecker(899);

	return (
		<Box
			ref={aboutSectionRef}
			component={motion.div}
			variants={variants}
			initial={"initial"}
			animate={isInView && "animate"}
		>
			<Box display={"flex"} alignItems={"center"} justifyContent={"center"} component={motion.div} variants={variants}>
				<Grid container spacing={4} alignItems="center" component={motion.div} variants={variants}>
					{!checkScreenWidth && (
						<Grid item xs={12} md={6} component={motion.div} variants={variants}>
							<Card
								sx={{
									boxShadow: 0,
									background: "transparent",
								}}
								component={motion.div}
								variants={variants}
							>
								<img alt="contact illustrator" src={IMAGES.aboutMeImageIllustrator} id="about-me-illustrator" />
							</Card>
						</Grid>
					)}
					<Grid item xs={12} md={6} component={motion.div} variants={variants}>
						<Typography component={motion.h2} variant="h2" gutterBottom whileHover={{ color: COLOR_WARNING.dark }}>
							About Me
						</Typography>
						<Typography variant="h6" component="p" gutterBottom>
							Hello ! I'm {`${ME.name} ${ME.firstname}`}, a keen student who is currently in his third year at HEI and
							first year at 42, and is pursuing computer science studies with great enthusiasm.
						</Typography>
						<Typography variant="h6" component="p" gutterBottom>
							I have a diverse range of interests including web development and programming, which allow me to tackle
							various aspects of computer science with ease. I enjoy taking on creative challenges and designing
							innovative solutions to meet project needs.
						</Typography>
						<Typography variant="h6" component="p" gutterBottom>
							In my spare time, I like to explore new technologies, learn from online courses, and work on improving my
							skills through practical experiences. I believe in continuous learning and always strive to stay updated
							with the latest trends in the tech world.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
