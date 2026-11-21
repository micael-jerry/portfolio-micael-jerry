import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import SwipeIcon from "@mui/icons-material/Swipe";
import { Box, Button, Chip, Dialog, Typography, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { PROJECTS_42 } from "../../data/user/projects42";
import { Project42Type } from "../../types/project.type";
import { modalSx } from "../../utils/styles";
import "./Projects42Section.css";

// ─── Layout constants ────────────────────────────────────────────────────────
const CX = 450;
const CY = 450;
const RADIUS_STEP = 68; // px between rings

// Derive the number of rings from the data so the graph grows automatically
// when new circles / projects are added to PROJECTS_42.
const MAX_CIRCLE = Math.max(...PROJECTS_42.map((p) => p.circle));

export const Projects42Section: React.FC = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	const scrollRef = useRef<HTMLDivElement>(null);
	const [hoveredProject, setHoveredProject] = useState<Project42Type | null>(null);
	const [selectedProject, setSelectedProject] = useState<Project42Type | null>(null);

	const isLight = theme.palette.mode === "light";

	// Group projects by circle — computed once from the data
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

	// Trigonometric coordinates — works for any circle number
	const getProjectCoords = (project: Project42Type) => {
		const circle = project.circle;
		if (circle === 0) return { x: CX, y: CY };
		const list = projectsByCircle.current[circle] || [];
		const index = list.findIndex((p) => p.title === project.title);
		const count = list.length;
		const r = circle * RADIUS_STEP + 12;
		const angleOffset = circle * 28 * (Math.PI / 180);
		const angle = (index / count) * 2 * Math.PI + angleOffset;
		return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) };
	};

	const ringColor = isLight ? "rgba(0, 0, 0, 0.07)" : "rgba(255, 255, 255, 0.07)";
	const outerRingStroke = isLight ? "rgba(15, 23, 42, 0.2)" : "rgba(255, 255, 255, 0.2)";

	return (
		<Box component="section" position="relative" py={{ xs: 6, md: 8 }} maxWidth="100%" width="100%">
			{/* ── Header ──────────────────────────────────────────────────── */}
			<Box pt={2} pb={4} textAlign="center" sx={{ position: "relative", zIndex: 1 }}>
				<Typography
					component={motion.h2}
					variant="h2"
					sx={{
						fontWeight: 800,
						fontSize: { xs: "2rem", md: "2.5rem" },
						letterSpacing: "-0.025em",
						color: "text.primary",
						mb: 1.5,
					}}
				>
					{t("projects_42.heading")}
				</Typography>
				<Typography variant="body1" sx={{ color: "text.secondary", mb: 2, maxWidth: 680, mx: "auto" }}>
					{t("projects_42.subtitle")}
				</Typography>

				{/* Circle legend */}
				<Box display="flex" flexWrap="wrap" justifyContent="center" gap={0.8} mb={2} sx={{ maxWidth: 720, mx: "auto" }}>
					<Chip
						label={t("projects_42.circle_0")}
						size="small"
						sx={{
							fontWeight: 700,
							fontSize: "0.72rem",
							bgcolor: isLight ? "#0F172A" : "#F8FAFC",
							color: isLight ? "#F8FAFC" : "#0F172A",
							borderRadius: 9999,
						}}
					/>
					{Array.from({ length: MAX_CIRCLE }, (_, i) => i + 1).map((c) => (
						<Chip
							key={c}
							label={t("projects_42.circle_badge", { num: c })}
							size="small"
							sx={{
								fontWeight: 600,
								fontSize: "0.72rem",
								bgcolor: "action.hover",
								border: "1px solid",
								borderColor: "divider",
								color: "text.secondary",
								borderRadius: 9999,
							}}
						/>
					))}
				</Box>

				{/* Mobile swipe hint */}
				<Box className="mobile-swipe-hint">
					<SwipeIcon fontSize="small" />
					<Typography variant="caption">{t("projects_42.swipe_hint")}</Typography>
				</Box>
			</Box>

			{/* ── Graph ───────────────────────────────────────────────────── */}
			<Box ref={scrollRef} className="holy-graph-scroll-container">
				<Box position="relative" width="900px" height="900px">
					{/* Floating hover tooltip */}
					<AnimatePresence>
						{hoveredProject &&
							(() => {
								const coords = getProjectCoords(hoveredProject);
								const xPct = (coords.x / 900) * 100;
								const yPct = (coords.y / 900) * 100;
								return (
									<Box
										component={motion.div}
										initial={{ opacity: 0, scale: 0.94, y: -10 }}
										animate={{ opacity: 1, scale: 1, y: 0 }}
										exit={{ opacity: 0, scale: 0.94, y: -10 }}
										transition={{ duration: 0.15 }}
										sx={{
											position: "absolute",
											left: `${xPct}%`,
											top: `${yPct}%`,
											transform: "translate(-50%, -100%) translateY(-22px) !important",
											bgcolor: "background.paper",
											border: "1px solid",
											borderColor: "divider",
											borderRadius: 3,
											boxShadow: isLight ? "0 10px 25px -5px rgba(0,0,0,0.1)" : "0 10px 25px -5px rgba(0,0,0,0.6)",
											p: 2,
											width: 250,
											zIndex: 20,
											pointerEvents: "none",
										}}
									>
										<Typography variant="subtitle2" fontWeight={700} color="text.primary" sx={{ mb: 0.3 }}>
											{hoveredProject.title}
										</Typography>
										<Typography
											variant="caption"
											sx={{ color: "text.secondary", display: "block", mb: 1, fontWeight: 600 }}
										>
											{hoveredProject.circle === 0
												? t("projects_42.circle_0")
												: t("projects_42.circle_badge", { num: hoveredProject.circle })}
										</Typography>
										<Typography
											variant="body2"
											sx={{ color: "text.secondary", mb: 1.5, fontSize: "0.78rem", lineHeight: 1.4 }}
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
														fontSize: "0.65rem",
														height: 20,
														bgcolor: "action.hover",
														color: "text.primary",
														border: "1px solid",
														borderColor: "divider",
														borderRadius: 9999,
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
						{/* Background rings — rendered for every circle present in data */}
						{Array.from({ length: MAX_CIRCLE }, (_, i) => i + 1).map((c) => (
							<circle
								key={`ring-${c}`}
								cx={CX}
								cy={CY}
								r={c * RADIUS_STEP + 12}
								stroke={ringColor}
								strokeWidth={1}
								strokeDasharray="4 4"
								fill="none"
							/>
						))}

						{/* Nodes */}
						{PROJECTS_42.map((project) => {
							const coords = getProjectCoords(project);
							const isHovered = hoveredProject?.title === project.title;
							const isCenter = project.circle === 0;

							const nodeFill = isCenter ? (isLight ? "#0F172A" : "#F8FAFC") : isLight ? "#FFFFFF" : "#171A23";
							const nodeStroke = isCenter
								? isLight
									? "#0F172A"
									: "#F8FAFC"
								: isHovered
									? isLight
										? "#0F172A"
										: "#FFFFFF"
									: isLight
										? "rgba(0,0,0,0.15)"
										: "rgba(255,255,255,0.15)";
							const textColor = isCenter ? (isLight ? "#FFFFFF" : "#0F172A") : isLight ? "#0F172A" : "#F8FAFC";

							return (
								<g
									key={project.title}
									className="holy-graph-node-group"
									onClick={() => setSelectedProject(project)}
									onMouseEnter={() => setHoveredProject(project)}
									onMouseLeave={() => setHoveredProject(null)}
								>
									{isHovered && (
										<circle
											cx={coords.x}
											cy={coords.y}
											r={isCenter ? 35 : 28}
											fill="none"
											stroke={outerRingStroke}
											strokeWidth={1.5}
										/>
									)}
									<circle
										cx={coords.x}
										cy={coords.y}
										r={isCenter ? 28 : 22}
										className="holy-graph-node-circle"
										fill={nodeFill}
										stroke={nodeStroke}
										strokeWidth={isHovered ? 2 : 1.5}
									/>
									<text
										x={coords.x}
										y={coords.y}
										className="holy-graph-node-text"
										style={{
											fontSize: isCenter ? "10px" : "8px",
											fontWeight: isCenter ? 800 : 700,
											fill: textColor,
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

			{/* ── Detail Modal ─────────────────────────────────────────────── */}
			<Dialog
				open={Boolean(selectedProject)}
				onClose={() => setSelectedProject(null)}
				maxWidth="sm"
				fullWidth
				PaperProps={{
					sx: {
						...modalSx,
						color: "text.primary",
						p: { xs: 2.5, sm: 4 },
					},
				}}
			>
				{selectedProject && (
					<Box>
						<Box display="flex" justifyContent="space-between" alignItems="center" mb={2.5}>
							<Typography
								variant="h4"
								fontWeight={800}
								sx={{ color: "text.primary", letterSpacing: "-0.02em", fontSize: { xs: "1.6rem", sm: "2rem" } }}
							>
								{selectedProject.title}
							</Typography>
							<Chip
								label={
									selectedProject.circle === 0
										? t("projects_42.circle_0")
										: t("projects_42.circle_badge", { num: selectedProject.circle })
								}
								sx={{
									bgcolor: "action.hover",
									border: "1px solid",
									borderColor: "divider",
									color: "text.secondary",
									fontWeight: 700,
									fontSize: "0.75rem",
									borderRadius: 9999,
								}}
							/>
						</Box>

						{selectedProject.image && (
							<Box
								sx={{
									width: "100%",
									height: { xs: 160, sm: 220 },
									borderRadius: 3,
									overflow: "hidden",
									mb: 3,
									border: "1px solid",
									borderColor: "divider",
									bgcolor: "action.hover",
								}}
							>
								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</Box>
						)}

						<Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6, fontSize: "0.95rem" }}>
							{selectedProject.descriptionKey ? t(selectedProject.descriptionKey) : selectedProject.description}
						</Typography>

						<Box mb={4}>
							<Typography
								variant="subtitle2"
								sx={{
									color: "text.secondary",
									textTransform: "uppercase",
									mb: 1.5,
									letterSpacing: "0.05em",
									fontSize: "0.75rem",
									fontWeight: 700,
								}}
							>
								{t("projects_42.stack_technique")}
							</Typography>
							<Box display="flex" flexWrap="wrap" gap={0.8}>
								{selectedProject.technologies.map((tech) => (
									<Chip
										key={tech}
										label={tech}
										size="small"
										sx={{
											bgcolor: "action.hover",
											border: "1px solid",
											borderColor: "divider",
											color: "text.primary",
											fontWeight: 600,
											fontSize: "0.75rem",
											borderRadius: 9999,
										}}
									/>
								))}
							</Box>
						</Box>

						<Box display="flex" justifyContent="flex-end" alignItems="center" gap={1.5}>
							<Button
								variant="text"
								onClick={() => setSelectedProject(null)}
								sx={{ color: "text.secondary", fontWeight: 600, textTransform: "none", mr: "auto" }}
							>
								{t("projects_42.btn_close")}
							</Button>

							{selectedProject.githubLink && (
								<Button
									variant="outlined"
									startIcon={<GitHubIcon sx={{ fontSize: 18 }} />}
									href={selectedProject.githubLink}
									target="_blank"
									sx={{
										borderRadius: 9999,
										color: "text.primary",
										borderColor: "divider",
										fontWeight: 600,
										fontSize: "0.85rem",
										px: 2.5,
										"&:hover": { borderColor: "text.primary", bgcolor: "action.hover" },
									}}
								>
									{t("projects.btn_code")}
								</Button>
							)}

							{selectedProject.demoLink && (
								<Button
									variant="contained"
									color="primary"
									startIcon={<LaunchIcon sx={{ fontSize: 18 }} />}
									href={selectedProject.demoLink}
									target="_blank"
									sx={{ borderRadius: 9999, fontWeight: 600, fontSize: "0.85rem", px: 2.5 }}
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
