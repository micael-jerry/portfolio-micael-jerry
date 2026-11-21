import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();
	const isEn = i18n.language.startsWith("en");

	const toggle = () => {
		i18n.changeLanguage(isEn ? "fr" : "en");
	};

	return (
		<Button
			onClick={toggle}
			aria-label="Toggle language"
			size="small"
			variant="text"
			sx={{
				minWidth: 0,
				px: 1.4,
				py: 0.5,
				borderRadius: 9999,
				fontWeight: 700,
				fontSize: "0.8rem",
				letterSpacing: "0.04em",
				color: "text.primary",
				border: "1px solid",
				borderColor: "divider",
				bgcolor: "transparent",
				transition: "all 0.2s ease",
				"&:hover": {
					bgcolor: "action.hover",
					borderColor: "text.secondary",
				},
			}}
		>
			{isEn ? "FR" : "EN"}
		</Button>
	);
};
