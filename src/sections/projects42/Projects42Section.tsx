import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import SchoolIcon from "@mui/icons-material/School";
import SwipeIcon from "@mui/icons-material/Swipe";
import { Box, Button, Chip, Dialog, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { PROJECTS_42 } from "../../data/user/projects42";
import { Project42Type } from "../../types/project.type";
import { COLOR_WARNING } from "../../utils/color";
import "./Projects42Section.css";

const cx = 450;
const cy = 450;
const RADIUS_STEP = 68; // Space between rings

export const Projects42Section: React.FC = () => {
	const { t } = useTranslation();
	const scrollRef = useRef<HTMLDivElement>(null);
	const [hoveredProject, setHoveredProject] = useState<Project42Type | null>(null);
	const [selectedProject, setSelectedProject] = useState<Project42Type | null>(null);

	// Group projects by circle to compute spacing
	const projectsByCircle = useRef<Record<number, Project42Type[]>>({});

	if (Object.keys(projectsByCircle.current).length === 0) {
		PROJECTS_42.forEach((p) => {
			if (!projectsByCircle.current[p.circle]) {
				projectsByCircle.current[p.circle] = [];
			}
			projectsByCircle.current[p.circle].push(p);
		});
	}

	// Auto-scroll to center on mobile load
	useEffect(() => {
		if (scrollRef.current) {
			const container = scrollRef.current;
			container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
		}
	}, []);

	// Trigonometric coordinates
	const getProjectCoords = (project: Project42Type) => {
		const circle = project.circle;
		if (circle === 0) {
			return { x: cx, y: cy };
		}
		const list = projectsByCircle.current[circle] || [];
		const index = list.findIndex((p) => p.title === project.title);
		const count = list.length;

		const r = circle * RADIUS_STEP + 12;

		// Add organic rotation offsets per circle
		const angleOffset = circle * 28 * (Math.PI / 180);
		const angle = (index / count) * 2 * Math.PI + angleOffset;

		return {
			x: cx + r * Math.cos(angle),
			y: cy + r * Math.sin(angle),
		};
	};

	return (
		<Box
			component="section"
			position={"relative"}
			py={{ xs: 6, md: 10 }}
			px={{ xs: 0, md: 4 }}
			maxWidth={"100%"}
			sx={{
				background: "rgba(20, 20, 30, 0.10)",
				borderRadius: 4,
			}}
		>
			{/* Header */}
			<Box pt={4} pb={2} textAlign={"center"} sx={{ position: "relative", zIndex: 1 }}>
				<Typography
					component={motion.h2}
					variant="h2"
					gutterBottom
					color={COLOR_WARNING.dark}
					whileHover={{ color: "white" }}
					sx={{
						fontWeight: 800,
						fontSize: { xs: "2.2rem", md: "2.8rem" },
						letterSpacing: 1.5,
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 1.5,
					}}
				>
					<SchoolIcon sx={{ fontSize: { xs: "2.2rem", md: "2.8rem" }, color: COLOR_WARNING.main }} />
					{t("projects_42.heading")}
				</Typography>
				<Typography variant="h6" gutterBottom sx={{ color: "#bdbdbd", mb: 4, maxWidth: "700px", mx: "auto", px: 2 }}>
					{t("projects_42.subtitle")}
				</Typography>

				{/* Mobile helper badge */}
				<Box className="mobile-swipe-hint">
					<SwipeIcon fontSize="small" />
					<Typography variant="caption">{t("projects_42.swipe_hint")}</Typography>
				</Box>
			</Box>

			{/* Interactive Map Area */}
			<Box ref={scrollRef} className="holy-graph-scroll-container">
				<Box position="relative" width="900px" height="900px">
					{/* Floating Hover Tooltip */}
					<AnimatePresence>
						{hoveredProject &&
							(() => {
								const coords = getProjectCoords(hoveredProject);
								const xPct = (coords.x / 900) * 100;
								const yPct = (coords.y / 900) * 100;
								return (
									<Box
										component={motion.div}
										initial={{ opacity: 0, scale: 0.9, y: -15 }}
										animate={{ opacity: 1, scale: 1, y: 0 }}
										exit={{ opacity: 0, scale: 0.9, y: -15 }}
										transition={{ duration: 0.2 }}
										sx={{
											position: "absolute",
											left: `${xPct}%`,
											top: `${yPct}%`,
											transform: "translate(-50%, -100%) translateY(-25px) !important",
											background: "rgba(10, 12, 28, 0.96)",
											backdropFilter: "blur(12px)",
											border: "1.5px solid #ffa726",
											borderRadius: 3,
											boxShadow: "0 8px 32px 0 rgba(0,0,0,0.5)",
											p: 2,
											width: 250,
											zIndex: 20,
											pointerEvents: "none",
										}}
									>
										<Typography variant="subtitle2" fontWeight={800} color="#fff" sx={{ mb: 0.5 }}>
											{hoveredProject.title}
										</Typography>
										<Typography variant="caption" sx={{ color: "#ffa726", display: "block", mb: 1, fontWeight: 700 }}>
											{t("projects_42.circle_badge", { num: hoveredProject.circle })}
										</Typography>
										<Typography
											variant="body2"
											sx={{ color: "#b0b0c8", mb: 1.5, fontSize: "0.78rem", lineHeight: 1.4 }}
										>
											{hoveredProject.descriptionKey ? t(hoveredProject.descriptionKey) : hoveredProject.description}
										</Typography>
										<Box display="flex" flexWrap="wrap" gap={0.5}>
											{hoveredProject.technologies.slice(0, 3).map((tech) => (
												<Chip
													key={tech}
													label={tech}
													size="small"
													sx={{
														fontSize: "0.62rem",
														height: 18,
														background: "rgba(0, 180, 255, 0.1)",
														color: "#00b4ff",
														border: "1px solid rgba(0, 180, 255, 0.2)",
													}}
												/>
											))}
										</Box>
									</Box>
								);
							})()}
					</AnimatePresence>

					{/* SVG Graph */}
					<svg
						viewBox="0 0 900 900"
						width="900"
						height="900"
						style={{ minWidth: "900px", maxWidth: "100%", height: "auto" }}
					>
						// Background Rings
						{[1, 2, 3, 4, 5, 6].map((c) => (
							<circle
								key={`ring-${c}`}
								cx={cx}
								cy={cy}
								r={c * RADIUS_STEP + 12}
								stroke="rgba(0, 180, 255, 0.22)"
								strokeWidth={1.5}
								strokeDasharray="4 4"
								fill="none"
							/>
						))}
						{/* Graph Nodes */}
						{PROJECTS_42.map((project) => {
							const coords = getProjectCoords(project);
							const isHovered = hoveredProject?.title === project.title;

							return (
								<g
									key={project.title}
									className="holy-graph-node-group"
									onClick={() => setSelectedProject(project)}
									onMouseEnter={() => setHoveredProject(project)}
									onMouseLeave={() => setHoveredProject(null)}
								>
									{/* Interactive outer glow */}
									<circle
										cx={coords.x}
										cy={coords.y}
										r={project.circle === 0 ? 34 : 26}
										fill="none"
										stroke={isHovered ? "#ffa726" : "rgba(0, 180, 255, 0.3)"}
										strokeWidth={isHovered ? 2 : 1}
										style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
									/>

									{/* Main Circle Node */}
									<circle
										cx={coords.x}
										cy={coords.y}
										r={project.circle === 0 ? 28 : 22}
										className="holy-graph-node-circle"
										fill={project.circle === 0 ? "rgba(255, 167, 38, 0.9)" : "rgba(10, 15, 30, 0.9)"}
										stroke={project.circle === 0 ? "#ffa726" : "#00b4ff"}
										strokeWidth={2}
									/>

									{/* Label Text */}
									<text
										x={coords.x}
										y={coords.y}
										className="holy-graph-node-text"
										style={{
											fontSize: project.circle === 0 ? "10px" : "8px",
											fill: project.circle === 0 ? "#07002D" : "#ffffff",
										}}
									>
										{project.title.substring(0, 8)}
									</text>
								</g>
							);
						})}
					</svg>
				</Box>
			</Box>

			{/* Project Detail Modal */}
			<Dialog
				open={Boolean(selectedProject)}
				onClose={() => setSelectedProject(null)}
				maxWidth="sm"
				fullWidth
				PaperProps={{
					sx: {
						background: "linear-gradient(135deg, rgba(20, 24, 40, 0.96) 0%, rgba(10, 12, 22, 0.96) 100%)",
						backdropFilter: "blur(20px)",
						border: "1.5px solid rgba(255, 167, 38, 0.35)",
						borderRadius: 5,
						color: "#fff",
						p: { xs: 2.5, sm: 4 },
						boxShadow: "0 24px 64px 0 rgba(0,0,0,0.65)",
					},
				}}
			>
				{selectedProject && (
					<Box>
						{/* Title */}
						<Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
							<Typography
								variant="h4"
								fontWeight={800}
								sx={{
									background: "linear-gradient(90deg, #fff 0%, #ffe0b2 100%)",
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									fontSize: { xs: "1.8rem", sm: "2.2rem" },
								}}
							>
								{selectedProject.title}
							</Typography>
							<Chip
								label={t("projects_42.circle_badge", { num: selectedProject.circle })}
								sx={{
									background: "rgba(255, 167, 38, 0.15)",
									border: "1px solid rgba(255, 167, 38, 0.4)",
									color: "#ffa726",
									fontWeight: 800,
									fontSize: "0.75rem",
								}}
							/>
						</Box>

						{/* Image */}
						{selectedProject.image && (
							<Box
								sx={{
									width: "100%",
									height: { xs: 160, sm: 240 },
									borderRadius: 3,
									overflow: "hidden",
									mb: 3,
									border: "1px solid rgba(255, 255, 255, 0.08)",
									background: "#080b12",
								}}
							>
								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</Box>
						)}

						{/* Description */}
						<Typography variant="body1" sx={{ color: "#d0d0e0", mb: 3, lineHeight: 1.7, fontSize: "0.95rem" }}>
							{selectedProject.descriptionKey ? t(selectedProject.descriptionKey) : selectedProject.description}
						</Typography>

						{/* Tech Stack */}
						<Box mb={4}>
							<Typography
								variant="subtitle2"
								sx={{
									color: "rgba(255,255,255,0.4)",
									textTransform: "uppercase",
									mb: 1.5,
									letterSpacing: 1,
									fontSize: "0.75rem",
								}}
							>
								{t("projects_42.stack_technique")}
							</Typography>
							<Box display="flex" flexWrap="wrap" gap={1}>
								{selectedProject.technologies.map((tech) => (
									<Chip
										key={tech}
										label={tech}
										size="small"
										sx={{
											background: "rgba(0, 180, 255, 0.1)",
											border: "1px solid rgba(0, 180, 255, 0.2)",
											color: "#00b4ff",
											fontWeight: 600,
											fontSize: "0.75rem",
										}}
									/>
								))}
							</Box>
						</Box>

						{/* Actions */}
						<Box display="flex" justifyContent="flex-end" alignItems="center" gap={2}>
							<Button
								variant="text"
								onClick={() => setSelectedProject(null)}
								sx={{ color: "rgba(255,255,255,0.5)", fontWeight: 700, textTransform: "none", mr: "auto" }}
							>
								{t("projects_42.btn_close")}
							</Button>

							{selectedProject.githubLink && (
								<Button
									variant="outlined"
									startIcon={<GitHubIcon />}
									href={selectedProject.githubLink}
									target="_blank"
									sx={{
										borderRadius: 3,
										color: "#fff",
										borderColor: "rgba(255,255,255,0.15)",
										fontWeight: 700,
										fontSize: "0.82rem",
										px: 2.5,
										py: 0.8,
										textTransform: "none",
										"&:hover": { borderColor: "#fff", background: "rgba(255,255,255,0.05)" },
									}}
								>
									{t("projects.btn_code")}
								</Button>
							)}

							{selectedProject.demoLink && (
								<Button
									variant="contained"
									startIcon={<LaunchIcon />}
									href={selectedProject.demoLink}
									target="_blank"
									sx={{
										borderRadius: 3,
										background: "linear-gradient(135deg, #ffa726 0%, #f57c00 100%)",
										color: "#fff",
										fontWeight: 700,
										fontSize: "0.82rem",
										px: 2.5,
										py: 0.8,
										textTransform: "none",
										boxShadow: "0 4px 16px 0 rgba(255, 167, 38, 0.25)",
									}}
								>
									{t("projects.btn_live")}
								</Button>
							)}
						</Box>
					</Box>
				)}
			</Dialog>
		</Box>
	);
};
