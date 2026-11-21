import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Box, Chip, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SKILL_DOMAINS, SkillDomain } from "../../data/user/skills.ts";
import { cardSx } from "../../utils/styles.ts";

const domainIcons: Record<SkillDomain["iconType"], React.ReactNode> = {
	servicenow: <CloudQueueIcon sx={{ fontSize: 24 }} />,
	fullstack: <CodeIcon sx={{ fontSize: 24 }} />,
	systems: <TerminalIcon sx={{ fontSize: 24 }} />,
	data_devops: <StorageIcon sx={{ fontSize: 24 }} />,
};

export const SkillsSection: React.FC = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	const [activeDomain, setActiveDomain] = useState<string>("all");

	const filteredDomains = activeDomain === "all" ? SKILL_DOMAINS : SKILL_DOMAINS.filter((d) => d.id === activeDomain);

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
				{t("skills.heading")}
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
					mb: 4,
					maxWidth: 720,
					textAlign: "center",
					lineHeight: 1.6,
				}}
			>
				{t("skills.subtitle")}
			</Typography>

			{/* Filter Tabs */}
			<Box display="flex" flexWrap="wrap" justifyContent="center" gap={1} mb={5}>
				<Chip
					label={t("skills.filters.all")}
					onClick={() => setActiveDomain("all")}
					variant={activeDomain === "all" ? "filled" : "outlined"}
					color={activeDomain === "all" ? "primary" : "default"}
					sx={{
						borderRadius: 9999,
						fontWeight: 600,
						px: 1,
						cursor: "pointer",
					}}
				/>
				{SKILL_DOMAINS.map((domain) => (
					<Chip
						key={domain.id}
						label={t(domain.badgeKey)}
						onClick={() => setActiveDomain(domain.id)}
						variant={activeDomain === domain.id ? "filled" : "outlined"}
						color={activeDomain === domain.id ? "primary" : "default"}
						sx={{
							borderRadius: 9999,
							fontWeight: 600,
							px: 1,
							cursor: "pointer",
						}}
					/>
				))}
			</Box>

			{/* Domain Competency Cards */}
			<Grid container spacing={{ xs: 3, md: 3.5 }} sx={{ width: "100%", maxWidth: 1200 }}>
				{filteredDomains.map((domain, index) => {
					const isServiceNow = domain.id === "servicenow";

					return (
						<Grid size={{ xs: 12, md: 6 }} key={domain.id} sx={{ display: "flex" }}>
							<Box
								component={motion.div}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								whileHover={{ y: -4 }}
								sx={{
									...cardSx,
									p: { xs: 3, md: 4 },
									width: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									position: "relative",
									overflow: "hidden",
									border: isServiceNow
										? `1.5px solid ${theme.palette.mode === "light" ? "rgba(37, 99, 235, 0.4)" : "rgba(59, 130, 246, 0.4)"}`
										: undefined,
								}}
							>
								{/* Top Header of Card */}
								<Box mb={2.5}>
									<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
										<Box
											sx={{
												p: 1.2,
												borderRadius: 3,
												bgcolor: isServiceNow
													? theme.palette.mode === "light"
														? "rgba(37, 99, 235, 0.1)"
														: "rgba(59, 130, 246, 0.15)"
													: "action.hover",
												color: isServiceNow ? "primary.main" : "text.primary",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											{domainIcons[domain.iconType]}
										</Box>
										<Chip
											label={t(domain.badgeKey)}
											size="small"
											sx={{
												borderRadius: 9999,
												fontWeight: 700,
												fontSize: "0.72rem",
												bgcolor: isServiceNow
													? theme.palette.mode === "light"
														? "rgba(37, 99, 235, 0.08)"
														: "rgba(59, 130, 246, 0.15)"
													: "action.hover",
												color: isServiceNow ? "primary.main" : "text.secondary",
												border: "1px solid",
												borderColor: "divider",
											}}
										/>
									</Box>

									<Typography
										variant="h5"
										sx={{
											fontWeight: 800,
											fontSize: { xs: "1.25rem", md: "1.4rem" },
											color: "text.primary",
											letterSpacing: "-0.015em",
											mb: 1,
										}}
									>
										{t(domain.titleKey)}
									</Typography>
									<Typography
										variant="body2"
										sx={{
											color: "text.secondary",
											lineHeight: 1.6,
											fontSize: "0.92rem",
										}}
									>
										{t(domain.descriptionKey)}
									</Typography>
								</Box>

								{/* Competencies List */}
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: 1.8,
										my: 2.5,
										p: 2,
										borderRadius: 3,
										bgcolor: "action.hover",
									}}
								>
									{domain.competencies.map((comp) => (
										<Box key={comp.titleKey}>
											<Typography
												variant="subtitle2"
												sx={{
													fontWeight: 700,
													color: "text.primary",
													fontSize: "0.88rem",
													mb: 0.3,
												}}
											>
												{t(comp.titleKey)}
											</Typography>
											<Typography
												variant="body2"
												sx={{
													color: "text.secondary",
													fontSize: "0.82rem",
													lineHeight: 1.5,
												}}
											>
												{t(comp.descKey)}
											</Typography>
										</Box>
									))}
								</Box>

								{/* Technology Pills */}
								<Box mt="auto">
									<Typography
										variant="caption"
										sx={{
											color: "text.secondary",
											fontWeight: 700,
											textTransform: "uppercase",
											letterSpacing: "0.06em",
											display: "block",
											mb: 1.2,
											fontSize: "0.72rem",
										}}
									>
										{t("skills.stack_label")}
									</Typography>
									<Box display="flex" flexWrap="wrap" gap={0.8}>
										{domain.technologies.map((tech) => (
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
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};
