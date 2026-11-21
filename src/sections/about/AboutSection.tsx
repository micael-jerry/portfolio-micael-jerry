import { Box, Card, Grid, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { IMAGES } from "../../assets";
import { ME } from "../../data/user/me.ts";
import { useScreenSizeChecker } from "../../hooks/useScreenSizeChecker.ts";
import { cardSx } from "../../utils/styles.ts";
import "./AboutSection.css";
import { AboutEducation } from "./components/AboutEducation.tsx";
import { AboutPassions } from "./components/AboutPassions.tsx";
import { AboutQuote } from "./components/AboutQuote.tsx";
import { AboutStats } from "./components/AboutStats.tsx";

const containerVariants: Variants = {
	initial: {},
	animate: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants: Variants = {
	initial: { opacity: 0, scale: 0.95 },
	animate: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.15 } },
};

export const AboutSection: React.FC = () => {
	const checkScreenWidth = useScreenSizeChecker(899);
	const { t } = useTranslation();

	return (
		<Box
			component="section"
			sx={{
				position: "relative",
				py: { xs: 4, md: 8 },
				width: "100%",
			}}
		>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{ position: "relative", zIndex: 1, width: "100%" }}
			>
				<Grid
					container
					spacing={{ xs: 3, md: 4 }}
					alignItems="stretch"
					component={motion.div}
					variants={containerVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, margin: "-60px" }}
					sx={{ width: "100%", margin: 0 }}
				>
					{/* Left Column (Illustration) - visible on md+ */}
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
									boxShadow: "none",
									bgcolor: "transparent",
									border: "none",
									width: "100%",
									maxWidth: 420,
									mx: "auto",
								}}
							>
								<img
									loading="lazy"
									alt="Micael Jerry Fidimalala - About Me"
									src={IMAGES.aboutMeImageIllustrator}
									id="about-me-illustrator"
									style={{
										width: "100%",
										height: "auto",
										objectFit: "contain",
									}}
								/>
							</Card>
						</Grid>
					)}

					{/* Right Column (Bento Grid) */}
					<Grid size={{ xs: 12, md: 7 }}>
						<Grid container spacing={{ xs: 2.5, md: 3 }} alignItems="stretch">
							{/* Large Bio Card */}
							<Grid size={{ xs: 12 }}>
								<Box
									component={motion.div}
									variants={itemVariants}
									sx={{
										...cardSx,
										p: { xs: 3, md: 4 },
										position: "relative",
									}}
								>
									<Typography
										component="h2"
										variant="h2"
										sx={{
											fontWeight: 800,
											fontSize: { xs: "2rem", md: "2.5rem" },
											mb: 1.5,
											letterSpacing: "-0.025em",
											color: "text.primary",
										}}
									>
										{t("about.heading")}
									</Typography>
									<Typography
										variant="body1"
										component="p"
										sx={{
											color: "text.secondary",
											lineHeight: 1.7,
											fontSize: { xs: "1.02rem", md: "1.1rem" },
										}}
									>
										{t("about.bio_prefix")}
										<Box component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
											{`${ME.firstname} ${ME.name}`}
										</Box>
										{t("about.bio_suffix")}
									</Typography>
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
