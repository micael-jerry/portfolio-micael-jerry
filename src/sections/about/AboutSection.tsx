import { Box, Card, Grid, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { ME } from "../../../data/user/me.ts";
import { PROJECTS } from "../../../data/user/projects.ts";
import { ALL_SKILLS } from "../../../data/user/skills.ts";
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

const statsVariants: Variants = {
	initial: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
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
						<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
							{/* Main Content Card */}
							<Box
								component={motion.div}
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
								{/* Animated Background Gradient */}
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
											mb: 3,
										}}
									/>

									<motion.div variants={textVariants}>
										<Typography
											variant="h6"
											component="p"
											gutterBottom
											sx={{
												mb: 2.5,
												color: "#e0e0e0",
												lineHeight: 1.7,
												fontWeight: 500,
											}}
										>
											Hey there! I'm{" "}
											<span style={{ fontWeight: 700, color: COLOR_WARNING.main }}>{`${ME.firstname} ${ME.name}`}</span>
											, a passionate developer and computer science graduate from{" "}
											<span style={{ color: COLOR_WARNING.light }}>HEI</span> currently pursuing advanced training at{" "}
											<span style={{ color: COLOR_WARNING.light }}>42 Antananarivo</span>.
										</Typography>
										<Typography
											variant="h6"
											component="p"
											gutterBottom
											sx={{
												mb: 2.5,
												color: "#d0d0d0",
												lineHeight: 1.7,
											}}
										>
											My passion lies in crafting elegant digital experiences through web development and exploring the
											depths of computer science. I thrive on solving complex problems and turning creative visions into
											innovative, real-world solutions.
										</Typography>
										<Typography
											variant="h6"
											component="p"
											sx={{
												color: "#c0c0c0",
												lineHeight: 1.7,
											}}
										>
											When I'm not coding, you'll find me diving into emerging technologies, conquering challenging
											courses, and constantly pushing my skills to the next level. I'm a firm believer in lifelong
											learning and staying ahead of industry trends.
										</Typography>
									</motion.div>
								</Box>
							</Box>

							{/* Stats Cards */}
							<Grid container spacing={2}>
								{[
									{ label: "Projects", value: PROJECTS.length },
									{ label: "Skills", value: ALL_SKILLS.length },
									{ label: "Experience", value: "1+ yr" },
								].map((stat, idx) => (
									<Grid item xs={4} key={idx}>
										<motion.div
											variants={statsVariants}
											whileHover={{ y: -8, boxShadow: `0 12px 32px 0 rgba(0,180,255,0.25)` }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<Box
												sx={{
													p: 2.5,
													borderRadius: 3,
													background: "linear-gradient(135deg, rgba(0,180,255,0.1) 0%, rgba(0,180,255,0.05) 100%)",
													border: "1px solid rgba(0,180,255,0.2)",
													textAlign: "center",
													backdropFilter: "blur(8px)",
													cursor: "pointer",
													transition: "all 0.3s ease",
												}}
											>
												<Typography
													sx={{
														fontSize: { xs: "1.8rem", md: "2.2rem" },
														fontWeight: 700,
														background: `linear-gradient(135deg, ${COLOR_WARNING.main} 0%, #00c9ff 100%)`,
														backgroundClip: "text",
														WebkitBackgroundClip: "text",
														WebkitTextFillColor: "transparent",
														mb: 0.5,
													}}
												>
													{stat.value}
												</Typography>
												<Typography
													sx={{
														fontSize: "0.85rem",
														color: "#9e9e9e",
														fontWeight: 600,
														letterSpacing: 0.5,
													}}
												>
													{stat.label}
												</Typography>
											</Box>
										</motion.div>
									</Grid>
								))}
							</Grid>

							{/* Quote Section */}
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
										color: COLOR_WARNING.light,
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
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
