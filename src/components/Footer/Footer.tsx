import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { ME } from "../../constants/user/me.ts";
import { Email, GitHub, Instagram, LinkedIn, Phone } from "@mui/icons-material";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
	return (
		<Grid
			component="footer"
			container
			alignItems={"center"}
			py={3}
			px={2}
			mt={"auto"}
			borderTop={"1px solid white"}
			color={"white"}
			sx={{
				backgroundColor: "transparent",
			}}
		>
			<Grid item display={"flex"} flexDirection={"column"} md={6}>
				<Typography variant="h6">{ME.firstname} Portfolio</Typography>
				<Typography variant="body2">
					© {new Date().getFullYear()} Developed by {ME.firstname}
				</Typography>
			</Grid>
			<Grid item display={"flex"} flexDirection={"column"} md={6}>
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
					<Box component={motion.div} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }}>
						<IconButton href={ME.link.linkedIn} target="_blank" color="inherit">
							<LinkedIn />
						</IconButton>
					</Box>
					<Box component={motion.div} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }}>
						<IconButton href={ME.link.github} target="_blank" color="inherit">
							<GitHub />
						</IconButton>
					</Box>
					<Box component={motion.div} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }}>
						<IconButton href={ME.link.instagram} target="_blank" color="inherit">
							<Instagram />
						</IconButton>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};
