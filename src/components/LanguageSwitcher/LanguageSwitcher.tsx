import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();
	const isEn = i18n.language.startsWith("en");

	const toggle = () => {
		i18n.changeLanguage(isEn ? "fr" : "en");
	};

	return (
		<Box
			component={Button}
			onClick={toggle}
			aria-label="Toggle language"
			sx={{
				minWidth: 0,
				px: 1.5,
				py: 0.5,
				borderRadius: 2,
				fontWeight: 700,
				fontSize: "0.82rem",
				letterSpacing: "0.06em",
				color: "rgba(255,255,255,0.75)",
				border: "1.5px solid rgba(255,167,38,0.35)",
				background: "transparent",
				transition: "all 0.2s",
				"&:hover": {
					background: "rgba(255,167,38,0.10)",
					borderColor: "#ffa726",
					color: "#ffa726",
				},
			}}
		>
			{isEn ? "FR" : "EN"}
		</Box>
	);
};
