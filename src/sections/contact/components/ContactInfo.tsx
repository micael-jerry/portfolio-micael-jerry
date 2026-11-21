import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { ME } from "../../../data/user/me.ts";

export const ContactInfo: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Box
			component={motion.div}
			initial={{ opacity: 0, x: -30 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<Typography
				component="h2"
				variant="h2"
				sx={{
					fontWeight: 800,
					fontSize: { xs: "2rem", md: "2.5rem" },
					mb: 2,
					letterSpacing: "-0.025em",
					color: "text.primary",
				}}
			>
				{t("contact.heading")}
			</Typography>

			<Typography
				variant="h6"
				component="p"
				sx={{ color: "text.primary", mb: 1.5, fontWeight: 600, fontSize: "1.1rem" }}
			>
				{t("contact.subtitle")}
			</Typography>
			<Typography variant="body1" component="p" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.6 }}>
				{t("contact.body")}
			</Typography>

			<Box display="flex" flexDirection="column" gap={2}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 2,
						p: 2,
						borderRadius: 3,
						bgcolor: "background.paper",
						border: "1px solid",
						borderColor: "divider",
						width: "fit-content",
					}}
				>
					<Box
						sx={{
							p: 1.2,
							borderRadius: 2.5,
							bgcolor: "action.hover",
							color: "text.primary",
							display: "flex",
							alignItems: "center",
						}}
					>
						<EmailIcon sx={{ fontSize: 22 }} />
					</Box>
					<Box>
						<Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600, display: "block" }}>
							{t("contact.email_label")}
						</Typography>
						<Typography
							component="a"
							href={`mailto:${ME.email.personal}`}
							sx={{
								color: "text.primary",
								textDecoration: "none",
								fontWeight: 600,
								fontSize: "0.95rem",
								"&:hover": { textDecoration: "underline" },
							}}
						>
							{ME.email.personal}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
