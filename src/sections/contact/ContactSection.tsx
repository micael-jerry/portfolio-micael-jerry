import EmailIcon from "@mui/icons-material/Email";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ME } from "../../../data/user/me.ts";
import { IMAGES } from "../../assets";
import { Footer } from "../../components/Footer/Footer";
import { COLOR_WARNING } from "../../utils/color.ts";
import "./ContactSection.css";

export const ContactSection: React.FC = () => {
	return (
		<Box sx={{ position: "relative", minHeight: { xs: "70vh", md: "80vh" }, pb: 0 }}>
			<motion.div
				style={{
					position: "absolute",
					right: "0%",
					top: "10%",
					width: "60%",
					height: "70%",
					zIndex: 0,
					background: "radial-gradient(circle at 70% 40%, rgba(255,193,7,0.13) 0%, transparent 80%)",
					filter: "blur(32px)",
				}}
				animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
				transition={{ duration: 7, repeat: Infinity }}
			/>
			<Box display={"flex"} alignItems={"center"} sx={{ position: "relative", zIndex: 1, minHeight: "60vh" }}>
				<Grid container spacing={4} alignItems="center" justifyContent="center">
					<Grid item xs={12} md={6}>
						<Box
							component={motion.div}
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
						>
							<Typography
								component={motion.h2}
								variant="h2"
								gutterBottom
								whileHover={{ color: COLOR_WARNING.dark }}
								sx={{
									fontWeight: 700,
									fontSize: { xs: "2rem", md: "2.4rem" },
									mb: 2,
									letterSpacing: 1,
								}}
							>
								Contact Me
							</Typography>
							<Box display={"flex"} gap={2} mt={4}>
								<Button
									variant="contained"
									color="warning"
									size="large"
									startIcon={<EmailIcon />}
									href={`mailto:${ME.email.personal}`}
									target="_blank"
									sx={{
										borderRadius: 3,
										fontWeight: 600,
										px: 4,
										boxShadow: "0 4px 24px 0 rgba(255,193,7,0.13)",
										fontSize: "1.1rem",
									}}
								>
									Email
								</Button>
							{/* INFO: enable when have a linkedin account */}
								{/* <Button
									href={ME.link.linkedIn}
									target="_blank"
									rel="noopener noreferrer"
									variant="outlined"
									color="warning"
									size="large"
									startIcon={<LinkedInIcon />}
									sx={{
										borderRadius: 3,
										fontWeight: 600,
										px: 4,
										fontSize: "1.1rem",
										borderWidth: 2,
									}}
								>
									LinkedIn
								</Button> */}
							</Box>
							<Typography variant="h6" component="p" sx={{ marginTop: 3, color: "#bdbdbd" }}>
								Don't hesitate to contact me for more information!
							</Typography>
							<Typography variant="body1" component="p" sx={{ marginTop: 1, color: "#bdbdbd" }}>
								I'd be delighted to discuss my projects and experiences, and talk about future opportunities. You can
								reach me by email or via LinkedIn.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							component={motion.div}
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
							sx={{ display: "flex", justifyContent: "center" }}
						>
							<Card
								sx={{
									boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
									background: "rgba(255,255,255,0.04)",
									borderRadius: 4,
									overflow: "hidden",
									width: { xs: 260, sm: 320, md: 380 },
									height: { xs: 180, sm: 220, md: 260 },
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
								elevation={4}
							>
								<img
									alt="contact illustration"
									src={IMAGES.contactImageIllustrator}
									id="contact-img-illustrator"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
										background: "transparent",
										borderRadius: 16,
									}}
								/>
							</Card>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</Box>
	);
};
