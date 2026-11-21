import SchoolIcon from "@mui/icons-material/School";
import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { cardSx } from "../../../utils/styles.ts";

interface AboutEducationProps {
	variants?: Variants;
}

export const AboutEducation: React.FC<AboutEducationProps> = ({ variants }) => {
	const { t } = useTranslation();

	return (
		<Box
			component={motion.div}
			variants={variants}
			sx={{
				...cardSx,
				p: { xs: 3, md: 4 },
				height: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1.5 }}>
				<Box
					sx={{
						p: 1.2,
						borderRadius: 3,
						bgcolor: "action.hover",
						border: "1px solid",
						borderColor: "divider",
						display: "flex",
						alignItems: "center",
						color: "text.primary",
					}}
				>
					<SchoolIcon sx={{ fontSize: 22 }} />
				</Box>
				<Typography variant="h5" sx={{ fontWeight: 700, color: "text.primary", fontSize: "1.25rem" }}>
					{t("about.education.title")}
				</Typography>
			</Box>

			<Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, flex: 1 }}>
				<Box>
					<Typography variant="subtitle1" sx={{ color: "text.primary", fontWeight: 700, mb: 0.3 }}>
						{t("about.education.hei_school")}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, mb: 0.6 }}>
						{t("about.education.hei_degree")}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.85rem", lineHeight: 1.5 }}>
						{t("about.education.hei_desc")}
					</Typography>
				</Box>

				<Box sx={{ height: 1, width: "100%", bgcolor: "divider" }} />

				<Box>
					<Typography variant="subtitle1" sx={{ color: "text.primary", fontWeight: 700, mb: 0.3 }}>
						{t("about.education.42_school")}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, mb: 0.6 }}>
						{t("about.education.42_degree")}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.85rem", lineHeight: 1.5 }}>
						{t("about.education.42_desc")}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
