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
			<Card
				sx={{
					borderRadius: "50%",
					bgcolor: "background.paper",
					border: "3px solid",
					borderColor: "divider",
					boxShadow: (theme) =>
						theme.palette.mode === "light"
							? "0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)"
							: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
					overflow: "hidden",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					transition: "transform 0.3s ease, box-shadow 0.3s ease",
					"&:hover": {
						transform: "scale(1.02)",
					},
				}}
				elevation={0}
			>
				<img
					alt="Micael Jerry Fidimalala - Software Engineer"
					src={IMAGES.jerryImg}
					id="jerry"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</Card>
		</Box>
	);
};
