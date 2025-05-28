import React from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { IMAGES, LOGO } from "../../assets";
import "./IntroSection.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SectionIdEnum } from "../../types/sectionId/sectionId";
import { ME } from "../../constants/user/me.ts";
import { COLOR_WARNING } from "../../utils/color.ts";
import { Variants, motion } from "framer-motion";
import { useIsSmallScreen } from "../../hooks/useIsSmallScreen.ts";

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
	const isSmall = useIsSmallScreen();

	return (
		<Box
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
					item
					xs={12}
					md={6}
					component={motion.div}
					variants={textVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<Box component={motion.div} variants={textVariants}>
						<Typography
							component={motion.h6}
							variant="h6"
							variants={textVariants}
							sx={{ color: "#b3e5fc", fontWeight: 400, mb: 1, letterSpacing: 1 }}
						>
							Hello 👋, my name is
						</Typography>
						<Typography
							component={motion.h2}
							variant="h2"
							mb={1}
							fontWeight={700}
							color={COLOR_WARNING.dark}
							variants={textVariants}
							sx={{
								fontSize: { xs: "2.2rem", md: "3.2rem" },
								lineHeight: 1.1,
								letterSpacing: 1,
								textShadow: "0 2px 16px rgba(255,193,7,0.18)",
							}}
						>
							{ME.firstname}
						</Typography>
						<Typography
							component={motion.h3}
							variant="h4"
							mb={2}
							fontWeight={500}
							variants={textVariants}
							sx={{
								color: "#fff",
								fontSize: { xs: "1.2rem", md: "2rem" },
								lineHeight: 1.2,
								mb: 2,
							}}
						>
							Computer science student & Web developer
						</Typography>
						<Typography
							component={motion.h5}
							variant="h6"
							variants={textVariants}
							sx={{
								color: "#bdbdbd",
								fontWeight: 400,
								fontSize: { xs: "1rem", md: "1.2rem" },
								mb: 3,
							}}
						>
							I am passionate about technology and I love to learn new things.
						</Typography>
					</Box>
					<Box
						component={motion.div}
						display="flex"
						gap={2}
						mt={3}
						justifyContent={{ xs: "center", md: "flex-start" }}
						variants={textVariants}
					>
						<AnchorLink href={`#${SectionIdEnum.ABOUT}`}>
							<Button
								component={motion.button}
								variant="contained"
								color="warning"
								size="large"
								variants={textVariants}
								sx={{
									borderRadius: 8,
									boxShadow: "0 4px 24px 0 rgba(255,193,7,0.18)",
									px: 4,
									fontWeight: 600,
									fontSize: "1.1rem",
								}}
							>
								About
							</Button>
						</AnchorLink>
						<AnchorLink href={`#${SectionIdEnum.CONTACT}`}>
							<Button
								component={motion.button}
								variant="outlined"
								color="warning"
								size="large"
								variants={textVariants}
								sx={{
									borderRadius: 8,
									px: 4,
									fontWeight: 600,
									fontSize: "1.1rem",
									borderWidth: 2,
								}}
							>
								Contact
							</Button>
						</AnchorLink>
					</Box>
					{!isSmall && (
						<Box component={motion.div} mt={4} variants={textVariants}>
							<motion.img
								alt="scroll"
								src={LOGO.scroll}
								id="scroll-img"
								variants={textVariants}
								animate="scrollButton"
								style={{ margin: "0 auto" }}
							/>
						</Box>
					)}
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
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
					<Box
						sx={{
							position: "relative",
							width: { xs: 220, sm: 260, md: 320 },
							height: { xs: 220, sm: 260, md: 320 },
							mx: "auto",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								inset: -18,
								borderRadius: "50%",
								background: "radial-gradient(circle, rgba(255,193,7,0.25) 0%, transparent 70%)",
								filter: "blur(8px)",
								animation: "haloPulse 3s ease-in-out infinite alternate",
								zIndex: 1,
							}}
						/>
						<Card
							sx={{
								borderRadius: "50%",
								boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
								backgroundColor: "rgba(30,30,30,0.7)",
								overflow: "hidden",
								width: "100%",
								height: "100%",
								zIndex: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
							elevation={6}
						>
							<img
								alt="jerry"
								src={IMAGES.jerryImg}
								id="jerry"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "50%",
									border: "4px solid rgba(255,193,7,0.18)",
								}}
							/>
						</Card>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
