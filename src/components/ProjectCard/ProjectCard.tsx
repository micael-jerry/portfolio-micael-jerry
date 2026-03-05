import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ProjectStatusEnum, ProjectType } from "../../types/project.type";

interface ProjectCardProps {
	project: ProjectType;
	i: number;
}

const cardVariants = {
	initial: { opacity: 0, y: 40, scale: 0.97 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: i * 0.08, duration: 0.6, type: "spring" as const, stiffness: 120 },
	}),
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, i }) => {
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
				whileHover={{ scale: 1.02, y: -8 }}
				style={{ width: "100%", display: "flex", justifyContent: "center" }}
			>
				<Card
					sx={{
						width: "100%",
						maxWidth: 400,
						minHeight: 440,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						borderRadius: 4,
						background: "linear-gradient(135deg, rgba(30, 30, 40, 0.8) 0%, rgba(20, 20, 30, 0.6) 100%)",
						backdropFilter: "blur(16px)",
						border: "1px solid rgba(255, 255, 255, 0.08)",
						boxShadow: "0 8px 32px 0 rgba(0,0,0,0.3)",
						overflow: "hidden",
						position: "relative",
					}}
					elevation={0}
				>
					{/* Status Floating Badge over the image */}
					<Box
						sx={{
							position: "absolute",
							top: 16,
							right: 16,
							zIndex: 10,
							background:
								project.status === ProjectStatusEnum.COMPLETED ? "rgba(76, 175, 80, 0.2)" : "rgba(255, 152, 0, 0.2)",
							backdropFilter: "blur(8px)",
							border: `1px solid ${project.status === ProjectStatusEnum.COMPLETED ? "rgba(76, 175, 80, 0.5)" : "rgba(255, 152, 0, 0.5)"}`,
							color: project.status === ProjectStatusEnum.COMPLETED ? "#4caf50" : "#ff9800",
							padding: "4px 12px",
							borderRadius: 20,
							fontSize: "0.75rem",
							fontWeight: 700,
							letterSpacing: 0.5,
							boxShadow: `0 0 12px 0 ${project.status === ProjectStatusEnum.COMPLETED ? "rgba(76, 175, 80, 0.3)" : "rgba(255, 152, 0, 0.3)"}`,
						}}
					>
						{project.status === ProjectStatusEnum.COMPLETED ? "Completed" : "In Progress"}
					</Box>

					{/* Image Container with Zoom effect on hover */}
					<Box
						component={motion.div}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.4 }}
						sx={{
							height: 200,
							width: "100%",
							overflow: "hidden",
							position: "relative",
							background: "#121212",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								inset: 0,
								background: "linear-gradient(to bottom, transparent 0%, rgba(20, 20, 30, 0.9) 100%)",
								zIndex: 1,
							}}
						/>
						<CardMedia
							component="img"
							image={project.image}
							alt={project.title}
							sx={{
								height: "100%",
								width: "100%",
								objectFit: "cover",
								zIndex: 0,
							}}
						/>
					</Box>

					{/* Content Section */}
					<CardContent sx={{ flexGrow: 1, position: "relative", zIndex: 2, mt: -4 }}>
						<Typography
							variant="h5"
							fontWeight={800}
							sx={{
								color: "#fff",
								mb: 1.5,
								background: "linear-gradient(90deg, #fff 0%, #b3e5fc 100%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							{project.title}
						</Typography>

						<Typography variant="body2" sx={{ color: "#a0a0a0", mb: 3, lineHeight: 1.6, minHeight: 60 }}>
							{project.description}
						</Typography>

						{project.technologies && (
							<Box sx={{ mb: 2 }}>
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
									{project.technologies.slice(0, 5).map((tech) => (
										<Chip
											key={tech}
											label={tech}
											size="small"
											sx={{
												fontSize: "0.75rem",
												fontWeight: 500,
												background: "rgba(0, 180, 255, 0.1)",
												border: "1px solid rgba(0, 180, 255, 0.2)",
												color: "#00b4ff",
												borderRadius: 1.5,
											}}
										/>
									))}
									{project.technologies.length > 5 && (
										<Chip
											label={`+${project.technologies.length - 5}`}
											size="small"
											sx={{
												fontSize: "0.7rem",
												fontWeight: 600,
												background: "rgba(255, 255, 255, 0.05)",
												color: "#888",
												borderRadius: 1.5,
											}}
										/>
									)}
								</Box>
							</Box>
						)}
					</CardContent>

					{/* Actions Section */}
					<CardActions sx={{ px: 3, pb: 3, pt: 0, justifyContent: "flex-end", gap: 1.5 }}>
						{project.githubLink && (
							<Button
								component={motion.a}
								whileHover={{ scale: 1.05, boxShadow: "0 4px 16px 0 rgba(255,255,255,0.15)" }}
								whileTap={{ scale: 0.95 }}
								size="small"
								variant="outlined"
								startIcon={<GitHubIcon fontSize="small" />}
								href={project.githubLink}
								target="_blank"
								sx={{
									borderRadius: 20,
									fontWeight: 600,
									px: 2,
									borderWidth: "1.5px !important",
									color: "#e0e0e0",
									borderColor: "rgba(255,255,255,0.2)",
									"&:hover": {
										borderColor: "#fff",
										color: "#fff",
										background: "rgba(255,255,255,0.05)",
									},
								}}
							>
								Code
							</Button>
						)}
						{project.demoLink && (
							<Button
								component={motion.a}
								whileHover={{ scale: 1.05, boxShadow: "0 4px 16px 0 rgba(0,180,255,0.3)" }}
								whileTap={{ scale: 0.95 }}
								size="small"
								color="primary"
								variant="contained"
								startIcon={<LaunchIcon fontSize="small" />}
								href={project.demoLink}
								target="_blank"
								sx={{
									borderRadius: 20,
									fontWeight: 700,
									px: 2,
									background: "linear-gradient(135deg, #00b4ff 0%, #007bb5 100%)",
									color: "#fff",
								}}
							>
								Live
							</Button>
						)}
					</CardActions>
				</Card>
			</motion.div>
		</Grid>
	);
};

export default ProjectCard;
