import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectStatusEnum, ProjectType } from "../../types/project.type";
import { COLOR_SUCCESS, COLOR_WARNING } from "../../utils/color.ts";
import { cardSx } from "../../utils/styles.ts";

interface ProjectCardProps {
	project: ProjectType;
	i: number;
}

const cardVariants = {
	initial: { opacity: 0, y: 30 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
	}),
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, i }) => {
	const { t } = useTranslation();
	const isCompleted = project.status === ProjectStatusEnum.COMPLETED;

	return (
		<Grid
			size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
			key={project.title}
			display="flex"
			justifyContent="center"
			alignItems="stretch"
		>
			<motion.div
				custom={i}
				initial="initial"
				whileInView="animate"
				variants={cardVariants}
				viewport={{ once: true }}
				whileHover={{ y: -6 }}
				style={{ width: "100%", display: "flex", justifyContent: "center" }}
			>
				<Card
					sx={{
						...cardSx,
						width: "100%",
						maxWidth: 400,
						minHeight: 450,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						overflow: "hidden",
						position: "relative",
					}}
					elevation={0}
				>
					{/* Status Floating Badge over the image */}
					<Box
						sx={{
							position: "absolute",
							top: 14,
							right: 14,
							zIndex: 10,
							background: isCompleted ? COLOR_SUCCESS.bg : COLOR_WARNING.bg,
							backdropFilter: "blur(8px)",
							border: `1px solid ${isCompleted ? COLOR_SUCCESS.border : COLOR_WARNING.border}`,
							color: isCompleted ? COLOR_SUCCESS.main : COLOR_WARNING.main,
							px: 1.5,
							py: 0.5,
							borderRadius: 9999,
							fontSize: "0.75rem",
							fontWeight: 700,
							letterSpacing: "0.02em",
						}}
					>
						{isCompleted ? t("projects.status_completed") : t("projects.status_in_progress")}
					</Box>

					{/* Image Container with subtle zoom */}
					<Box
						component={motion.div}
						sx={{
							height: 200,
							width: "100%",
							overflow: "hidden",
							position: "relative",
							bgcolor: "action.hover",
						}}
					>
						<CardMedia
							component="img"
							image={project.image}
							alt={project.title}
							sx={{
								height: "100%",
								width: "100%",
								objectFit: "cover",
								transition: "transform 0.4s ease",
								"&:hover": {
									transform: "scale(1.04)",
								},
							}}
						/>
					</Box>

					{/* Content Section */}
					<CardContent sx={{ flexGrow: 1, p: 3 }}>
						<Typography
							variant="h5"
							sx={{
								fontWeight: 700,
								color: "text.primary",
								mb: 1.2,
								fontSize: "1.25rem",
								letterSpacing: "-0.01em",
							}}
						>
							{project.title}
						</Typography>

						<Typography
							variant="body2"
							sx={{
								color: "text.secondary",
								mb: 2.5,
								lineHeight: 1.6,
								minHeight: 56,
							}}
						>
							{project.descriptionKey ? t(project.descriptionKey) : project.description}
						</Typography>

						{project.technologies && (
							<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
								{project.technologies.slice(0, 5).map((tech) => (
									<Chip
										key={tech}
										label={tech}
										size="small"
										sx={{
											fontSize: "0.75rem",
											fontWeight: 600,
											bgcolor: "action.hover",
											border: "1px solid",
											borderColor: "divider",
											color: "text.primary",
											borderRadius: 9999,
										}}
									/>
								))}
								{project.technologies.length > 5 && (
									<Chip
										label={`+${project.technologies.length - 5}`}
										size="small"
										sx={{
											fontSize: "0.72rem",
											fontWeight: 600,
											bgcolor: "transparent",
											border: "1px solid",
											borderColor: "divider",
											color: "text.secondary",
											borderRadius: 9999,
										}}
									/>
								)}
							</Box>
						)}
					</CardContent>

					{/* Actions Section */}
					<CardActions sx={{ px: 3, pb: 3, pt: 0, justifyContent: "flex-end", gap: 1 }}>
						{project.githubLink && (
							<Button
								component={motion.a}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								size="small"
								variant="outlined"
								startIcon={<GitHubIcon sx={{ fontSize: 17 }} />}
								href={project.githubLink}
								target="_blank"
								sx={{
									borderRadius: 9999,
									fontWeight: 600,
									px: 2,
									color: "text.primary",
									borderColor: "divider",
									"&:hover": {
										borderColor: "text.primary",
										bgcolor: "action.hover",
									},
								}}
							>
								{t("projects.btn_code")}
							</Button>
						)}
						{project.demoLink && (
							<Button
								component={motion.a}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								size="small"
								variant="contained"
								color="primary"
								startIcon={<LaunchIcon sx={{ fontSize: 17 }} />}
								href={project.demoLink}
								target="_blank"
								sx={{
									borderRadius: 9999,
									fontWeight: 600,
									px: 2,
								}}
							>
								{t("projects.btn_live")}
							</Button>
						)}
					</CardActions>
				</Card>
			</motion.div>
		</Grid>
	);
};

export default ProjectCard;
