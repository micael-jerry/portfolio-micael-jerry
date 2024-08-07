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
	const otherProps: Partial<ButtonProps> = isSmall
		? {
				onClick: onCloseHandler,
				color: "warning",
				sx: {
					fontSize: "30px",
				},
			}
		: {
				color: "inherit",
			};

	return !isAnchorLink ? (
		<AnchorLink href={`#${to}`} key={to} offset={isSmall ? "56px" : "64px"} className="anchor-link">
			<Button
				component={motion.button}
				size="medium"
				variant="text"
				fullWidth={isSmall}
				{...otherProps}
				whileHover={{ scale: 1.5 }}
				whileTap={{ scale: 0.95 }}
			>
				{text}
			</Button>
		</AnchorLink>
	) : (
		<Button
			component={motion.a}
			href={to}
			target="_blank"
			size="medium"
			variant="text"
			fullWidth={isSmall}
			{...otherProps}
			whileHover={{ scale: 1.5 }}
			whileTap={{ scale: 0.95 }}
		>
			{text}
		</Button>
	);
};
