import { Box, Card } from "@mui/material";
import React from "react";
import { IMAGES } from "../../../assets";

export const IntroProfileImage: React.FC = () => {
	return (
		<Box
			sx={{
				position: "relative",
				width: { xs: 220, sm: 260, md: 320 },
				height: { xs: 220, sm: 260, md: 320 },
				mx: "auto",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					inset: -18,
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(255,193,7,0.25) 0%, transparent 70%)",
					filter: "blur(8px)",
					animation: "haloPulse 3s ease-in-out infinite alternate",
					zIndex: 1,
				}}
			/>
			<Card
				sx={{
					borderRadius: "50%",
					boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
					backgroundColor: "rgba(30,30,30,0.7)",
					overflow: "hidden",
					width: "100%",
					height: "100%",
					zIndex: 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				elevation={6}
			>
				<img
					alt="Micael Jerry Fidimalala - Software Engineer"
					src={IMAGES.jerryImg}
					id="jerry"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: "50%",
						border: "4px solid rgba(255,193,7,0.18)",
					}}
				/>
			</Card>
		</Box>
	);
};
