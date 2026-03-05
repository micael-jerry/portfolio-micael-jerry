import { Box, Card, Grid, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { ME } from "../../../data/user/me.ts";
import { IMAGES } from "../../assets";
import { useScreenSizeChecker } from "../../hooks/useScreenSizeChecker.ts";
import { COLOR_WARNING } from "../../utils/color.ts";
import "./AboutSection.css";
import { AboutEducation } from "./components/AboutEducation.tsx";
import { AboutPassions } from "./components/AboutPassions.tsx";
import { AboutQuote } from "./components/AboutQuote.tsx";
import { AboutStats } from "./components/AboutStats.tsx";

const containerVariants: Variants = {
	initial: {},
	animate: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
};

const imageVariants: Variants = {
	initial: { opacity: 0, scale: 0.9 },
	animate: { opacity: 1, scale: 1, transition: { duration: 1.1, delay: 0.2 } },
};

export const AboutSection: React.FC = () => {
	const checkScreenWidth = useScreenSizeChecker(899);

	return (
		<Box
			component="section"
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
					spacing={{ xs: 3, md: 4 }}
					alignItems="stretch"
					component={motion.div}
					variants={containerVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, margin: "-100px" }}
					sx={{ width: "100%", margin: 0 }}
				>
					{/* Left Column (Image) - visible only on larger screens */}
					{!checkScreenWidth && (
						<Grid
							size={{ md: 5 }}
							component={motion.div}
							variants={imageVariants}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Card
								sx={{
									boxShadow: 0,
									background: "transparent",
									width: "100%",
									maxWidth: 420,
									mx: "auto",
								}}
							>
								<img
									loading="lazy"
									alt="Micael Jerry Fidimalala - About Me Illustration"
									src={IMAGES.aboutMeImageIllustrator}
									id="about-me-illustrator"
									style={{
										width: "100%",
										height: "auto",
										objectFit: "contain",
										background: "transparent",
										borderRadius: 16,
									}}
								/>
							</Card>
						</Grid>
					)}

					{/* Right Column (Bento Grid) */}
					<Grid size={{ xs: 12, md: 7 }}>
						<Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
							{/* Large Header Box (Who Am I) */}
							<Grid size={{ xs: 12 }}>
								<Box
									component={motion.div}
									variants={itemVariants}
									whileHover={{ scale: 1.015, boxShadow: "0 12px 40px 0 rgba(0,180,255,0.15)" }}
									transition={{ type: "spring", stiffness: 200 }}
									sx={{
										p: { xs: 3, md: 4 },
										borderRadius: 4,
										background: "linear-gradient(135deg, rgba(20, 20, 30, 0.75) 0%, rgba(30, 30, 50, 0.65) 100%)",
										backdropFilter: "blur(12px)",
										boxShadow: "0 4px 24px 0 rgba(0,180,255,0.08)",
										border: "1px solid rgba(0,180,255,0.1)",
										position: "relative",
										overflow: "hidden",
									}}
								>
									<motion.div
										style={{
											position: "absolute",
											top: -100,
											right: -100,
											width: 200,
											height: 200,
											background: "radial-gradient(circle, rgba(0,180,255,0.1) 0%, transparent 70%)",
											zIndex: 0,
										}}
										animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
										transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
									/>
									<Box sx={{ position: "relative", zIndex: 1 }}>
										<Typography
											component={motion.h2}
											variant="h2"
											gutterBottom
											whileHover={{ color: COLOR_WARNING.dark, x: 4 }}
											transition={{ type: "spring", stiffness: 300 }}
											sx={{
												fontWeight: 800,
												fontSize: { xs: "2.2rem", md: "2.8rem" },
												mb: 1,
												letterSpacing: 1.5,
												background: `linear-gradient(135deg, ${COLOR_WARNING.main} 0%, #00c9ff 100%)`,
												backgroundClip: "text",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor: "transparent",
											}}
										>
											About Me
										</Typography>
										<Box
											sx={{
												height: 3,
												width: 60,
												background: `linear-gradient(90deg, ${COLOR_WARNING.main} 0%, transparent 100%)`,
												borderRadius: 2,
												mb: 2,
											}}
										/>
										<Typography variant="h6" component="p" sx={{ color: "#e0e0e0", lineHeight: 1.7, fontWeight: 500 }}>
											{"Hey there! I'm "}
											<span style={{ fontWeight: 700, color: COLOR_WARNING.main }}>{`${ME.firstname} ${ME.name}`}</span>
											{
												", a passionate software engineer blending design and logic to create elegant digital experiences."
											}
										</Typography>
									</Box>
								</Box>
							</Grid>

							{/* Education and Stats Row */}
							<Grid size={{ xs: 12, sm: 8 }}>
								<AboutEducation variants={itemVariants} />
							</Grid>
							<Grid size={{ xs: 12, sm: 4 }}>
								<AboutStats variants={itemVariants} />
							</Grid>

							{/* Passions and Quote Row */}
							<Grid size={{ xs: 12, md: 7 }}>
								<AboutPassions variants={itemVariants} />
							</Grid>
							<Grid size={{ xs: 12, md: 5 }}>
								<AboutQuote variants={itemVariants} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
