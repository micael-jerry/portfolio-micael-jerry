import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { IMAGES } from "../../assets";
import "./ContactSection.css";

export const ContactSection: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<Grid container spacing={4} alignItems="center">
				<Grid item xs={12} md={6}>
					<Typography variant="h2" component="h1" gutterBottom>
						Me Contacter
					</Typography>
					<Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
						<Button variant="contained" color="warning" size="large">
							Email
						</Button>
						<Button variant="outlined" color="warning" size="large">
							LinkedIn
						</Button>
					</Box>
					<Typography variant="h6" component="p" sx={{ marginTop: 2 }}>
						N'hésitez pas à me contacter pour en savoir plus !
					</Typography>
					<Typography variant="body1" component="p" sx={{ marginTop: 1 }}>
						Je serais ravi de discuter de mes projets et de mes expériences, et
						d'échanger sur les opportunités futures. Vous pouvez me joindre par
						email ou via LinkedIn.
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card
						sx={{
							boxShadow: 0,
							background: "transparent",
						}}
					>
						<img
							alt="contact illustrator"
							src={IMAGES.contactImageIllustrator}
							id="contact-img-illustrator"
						/>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};
