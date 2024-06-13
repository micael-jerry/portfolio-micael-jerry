import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { ME } from "../../constants/me";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

export const Footer: React.FC = () => {
	return (
		<Box
			component="footer"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				py: 3,
				px: 2,
				mt: "auto",
				backgroundColor: "transparent",
				borderTop: "1px solid white",
				color: "white",
				height: "15vh",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography variant="h6">{ME.firstname} Portfolio</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						mb: 2,
					}}
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
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography variant="body2">
						© {new Date().getFullYear()} Developed by {ME.firstname}
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{ display: "flex", justifyContent: "center", mb: 2 }}
				>
					<IconButton href={ME.link.linkedIn} target="_blank" color="inherit">
						<LinkedIn />
					</IconButton>
					<IconButton href={ME.link.github} target="_blank" color="inherit">
						<GitHub />
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	);
};
