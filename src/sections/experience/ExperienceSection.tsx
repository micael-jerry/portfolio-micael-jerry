import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { EXPERIENCES } from "../../data/user/experience.ts";
import { cardSx } from "../../utils/styles.ts";
import "./ExperienceSection.css";

export const ExperienceSection: React.FC = () => {
	const { t } = useTranslation();
	const theme = useTheme();

	return (
		<Box
			component="section"
			width="100%"
			py={{ xs: 6, md: 8 }}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{/* Section Header */}
			<Typography
				component={motion.h2}
				variant="h2"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				sx={{
					fontWeight: 800,
					fontSize: { xs: "2rem", md: "2.5rem" },
					mb: 1.5,
					letterSpacing: "-0.025em",
					color: "text.primary",
					textAlign: "center",
				}}
			>
				{t("experience.heading")}
			</Typography>
			<Typography
				component={motion.p}
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				viewport={{ once: true }}
				sx={{
					color: "text.secondary",
					fontSize: { xs: "1rem", md: "1.1rem" },
					mb: 6,
					maxWidth: 720,
					textAlign: "center",
					lineHeight: 1.6,
				}}
			>
				{t("experience.subtitle")}
			</Typography>

			{/* Timeline Cards */}
			<Box sx={{ width: "100%", maxWidth: 1000, display: "flex", flexDirection: "column", gap: 3.5 }}>
				{EXPERIENCES.map((exp, index) => {
					const isCurrent = exp.isCurrent;

					return (
						<Box
							key={exp.id}
							component={motion.div}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -4 }}
							sx={{
								...cardSx,
								p: { xs: 3, md: 4.5 },
								position: "relative",
								border: isCurrent
									? `1.5px solid ${theme.palette.mode === "light" ? "rgba(37, 99, 235, 0.4)" : "rgba(59, 130, 246, 0.4)"}`
									: undefined,
							}}
						>
							{/* Header Row */}
							<Box
								display="flex"
								flexDirection={{ xs: "column", sm: "row" }}
								justifyContent="space-between"
								alignItems={{ xs: "flex-start", sm: "center" }}
								gap={1.5}
								mb={2}
							>
								<Box display="flex" alignItems="center" gap={1.5}>
									<Box
										sx={{
											p: 1.2,
											borderRadius: 3,
											bgcolor: isCurrent
												? theme.palette.mode === "light"
													? "rgba(37, 99, 235, 0.1)"
													: "rgba(59, 130, 246, 0.15)"
												: "action.hover",
											color: isCurrent ? "primary.main" : "text.primary",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<WorkOutlineIcon sx={{ fontSize: 22 }} />
									</Box>
									<Box>
										<Typography
											variant="h5"
											sx={{
												fontWeight: 800,
												fontSize: { xs: "1.25rem", md: "1.45rem" },
												color: "text.primary",
												letterSpacing: "-0.015em",
											}}
										>
											{t(exp.roleKey)}
										</Typography>
										<Typography
											variant="subtitle2"
											sx={{
												color: "text.secondary",
												fontWeight: 600,
												fontSize: "0.95rem",
											}}
										>
											{t(exp.entityKey)}
										</Typography>
									</Box>
								</Box>

								{/* Period & Status Chips */}
								<Box display="flex" flexWrap="wrap" gap={0.8} alignItems="center">
									{isCurrent && (
										<Chip
											label={t("experience.current_badge")}
											size="small"
											sx={{
												bgcolor: theme.palette.mode === "light" ? "rgba(5, 150, 105, 0.1)" : "rgba(5, 150, 105, 0.2)",
												color: "#059669",
												border: "1px solid rgba(5, 150, 105, 0.3)",
												fontWeight: 700,
												fontSize: "0.75rem",
												borderRadius: 9999,
											}}
										/>
									)}
									<Chip
										label={t(exp.periodKey)}
										size="small"
										sx={{
											bgcolor: "action.hover",
											color: "text.primary",
											border: "1px solid",
											borderColor: "divider",
											fontWeight: 600,
											fontSize: "0.75rem",
											borderRadius: 9999,
										}}
									/>
								</Box>
							</Box>

							{/* Location & Domain Metadata */}
							<Box display="flex" flexWrap="wrap" gap={2} mb={2.5}>
								<Box display="flex" alignItems="center" gap={0.5} sx={{ color: "text.secondary" }}>
									<LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
									<Typography variant="caption" sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
										{t(exp.locationKey)}
									</Typography>
								</Box>
								<Chip
									label={t(exp.domainKey)}
									size="small"
									sx={{
										height: 22,
										bgcolor: "transparent",
										border: "1px solid",
										borderColor: "divider",
										color: "text.secondary",
										fontSize: "0.72rem",
										fontWeight: 600,
										borderRadius: 9999,
									}}
								/>
							</Box>

							{/* Role Description */}
							<Typography
								variant="body1"
								sx={{
									color: "text.secondary",
									lineHeight: 1.7,
									fontSize: "0.96rem",
									mb: 3,
								}}
							>
								{t(exp.descriptionKey)}
							</Typography>

							{/* Key Achievements & Responsibilities */}
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: 1.2,
									p: 2.5,
									borderRadius: 3,
									bgcolor: "action.hover",
									mb: 3,
								}}
							>
								<Typography
									variant="subtitle2"
									sx={{
										fontWeight: 700,
										color: "text.primary",
										fontSize: "0.85rem",
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										mb: 0.5,
									}}
								>
									{t("experience.key_achievements")}
								</Typography>
								{exp.highlightsKeys.map((hlKey) => (
									<Box key={hlKey} display="flex" alignItems="flex-start" gap={1.2}>
										<CheckCircleOutlineIcon
											sx={{
												fontSize: 18,
												color: isCurrent ? "primary.main" : "text.secondary",
												mt: 0.25,
												flexShrink: 0,
											}}
										/>
										<Typography
											variant="body2"
											sx={{
												color: "text.primary",
												fontSize: "0.9rem",
												lineHeight: 1.5,
											}}
										>
											{t(hlKey)}
										</Typography>
									</Box>
								))}
							</Box>

							{/* Technologies Used */}
							<Box display="flex" flexWrap="wrap" gap={0.8}>
								{exp.technologies.map((tech) => (
									<Chip
										key={tech}
										label={tech}
										size="small"
										sx={{
											borderRadius: 9999,
											fontWeight: 600,
											fontSize: "0.75rem",
											bgcolor: "background.paper",
											border: "1px solid",
											borderColor: "divider",
											color: "text.primary",
										}}
									/>
								))}
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};
