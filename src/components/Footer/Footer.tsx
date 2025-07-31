import { Email, GitHub, Instagram, LinkedIn, Phone } from "@mui/icons-material";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ME } from "../../../data/user/me.ts";

export const Footer: React.FC = () => {
	return (
		<Paper
			component="footer"
			elevation={0}
			sx={{
				mt: 8,
				py: 3,
				px: 2,
				borderTop: "1px solid #fff2",
				color: "white",
				background: "rgba(20, 20, 30, 0.65)",
				backdropFilter: "blur(8px)",
				borderRadius: 0,
			}}
		>
			<Grid container alignItems={"center"} spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography variant="h6" sx={{ fontWeight: 700 }}>
						{ME.firstname} Portfolio
					</Typography>
					<Typography variant="body2" sx={{ color: "#bdbdbd" }}>
						© {new Date().getFullYear()} Developed by {ME.firstname}
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box display={"flex"} flexDirection={"column"} gap={1} alignItems={{ xs: "flex-start", md: "flex-end" }}>
						<Box display={"flex"} alignItems={"center"} gap={1}>
							<Typography component={"p"} sx={{ mx: 1 }}>
								{ME.email.personal}
							</Typography>
							<Email sx={{ color: "#ffc107" }} />
						</Box>
						<Box display={"flex"} alignItems={"center"} gap={1}>
							<Typography component={"p"} sx={{ mx: 1 }}>
								{ME.phone}
							</Typography>
							<Phone sx={{ color: "#ffc107" }} />
						</Box>
						<Box display={"flex"} alignItems={"center"} gap={1} mt={1}>
							<Box component={motion.div} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}>
								<IconButton href={ME.link.linkedIn} target="_blank" color="inherit" sx={{ color: "#0a66c2" }}>
									<LinkedIn />
								</IconButton>
							</Box>
							<Box component={motion.div} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}>
								<IconButton href={ME.link.github} target="_blank" color="inherit" sx={{ color: "#fff" }}>
									<GitHub />
								</IconButton>
							</Box>
							<Box component={motion.div} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}>
								<IconButton href={ME.link.instagram} target="_blank" color="inherit" sx={{ color: "#e1306c" }}>
									<Instagram />
								</IconButton>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};
