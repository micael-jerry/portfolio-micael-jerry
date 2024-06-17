import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { IMAGES } from "../../assets";
import "./ContactSection.css";
import { ME } from "../../constants/me";
import { Footer } from "../../components/Footer/Footer";

export const ContactSection: React.FC = () => {
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "80vh",
				}}
			>
				<Grid container spacing={4} alignItems="center">
					<Grid item xs={12} md={6}>
						<Typography variant="h2" component="h1" gutterBottom>
							Contact Me
						</Typography>
						<Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
							<a href={`mailto:${ME.email.personal}`} target="_blank">
								<Button variant="contained" color="warning" size="large">
									Email
								</Button>
							</a>
							<Button
								href={ME.link.linkedIn}
								target="_blank"
								rel="noopener noreferrer"
								variant="outlined"
								color="warning"
								size="large"
							>
								LinkedIn
							</Button>
						</Box>
						<Typography variant="h6" component="p" sx={{ marginTop: 2 }}>
							Don't hesitate to contact me for more information!
						</Typography>
						<Typography variant="body1" component="p" sx={{ marginTop: 1 }}>
							I'd be delighted to discuss my projects and experiences, and talk
							about future opportunities. You can reach me by email or via
							LinkedIn.
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
			<Footer />
		</Box>
	);
};
