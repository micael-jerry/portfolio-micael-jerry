import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { ME } from "../../data/user/me.ts";

const socialLinks = [
	{
		icon: <LinkedIn fontSize="small" />,
		href: ME.link.linkedIn,
		label: "LinkedIn",
	},
	{
		icon: <GitHub fontSize="small" />,
		href: ME.link.github,
		label: "GitHub",
	},
];

const contactItems = [
	{ icon: <Email fontSize="small" />, value: ME.email.personal },
	{ icon: <Phone fontSize="small" />, value: ME.phone },
];

export const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Paper
			component="footer"
			elevation={0}
			sx={{
				mt: 8,
				pt: 6,
				pb: 4,
				px: { xs: 2, md: 6 },
				bgcolor: "transparent",
				borderTop: "1px solid",
				borderColor: "divider",
				borderRadius: 0,
			}}
		>
			{/* Top row */}
			<Box
				display="flex"
				flexDirection={{ xs: "column", md: "row" }}
				alignItems={{ xs: "flex-start", md: "center" }}
				justifyContent="space-between"
				gap={3}
			>
				{/* Brand */}
				<Box>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 700,
							letterSpacing: "-0.01em",
							color: "text.primary",
							mb: 0.5,
						}}
					>
						{ME.firstname} {ME.name}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
						{t("footer.tagline")}
					</Typography>
				</Box>

				{/* Contact info */}
				<Box display="flex" flexDirection="column" gap={0.8}>
					{contactItems.map(({ icon, value }) => (
						<Box key={value} display="flex" alignItems="center" gap={1} sx={{ color: "text.secondary" }}>
							<Box sx={{ color: "text.primary", display: "flex", opacity: 0.7 }}>{icon}</Box>
							<Typography variant="body2" sx={{ fontSize: "0.88rem" }}>
								{value}
							</Typography>
						</Box>
					))}
				</Box>

				{/* Social links */}
				<Box display="flex" gap={1}>
					{socialLinks.map(({ icon, href, label }) => (
						<Box key={label} component={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<IconButton
								href={href}
								target="_blank"
								aria-label={label}
								sx={{
									color: "text.primary",
									border: "1px solid",
									borderColor: "divider",
									borderRadius: 9999,
									p: 1,
									"&:hover": {
										bgcolor: "action.hover",
										borderColor: "text.primary",
									},
									transition: "all 0.2s ease",
								}}
							>
								{icon}
							</IconButton>
						</Box>
					))}
				</Box>
			</Box>

			<Divider sx={{ my: 4 }} />

			{/* Bottom row */}
			<Box
				display="flex"
				flexDirection={{ xs: "column", sm: "row" }}
				alignItems="center"
				justifyContent="space-between"
				gap={1}
			>
				<Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8rem" }}>
					© {new Date().getFullYear()} {ME.firstname} {ME.name}. {t("footer.copyright")}
				</Typography>
				<Typography variant="body2" sx={{ color: "text.secondary", opacity: 0.7, fontSize: "0.8rem" }}>
					{t("footer.built_with")}
				</Typography>
			</Box>
		</Paper>
	);
};
