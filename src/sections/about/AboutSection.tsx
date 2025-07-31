import { Box, Card, Grid, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { ME } from "../../../data/user/me.ts";
import { IMAGES } from "../../assets";
import { useScreenSizeChecker } from "../../hooks/useScreenSizeChecker.ts";
import { COLOR_WARNING } from "../../utils/color.ts";
import "./AboutSection.css";

const textVariants: Variants = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
};

const imageVariants: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 1.1, delay: 0.2 } },
};

export const AboutSection: React.FC = () => {
	const checkScreenWidth = useScreenSizeChecker(899);

	return (
		<Box
			sx={{
				position: "relative",
				py: { xs: 4, md: 8 },
				px: { xs: 1, md: 0 },
				overflowX: "hidden",
				maxWidth: "100%",
			}}
		>
			<motion.div
				style={{
					position: "absolute",
					left: "-20%",
					top: "10%",
					width: "140%",
					height: "80%",
					zIndex: 0,
					background: "radial-gradient(circle at 60% 40%, rgba(0,180,255,0.10) 0%, transparent 80%)",
					filter: "blur(32px)",
				}}
				animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
				transition={{ duration: 8, repeat: Infinity }}
			/>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{
					position: "relative",
					zIndex: 1,
					width: "100%",
				}}
			>
				<Grid
					container
					alignItems="center"
					component={motion.div}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					sx={{
						width: "100%",
						margin: 0,
					}}
				>
					{!checkScreenWidth && (
						<Grid
							item
							md={6}
							component={motion.div}
							variants={imageVariants}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								maxWidth: { xs: "100%" },
							}}
						>
							<Card
								sx={{
									boxShadow: 0,
									background: "transparent",
									width: { xs: "90vw", sm: 320, md: 380 },
									maxWidth: "100%",
									mx: "auto",
								}}
							>
								<img
									alt="contact illustrator"
									src={IMAGES.aboutMeImageIllustrator}
									id="about-me-illustrator"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
										background: "transparent",
										borderRadius: 16,
									}}
								/>
							</Card>
						</Grid>
					)}
					<Grid
						item
						xs={12}
						md={6}
						component={motion.div}
						variants={textVariants}
						sx={{
							width: "100%",
							maxWidth: { xs: "100%", md: "45%" },
						}}
					>
						<Box
							component={motion.div}
							whileHover={{ scale: 1.015, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
							transition={{ type: "spring", stiffness: 200 }}
							sx={{
								p: { xs: 3, md: 4 },
								borderRadius: 4,
								background: "rgba(20, 20, 30, 0.65)",
								backdropFilter: "blur(8px)",
								boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)",
								mb: 2,
							}}
						>
							<Typography
								component={motion.h2}
								variant="h2"
								gutterBottom
								whileHover={{ color: COLOR_WARNING.dark, scale: 1.04 }}
								transition={{ type: "spring", stiffness: 300 }}
								sx={{
									fontWeight: 700,
									fontSize: { xs: "2rem", md: "2.6rem" },
									mb: 2,
									letterSpacing: 1,
								}}
							>
								About Me
							</Typography>
							<motion.div variants={textVariants}>
								<Typography variant="h6" component="p" gutterBottom sx={{ mb: 2, color: "#bdbdbd" }}>
									Hello! I'm {`${ME.name} ${ME.firstname}`}, a keen student who has just graduated from HEI with a
									degree in computer science, and is currently studying at 42 Antananarivo.
								</Typography>
								<Typography variant="h6" component="p" gutterBottom sx={{ mb: 2, color: "#bdbdbd" }}>
									I have a diverse range of interests including web development and programming, which allow me to
									tackle various aspects of computer science with ease. I enjoy taking on creative challenges and
									designing innovative solutions to meet project needs.
								</Typography>
								<Typography variant="h6" component="p" gutterBottom sx={{ color: "#bdbdbd" }}>
									In my spare time, I like to explore new technologies, learn from online courses, and work on improving
									my skills through practical experiences. I believe in continuous learning and always strive to stay
									updated with the latest trends in the tech world.
								</Typography>
							</motion.div>
							<Box mt={4} sx={{ textAlign: "center" }}>
								<Typography
									variant="subtitle1"
									sx={{
										fontStyle: "italic",
										color: COLOR_WARNING.main,
										letterSpacing: 1,
										fontWeight: 500,
									}}
								>
									"Stay curious, keep learning, and never stop building."
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
