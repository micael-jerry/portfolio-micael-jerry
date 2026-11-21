import CodeIcon from "@mui/icons-material/Code";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { cardSx } from "../../../utils/styles.ts";

interface AboutPassionsProps {
	variants?: Variants;
}

export const AboutPassions: React.FC<AboutPassionsProps> = ({ variants }) => {
	const { t } = useTranslation();

	const passions = [
		{
			icon: <CodeIcon sx={{ fontSize: 22 }} />,
			title: t("about.passions.coding_title"),
			description: t("about.passions.coding_desc"),
		},
		{
			icon: <LightbulbIcon sx={{ fontSize: 22 }} />,
			title: t("about.passions.solving_title"),
			description: t("about.passions.solving_desc"),
		},
		{
			icon: <RocketLaunchIcon sx={{ fontSize: 22 }} />,
			title: t("about.passions.learning_title"),
			description: t("about.passions.learning_desc"),
		},
	];

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
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h5" sx={{ fontWeight: 700, color: "text.primary", mb: 0.5, fontSize: "1.25rem" }}>
					{t("about.passions.title")}
				</Typography>
				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					{t("about.passions.subtitle")}
				</Typography>
			</Box>

			<Box display="flex" flexDirection="column" gap={2.5}>
				{passions.map((passion) => (
					<Box key={passion.title} display="flex" gap={2} alignItems="flex-start">
						<Box
							sx={{
								p: 1.2,
								borderRadius: 3,
								bgcolor: "action.hover",
								border: "1px solid",
								borderColor: "divider",
								color: "text.primary",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{passion.icon}
						</Box>
						<Box>
							<Typography variant="body1" sx={{ color: "text.primary", fontWeight: 700, mb: 0.3 }}>
								{passion.title}
							</Typography>
							<Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.5, fontSize: "0.85rem" }}>
								{passion.description}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};
