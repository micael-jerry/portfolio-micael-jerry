import "./AboutSection.css";
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { IMAGES } from "../../assets";
import { ME } from "../../constants/user/me.ts";

export const AboutSection: React.FC = () => {
	return (
		<Box>
			<Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
				<Grid container spacing={4} alignItems="center">
					<Grid item xs={12} md={6}>
						<Card
							sx={{
								boxShadow: 0,
								background: "transparent",
							}}
						>
							<img alt="contact illustrator" src={IMAGES.aboutMeImageIllustrator} id="about-me-illustrator" />
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h2" component="h1" gutterBottom>
							About Me
						</Typography>
						<Typography variant="h6" component="p" gutterBottom>
							Hello ! I'm {`${ME.name} ${ME.firstname}`}, a keen student who is currently in his third year at HEI and
							first year at 42, and is pursuing computer science studies with great enthusiasm.
						</Typography>
						<Typography variant="h6" component="p" gutterBottom>
							I have a diverse range of interests including web development and programming, which allow me to tackle
							various aspects of computer science with ease. I enjoy taking on creative challenges and designing
							innovative solutions to meet project needs.
						</Typography>
						<Typography variant="h6" component="p" gutterBottom>
							In my spare time, I like to explore new technologies, learn from online courses, and work on improving my
							skills through practical experiences. I believe in continuous learning and always strive to stay updated
							with the latest trends in the tech world.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
