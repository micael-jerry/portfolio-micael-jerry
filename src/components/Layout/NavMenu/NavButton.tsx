import { Button, ButtonProps } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface NavButtonProps {
	to: string;
	text: string;
	isSmall: boolean;
	isAnchorLink: boolean;
	onCloseHandler: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({ to, text, isSmall, isAnchorLink, onCloseHandler }) => {
	const desktopSx: ButtonProps["sx"] = {
		color: "text.secondary",
		fontWeight: 600,
		fontSize: "0.9rem",
		px: 1.8,
		py: 0.7,
		borderRadius: 9999,
		textTransform: "none",
		transition: "all 0.2s ease",
		"&:hover": {
			color: "text.primary",
			bgcolor: "action.hover",
		},
	};

	const mobileSx: ButtonProps["sx"] = {
		color: "text.primary",
		fontWeight: 700,
		fontSize: "1.25rem",
		py: 1.4,
		px: 3,
		borderRadius: 3,
		width: "100%",
		justifyContent: "center",
		textTransform: "none",
		"&:hover": {
			bgcolor: "action.hover",
		},
		transition: "all 0.2s ease",
	};

	const commonProps = {
		component: motion.button as React.ElementType,
		size: "medium" as const,
		variant: "text" as const,
		fullWidth: isSmall,
		whileTap: { scale: 0.97 },
		sx: isSmall ? mobileSx : desktopSx,
		onClick: isSmall ? onCloseHandler : undefined,
	};

	if (isAnchorLink) {
		return (
			<Button {...commonProps} component={motion.a} href={to} target="_blank">
				{text}
			</Button>
		);
	}

	return (
		<AnchorLink href={`#${to}`} offset={isSmall ? "60px" : "68px"} className="anchor-link">
			<Button {...commonProps}>{text}</Button>
		</AnchorLink>
	);
};
