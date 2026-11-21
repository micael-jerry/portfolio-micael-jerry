import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "../../theme/ThemeContext";

export const ThemeToggle: React.FC = () => {
	const { mode, toggleTheme } = useThemeMode();
	const { i18n } = useTranslation();
	const isFr = i18n.language.startsWith("fr");

	const tooltipText =
		mode === "light"
			? isFr
				? "Passer en mode sombre"
				: "Switch to dark mode"
			: isFr
				? "Passer en mode clair"
				: "Switch to light mode";

	return (
		<Tooltip title={tooltipText}>
			<IconButton
				onClick={toggleTheme}
				aria-label="Toggle color theme"
				size="small"
				sx={{
					p: 0.9,
					borderRadius: 9999,
					border: "1px solid",
					borderColor: "divider",
					color: "text.primary",
					bgcolor: "transparent",
					transition: "all 0.2s ease",
					"&:hover": {
						bgcolor: "action.hover",
						borderColor: "text.secondary",
					},
				}}
			>
				{mode === "light" ? (
					<DarkModeOutlinedIcon sx={{ fontSize: 19 }} />
				) : (
					<LightModeOutlinedIcon sx={{ fontSize: 19 }} />
				)}
			</IconButton>
		</Tooltip>
	);
};
