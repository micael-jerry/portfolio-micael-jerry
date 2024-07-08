import { Button, ButtonProps } from "@mui/material";
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
	const isSmallAttribut: Partial<ButtonProps> = isSmall
		? {
				onClick: onCloseHandler,
				color: "warning",
				variant: "text",
			}
		: {
				color: "inherit",
				variant: "outlined",
			};

	return !isAnchorLink ? (
		<AnchorLink href={`#${to}`} key={to} offset={isSmall ? "56px" : "64px"} className="anchor-link">
			<Button size="medium" fullWidth={isSmall} {...isSmallAttribut}>
				{text}
			</Button>
		</AnchorLink>
	) : (
		<Button component="a" href={to} target="_blank" size="medium" fullWidth={isSmall} {...isSmallAttribut}>
			{text}
		</Button>
	);
};
