import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ME } from "../../../data/user/me.ts";
import { Footer } from "../../components/Footer/Footer";
import { COLOR_WARNING } from "../../utils/color.ts";
import "./ContactSection.css";

// Form state interface
interface ContactFormState {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export const ContactSection: React.FC = () => {
	const [formState, setFormState] = useState<ContactFormState>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: formState.name,
					reply_to: formState.email,
					subject: formState.subject,
					message: formState.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);

			setSubmitStatus("success");
			setFormState({ name: "", email: "", subject: "", message: "" });
			setTimeout(() => {
				setSubmitStatus("idle");
			}, 5000);
		} catch (error) {
			console.error("Failed to send email:", error);
			setSubmitStatus("error");
			setTimeout(() => {
				setSubmitStatus("idle");
			}, 5000);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Box component="section" sx={{ position: "relative", minHeight: { xs: "70vh", md: "80vh" }, pb: 0 }}>
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
				<Grid container spacing={6} alignItems="stretch" justifyContent="center">
					<Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
									fontWeight: 800,
									fontSize: { xs: "2.2rem", md: "2.8rem" },
									mb: 2,
									letterSpacing: 1,
									background: `linear-gradient(135deg, ${COLOR_WARNING.main} 0%, #00c9ff 100%)`,
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								Let's Connect
							</Typography>

							<Box
								sx={{
									height: 3,
									width: 60,
									background: `linear-gradient(90deg, ${COLOR_WARNING.main} 0%, transparent 100%)`,
									borderRadius: 2,
									mb: 4,
								}}
							/>

							<Typography variant="h6" component="p" sx={{ color: "#e0e0e0", mb: 2, fontWeight: 500, lineHeight: 1.6 }}>
								Have a project in mind or just want to say hi? I'd love to hear from you.
							</Typography>
							<Typography variant="body1" component="p" sx={{ color: "#bdbdbd", mb: 5, lineHeight: 1.6 }}>
								Whether it's a job opportunity, a freelance project, or a technical discussion, my inbox is always open.
								Fill out the form and I'll get back to you as soon as possible.
							</Typography>

							<Box display="flex" flexDirection="column" gap={3}>
								<Box display="flex" alignItems="center" gap={2}>
									<Box
										sx={{
											p: 1.5,
											borderRadius: 2,
											background: "rgba(255,193,7,0.1)",
											border: `1px solid rgba(255,193,7,0.2)`,
											display: "flex",
											alignItems: "center",
										}}
									>
										<EmailIcon sx={{ color: COLOR_WARNING.main }} />
									</Box>
									<Box>
										<Typography variant="body2" sx={{ color: "#9e9e9e", fontWeight: 600 }}>
											Email
										</Typography>
										<Typography
											component="a"
											href={`mailto:${ME.email.personal}`}
											sx={{
												color: "#fff",
												textDecoration: "none",
												fontWeight: 500,
												"&:hover": { color: COLOR_WARNING.main },
											}}
										>
											{ME.email.personal}
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>

					{/* Contact Form Section */}
					<Grid size={{ xs: 12, md: 7 }}>
						<Box
							component={motion.div}
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
							sx={{
								display: "flex",
								justifyContent: "center",
								height: "100%",
							}}
						>
							<Box
								component="form"
								onSubmit={handleSubmit}
								sx={{
									width: "100%",
									maxWidth: 600,
									p: { xs: 3, md: 5 },
									borderRadius: 4,
									background: "linear-gradient(135deg, rgba(30,30,40,0.8) 0%, rgba(20,20,30,0.6) 100%)",
									backdropFilter: "blur(16px)",
									border: "1px solid rgba(255,255,255,0.08)",
									boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2)",
									display: "flex",
									flexDirection: "column",
									gap: 3,
								}}
							>
								<Grid container spacing={3}>
									<Grid size={{ xs: 12, sm: 6 }}>
										<TextField
											fullWidth
											label="Your Name"
											name="name"
											value={formState.name}
											onChange={handleChange}
											required
											variant="filled"
											className="glass-input"
											InputProps={{ disableUnderline: true }}
										/>
									</Grid>
									<Grid size={{ xs: 12, sm: 6 }}>
										<TextField
											fullWidth
											label="Email Address"
											name="email"
											type="email"
											value={formState.email}
											onChange={handleChange}
											required
											variant="filled"
											className="glass-input"
											InputProps={{ disableUnderline: true }}
										/>
									</Grid>
									<Grid size={{ xs: 12 }}>
										<TextField
											fullWidth
											label="Subject"
											name="subject"
											value={formState.subject}
											onChange={handleChange}
											required
											variant="filled"
											className="glass-input"
											InputProps={{ disableUnderline: true }}
										/>
									</Grid>
									<Grid size={{ xs: 12 }}>
										<TextField
											fullWidth
											label="Message"
											name="message"
											multiline
											rows={4}
											value={formState.message}
											onChange={handleChange}
											required
											variant="filled"
											className="glass-input"
											InputProps={{ disableUnderline: true }}
										/>
									</Grid>
								</Grid>

								<Box sx={{ mt: 1, position: "relative" }}>
									<Button
										type="submit"
										variant="contained"
										color="warning"
										size="large"
										disabled={isSubmitting}
										endIcon={isSubmitting ? null : <SendIcon />}
										component={motion.button}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										sx={{
											fontWeight: 700,
											py: 1.5,
											px: 4,
											borderRadius: 2,
											boxShadow: "0 4px 20px 0 rgba(255,193,7,0.2)",
											width: { xs: "100%", sm: "auto" },
										}}
									>
										{isSubmitting ? "Sending..." : "Send Message"}
									</Button>

									{isSubmitting && (
										<CircularProgress
											size={24}
											sx={{
												color: COLOR_WARNING.main,
												position: "absolute",
												top: "50%",
												left: { xs: "50%", sm: 110 },
												marginTop: "-12px",
												marginLeft: "-12px",
											}}
										/>
									)}
								</Box>

								{/* Success Message Banner */}
								{submitStatus === "success" && (
									<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
										<Typography
											sx={{
												color: "#4caf50",
												bgcolor: "rgba(76, 175, 80, 0.1)",
												p: 2,
												borderRadius: 2,
												border: "1px solid rgba(76, 175, 80, 0.3)",
												mt: 1,
												fontWeight: 500,
												display: "flex",
												alignItems: "center",
												gap: 1,
											}}
										>
											🎉 Thanks! Your message has been sent. I'll get back to you soon.
										</Typography>
									</motion.div>
								)}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</Box>
	);
};
