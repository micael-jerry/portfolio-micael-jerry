import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { ME } from "../../constants/me";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

export const Footer: React.FC = () => {
	return (
		<Grid
			component="footer"
			container
			alignItems={"center"}
			sx={{
				py: 3,
				px: 2,
				mt: "auto",
				backgroundColor: "transparent",
				borderTop: "1px solid white",
				color: "white",
				height: "15vh",
			}}
		>
			<Grid
				item
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
				md={6}
			>
				<Typography variant="h6">{ME.firstname} Portfolio</Typography>
				<Typography variant="body2">
					© {new Date().getFullYear()} Developed by {ME.firstname}
				</Typography>
			</Grid>
			<Grid
				item
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
				md={6}
			>
				<Box display={"flex"} alignItems={"center"} gap={0.5}>
					<Email />
					<Typography component={"p"} sx={{ mx: 1 }}>
						{ME.email.personal}
					</Typography>
				</Box>
				<Box display={"flex"} alignItems={"center"} gap={0.5}>
					<Phone />
					<Typography component={"p"} sx={{ mx: 1 }}>
						{ME.phone}
					</Typography>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<IconButton href={ME.link.linkedIn} target="_blank" color="inherit">
						<LinkedIn />
					</IconButton>
					<IconButton href={ME.link.github} target="_blank" color="inherit">
						<GitHub />
					</IconButton>
				</Box>
			</Grid>
		</Grid>
	);
};
