import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { EDUCATION } from "../../data/user/education.ts";
import { cardSx } from "../../utils/styles.ts";

export const EducationSection: React.FC = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	const isLight = theme.palette.mode === "light";

	return (
		<Box
			component="section"
			width="100%"
			py={{ xs: 6, md: 8 }}
			sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			{/* Header */}
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
				{t("education.heading")}
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
					maxWidth: 680,
					textAlign: "center",
					lineHeight: 1.6,
				}}
			>
				{t("education.subtitle")}
			</Typography>

			{/* Cards */}
			<Box sx={{ width: "100%", maxWidth: 1000, display: "flex", flexDirection: "column", gap: 3 }}>
				{EDUCATION.map((edu, index) => {
					const isCertif = edu.kind === "certification";
					const Icon = isCertif ? VerifiedOutlinedIcon : SchoolOutlinedIcon;
					const accentColor = isLight ? "rgba(37, 99, 235, 0.1)" : "rgba(59, 130, 246, 0.14)";

					return (
						<Box
							key={edu.id}
							component={motion.div}
							initial={{ opacity: 0, y: 28 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -4 }}
							sx={{
								...cardSx,
								p: { xs: 3, md: 4 },
								position: "relative",
							}}
						>
							{/* Row: icon + title + badges */}
							<Box
								display="flex"
								flexDirection={{ xs: "column", sm: "row" }}
								justifyContent="space-between"
								alignItems={{ xs: "flex-start", sm: "center" }}
								gap={1.5}
								mb={1.5}
							>
								<Box display="flex" alignItems="center" gap={1.5}>
									{/* Icon bubble */}
									<Box
										sx={{
											p: 1.2,
											borderRadius: 3,
											bgcolor: accentColor,
											color: "primary.main",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
										}}
									>
										<Icon sx={{ fontSize: 22 }} />
									</Box>

									<Box>
										<Typography
											variant="h5"
											sx={{
												fontWeight: 800,
												fontSize: { xs: "1.1rem", md: "1.3rem" },
												color: "text.primary",
												letterSpacing: "-0.015em",
											}}
										>
											{t(edu.degreeKey)}
										</Typography>
										<Typography variant="subtitle2" sx={{ color: "primary.main", fontWeight: 700, fontSize: "0.9rem" }}>
											{t(edu.institutionKey)}
										</Typography>
									</Box>
								</Box>

								{/* Period + ongoing badge */}
								<Box display="flex" flexWrap="wrap" gap={0.8} alignItems="center">
									{edu.isOngoing && (
										<Chip
											label={t("education.ongoing_badge")}
											size="small"
											sx={{
												bgcolor: isLight ? "rgba(5, 150, 105, 0.1)" : "rgba(5, 150, 105, 0.2)",
												color: "#059669",
												border: "1px solid rgba(5, 150, 105, 0.3)",
												fontWeight: 700,
												fontSize: "0.72rem",
												borderRadius: 9999,
											}}
										/>
									)}
									<Chip
										label={t(edu.periodKey)}
										size="small"
										sx={{
											bgcolor: "action.hover",
											color: "text.primary",
											border: "1px solid",
											borderColor: "divider",
											fontWeight: 600,
											fontSize: "0.72rem",
											borderRadius: 9999,
										}}
									/>
								</Box>
							</Box>

							{/* Location */}
							<Box display="flex" alignItems="center" gap={0.5} mb={2} sx={{ color: "text.secondary" }}>
								<LocationOnOutlinedIcon sx={{ fontSize: 15 }} />
								<Typography variant="caption" sx={{ fontSize: "0.8rem", fontWeight: 500 }}>
									{t(edu.locationKey)}
								</Typography>
							</Box>

							{/* Description */}
							<Typography
								variant="body2"
								sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "0.93rem", mb: edu.highlightsKeys ? 2.5 : 0 }}
							>
								{t(edu.descriptionKey)}
							</Typography>

							{/* Highlights */}
							{edu.highlightsKeys && edu.highlightsKeys.length > 0 && (
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: 0.9,
										p: 2,
										borderRadius: 3,
										bgcolor: "action.hover",
										mb: 2.5,
									}}
								>
									{edu.highlightsKeys.map((key) => (
										<Box key={key} display="flex" alignItems="flex-start" gap={1}>
											<EmojiEventsOutlinedIcon sx={{ fontSize: 16, color: "primary.main", mt: 0.3, flexShrink: 0 }} />
											<Typography variant="body2" sx={{ color: "text.primary", fontSize: "0.88rem", lineHeight: 1.5 }}>
												{t(key)}
											</Typography>
										</Box>
									))}
								</Box>
							)}

							{/* Tags */}
							<Box display="flex" flexWrap="wrap" gap={0.7}>
								{edu.tags.map((tag) => (
									<Chip
										key={tag}
										label={tag}
										size="small"
										sx={{
											borderRadius: 9999,
											fontWeight: 600,
											fontSize: "0.72rem",
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
