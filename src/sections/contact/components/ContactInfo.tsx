import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ME } from "../../../../data/user/me.ts";
import { COLOR_WARNING } from "../../../utils/color.ts";

export const ContactInfo: React.FC = () => {
	return (
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
				Whether it's a job opportunity, a freelance project, or a technical discussion, my inbox is always open. Fill
				out the form and I'll get back to you as soon as possible.
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
	);
};
