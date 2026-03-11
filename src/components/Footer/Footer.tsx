import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { ME } from "../../data/user/me.ts";

const socialLinks = [
	{
		icon: <LinkedIn />,
		href: ME.link.linkedIn,
		color: "#0a66c2",
		label: "LinkedIn",
	},
	{
		icon: <GitHub />,
		href: ME.link.github,
		color: "#e0e0e0",
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
				py: 4,
				px: { xs: 3, md: 8 },
				background: "rgba(7, 0, 45, 0.75)",
				backdropFilter: "blur(16px)",
				borderTop: "1px solid rgba(255,255,255,0.08)",
				borderRadius: 0,
				color: "white",
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
							fontWeight: 800,
							letterSpacing: "0.06em",
							background: "linear-gradient(90deg, #fff 50%, #ffa726 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							mb: 0.5,
						}}
					>
						{ME.firstname} Portfolio
					</Typography>
					<Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>
						{t("footer.tagline")}
					</Typography>
				</Box>

				{/* Contact info */}
				<Box display="flex" flexDirection="column" gap={0.8}>
					{contactItems.map(({ icon, value }) => (
						<Box key={value} display="flex" alignItems="center" gap={1} sx={{ color: "rgba(255,255,255,0.7)" }}>
							<Box sx={{ color: "#ffa726", display: "flex" }}>{icon}</Box>
							<Typography variant="body2" sx={{ fontSize: "0.88rem" }}>
								{value}
							</Typography>
						</Box>
					))}
				</Box>

				{/* Social links */}
				<Box display="flex" gap={1}>
					{socialLinks.map(({ icon, href, color, label }) => (
						<Box key={label} component={motion.div} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}>
							<IconButton
								href={href}
								target="_blank"
								aria-label={label}
								sx={{
									color,
									border: "1.5px solid rgba(255,255,255,0.12)",
									borderRadius: 2,
									p: 1,
									"&:hover": {
										background: "rgba(255,255,255,0.08)",
										borderColor: "rgba(255,255,255,0.3)",
									},
									transition: "all 0.2s",
								}}
							>
								{icon}
							</IconButton>
						</Box>
					))}
				</Box>
			</Box>

			<Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.07)" }} />

			{/* Bottom row */}
			<Box
				display="flex"
				flexDirection={{ xs: "column", sm: "row" }}
				alignItems="center"
				justifyContent="space-between"
				gap={1}
			>
				<Typography variant="body2" sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
					© {new Date().getFullYear()} {ME.firstname}. {t("footer.copyright")}
				</Typography>
				<Typography variant="body2" sx={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
					{t("footer.built_with")}
				</Typography>
			</Box>
		</Paper>
	);
};
