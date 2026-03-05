import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { COLOR_WARNING } from "../../../utils/color.ts";

interface AboutEducationProps {
	variants?: Variants;
}

export const AboutEducation: React.FC<AboutEducationProps> = ({ variants }) => {
	return (
		<Box
			component={motion.div}
			variants={variants}
			whileHover={{ scale: 1.02, boxShadow: "0 12px 40px 0 rgba(0,180,255,0.15)" }}
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
				height: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 2 }}>
				<Box
					sx={{
						p: 1.5,
						borderRadius: 2,
						background: "rgba(0,180,255,0.1)",
						border: `1px solid rgba(0,180,255,0.2)`,
						display: "flex",
						alignItems: "center",
					}}
				>
					<SchoolIcon sx={{ color: "#00b4ff" }} />
				</Box>
				<Typography variant="h5" sx={{ fontWeight: 700, color: "#fff" }}>
					Education
				</Typography>
			</Box>

			<Box sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
				<Box>
					<Typography variant="h6" sx={{ color: COLOR_WARNING.main, fontWeight: 600, mb: 0.5 }}>
						HEI
					</Typography>
					<Typography variant="body1" sx={{ color: "#e0e0e0", mb: 1 }}>
						Computer Science Graduate
					</Typography>
					<Typography variant="body2" sx={{ color: "#9e9e9e" }}>
						Built a strong foundation in software engineering principles, algorithms, and system design.
					</Typography>
				</Box>

				<Box sx={{ height: 1, width: "100%", background: "rgba(255,255,255,0.1)" }} />

				<Box>
					<Typography variant="h6" sx={{ color: COLOR_WARNING.main, fontWeight: 600, mb: 0.5 }}>
						42 Antananarivo
					</Typography>
					<Typography variant="body1" sx={{ color: "#e0e0e0", mb: 1 }}>
						Advanced Software Engineering
					</Typography>
					<Typography variant="body2" sx={{ color: "#9e9e9e" }}>
						Peer-to-peer learning environment focusing on practical, complex problem solving and modern stack mastery.
					</Typography>
				</Box>
			</Box>

			<Box sx={{ position: "absolute", bottom: -20, right: -20, opacity: 0.05, transform: "rotate(-15deg)" }}>
				<AutoStoriesIcon sx={{ fontSize: 180 }} />
			</Box>
		</Box>
	);
};
