import React from "react";
import { Typography, Grid, Box, Button, Card, CardMedia, CardContent, Chip, CardActions } from "@mui/material";
import { ProjectStatusEnum, ProjectType } from "../../data/user/projects.ts";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

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
		transition: { delay: i * 0.08, duration: 0.6, type: "spring", stiffness: 120 },
	}),
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, i }) => {
	return (
		<Grid
			item
			xs={12}
			sm={12}
			md={6}
			lg={4}
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
				whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(255,193,7,0.13)" }}
				style={{ width: "100%", display: "flex", justifyContent: "center" }}
			>
				<Card
					sx={{
						width: "100%",
						maxWidth: 400,
						minHeight: 420,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						borderRadius: 4,
						boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
						background: "rgba(30,30,40,0.85)",
						overflow: "hidden",
						transition: "box-shadow 0.2s",
					}}
					elevation={6}
				>
					<CardMedia
						component="img"
						image={project.image}
						alt={project.title}
						sx={{
							height: 180,
							objectFit: "cover",
							borderTopLeftRadius: 16,
							borderTopRightRadius: 16,
							background: "#222",
						}}
					/>
					<CardContent sx={{ flexGrow: 1 }}>
						<Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
							<Typography variant="h5" fontWeight={700} color="#fff">
								{project.title}
							</Typography>
							<Chip
								label={project.status === ProjectStatusEnum.COMPLETED ? "Completed" : "In Progress"}
								color={project.status === ProjectStatusEnum.COMPLETED ? "success" : "warning"}
								size="small"
								sx={{
									fontWeight: 600,
									letterSpacing: 0.5,
									px: 1,
								}}
							/>
						</Box>
						<Typography variant="body1" sx={{ color: "#bdbdbd", mb: 2 }}>
							{project.description}
						</Typography>
					</CardContent>
					<CardActions sx={{ px: 3, pb: 2, pt: 0, justifyContent: "flex-end" }}>
						<Button
							size="medium"
							color="warning"
							variant="contained"
							startIcon={<GitHubIcon />}
							href={project.githubLink}
							target="_blank"
							sx={{
								borderRadius: 2,
								fontWeight: 600,
								px: 2.5,
								boxShadow: "0 2px 8px 0 rgba(255,193,7,0.08)",
								mr: project.demoLink ? 1 : 0,
							}}
						>
							GitHub
						</Button>
						{project.demoLink && (
							<Button
								size="medium"
								color="primary"
								variant="outlined"
								startIcon={<LaunchIcon />}
								href={project.demoLink}
								target="_blank"
								sx={{
									borderRadius: 2,
									fontWeight: 600,
									px: 2.5,
									borderWidth: 2,
								}}
							>
								Demo
							</Button>
						)}
					</CardActions>
				</Card>
			</motion.div>
		</Grid>
	);
};

export default ProjectCard;
