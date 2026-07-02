import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { COLOR_ERROR, COLOR_SUCCESS, COLOR_WARNING } from "../../../utils/color.ts";

interface ContactFormState {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormErrors {
	email?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC = () => {
	const { t } = useTranslation();
	const [formState, setFormState] = useState<ContactFormState>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [formErrors, setFormErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
	const resetTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

	// Cleanup du timer au démontage pour éviter les memory leaks
	useEffect(() => {
		return () => {
			clearTimeout(resetTimerRef.current);
		};
	}, []);

	const validate = (): boolean => {
		const errors: FormErrors = {};
		if (!EMAIL_REGEX.test(formState.email)) {
			errors.email = t("contact.form.email_invalid");
		}
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	// Updater function pour éviter la stale closure sur l'ancien state
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
		// Effacer l'erreur de validation si l'utilisateur corrige le champ
		if (formErrors[name as keyof FormErrors]) {
			setFormErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const scheduleReset = () => {
		clearTimeout(resetTimerRef.current);
		resetTimerRef.current = setTimeout(() => {
			setSubmitStatus("idle");
		}, 5000);
	};

	const handleSubmit = async (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		if (!validate()) return;
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
			scheduleReset();
		} catch (error) {
			console.error("Failed to send email:", error);
			setSubmitStatus("error");
			scheduleReset();
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
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
							label={t("contact.form.name")}
							name="name"
							value={formState.name}
							onChange={handleChange}
							required
							variant="filled"
							className="glass-input"
							slotProps={{ input: { disableUnderline: true } }}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							fullWidth
							label={t("contact.form.email")}
							name="email"
							type="email"
							value={formState.email}
							onChange={handleChange}
							required
							variant="filled"
							className="glass-input"
							slotProps={{ input: { disableUnderline: true } }}
							error={!!formErrors.email}
							helperText={formErrors.email}
						/>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<TextField
							fullWidth
							label={t("contact.form.subject")}
							name="subject"
							value={formState.subject}
							onChange={handleChange}
							required
							variant="filled"
							className="glass-input"
							slotProps={{ input: { disableUnderline: true } }}
						/>
					</Grid>
					<Grid size={{ xs: 12 }}>
						<TextField
							fullWidth
							label={t("contact.form.message")}
							name="message"
							multiline
							rows={4}
							value={formState.message}
							onChange={handleChange}
							required
							variant="filled"
							className="glass-input"
							slotProps={{ input: { disableUnderline: true } }}
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
						{isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
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

				{submitStatus === "success" && (
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
						<Typography
							sx={{
								color: COLOR_SUCCESS.main,
								backgroundColor: COLOR_SUCCESS.bg,
								p: 2,
								borderRadius: 2,
								border: `1px solid ${COLOR_SUCCESS.border}`,
								mt: 1,
								fontWeight: 500,
								display: "flex",
								alignItems: "center",
								gap: 1,
							}}
						>
							{t("contact.form.success")}
						</Typography>
					</motion.div>
				)}

				{submitStatus === "error" && (
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
						<Typography
							sx={{
								color: COLOR_ERROR.main,
								backgroundColor: COLOR_ERROR.bg,
								p: 2,
								borderRadius: 2,
								border: `1px solid ${COLOR_ERROR.border}`,
								mt: 1,
								fontWeight: 500,
							}}
						>
							{t("contact.form.error")}
						</Typography>
					</motion.div>
				)}
			</Box>
		</Box>
	);
};
