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
		color: "rgba(255,255,255,0.85)",
		fontWeight: 500,
		fontSize: "0.88rem",
		letterSpacing: "0.05em",
		px: 1.5,
		py: 0.75,
		borderRadius: 2,
		position: "relative",
		"&::after": {
			content: '""',
			position: "absolute",
			bottom: 4,
			left: "50%",
			transform: "translateX(-50%)",
			width: 0,
			height: "2px",
			background: "#ffa726",
			borderRadius: 1,
			transition: "width 0.25s ease",
		},
		"&:hover": {
			background: "rgba(255,255,255,0.06)",
			color: "#fff",
			"&::after": {
				width: "60%",
			},
		},
	};

	const mobileSx: ButtonProps["sx"] = {
		color: "rgba(255,255,255,0.9)",
		fontWeight: 600,
		fontSize: "1.4rem",
		letterSpacing: "0.04em",
		py: 1.2,
		borderRadius: 2,
		width: "100%",
		justifyContent: "center",
		"&:hover": {
			background: "rgba(255,167,38,0.1)",
			color: "#ffa726",
		},
		transition: "all 0.2s",
	};

	const commonProps = {
		component: motion.button as React.ElementType,
		size: "medium" as const,
		variant: "text" as const,
		fullWidth: isSmall,
		whileTap: { scale: 0.96 },
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
