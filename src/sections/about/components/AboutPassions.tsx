import CodeIcon from "@mui/icons-material/Code";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { COLOR_ACCENT, COLOR_SUCCESS, COLOR_WARNING } from "../../../utils/color.ts";
import { glassSx } from "../../../utils/styles.ts";

interface AboutPassionsProps {
	variants?: Variants;
}

export const AboutPassions: React.FC<AboutPassionsProps> = ({ variants }) => {
	const { t } = useTranslation();

	const passions = [
		{
			icon: <CodeIcon sx={{ color: COLOR_WARNING.main, fontSize: 28 }} />,
			title: t("about.passions.coding_title"),
			description: t("about.passions.coding_desc"),
		},
		{
			icon: <LightbulbIcon sx={{ color: COLOR_ACCENT.main, fontSize: 28 }} />,
			title: t("about.passions.solving_title"),
			description: t("about.passions.solving_desc"),
		},
		{
			icon: <RocketLaunchIcon sx={{ color: COLOR_SUCCESS.main, fontSize: 28 }} />,
			title: t("about.passions.learning_title"),
			description: t("about.passions.learning_desc"),
		},
	];

	return (
		<Box
			component={motion.div}
			variants={variants}
			whileHover={{ scale: 1.02, boxShadow: `0 12px 40px 0 ${COLOR_WARNING.bgStrong}` }}
			transition={{ type: "spring", stiffness: 200 }}
			sx={{
				...glassSx,
				p: { xs: 3, md: 4 },
				boxShadow: `0 4px 24px 0 ${COLOR_WARNING.bg}`,
				border: `1px solid ${COLOR_WARNING.bg}`,
				position: "relative",
				overflow: "hidden",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
					{t("about.passions.title")}
				</Typography>
				<Typography variant="body2" sx={{ color: "#9e9e9e" }}>
					{t("about.passions.subtitle")}
				</Typography>
			</Box>

			<Box display="flex" flexDirection="column" gap={3}>
				{passions.map((passion) => (
					<Box key={passion.title} display="flex" gap={2} alignItems="flex-start">
						<Box
							sx={{
								p: 1.5,
								borderRadius: 2,
								background: "rgba(255,255,255,0.03)",
								border: "1px solid rgba(255,255,255,0.08)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{passion.icon}
						</Box>
						<Box>
							<Typography variant="body1" sx={{ color: "#e0e0e0", fontWeight: 600, mb: 0.5 }}>
								{passion.title}
							</Typography>
							<Typography variant="body2" sx={{ color: "#9e9e9e", lineHeight: 1.5 }}>
								{passion.description}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};
