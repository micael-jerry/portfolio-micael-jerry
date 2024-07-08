import { Button } from "@mui/material";
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
	const isSmallAttribut = isSmall
		? {
				onClick: onCloseHandler,
			}
		: {};

	return !isAnchorLink ? (
		<AnchorLink href={`#${to}`} key={to} offset={isSmall ? "56px" : "64px"} className="anchor-link">
			<Button
				color="inherit"
				variant={isSmall ? "text" : "outlined"}
				size="medium"
				fullWidth={isSmall}
				{...isSmallAttribut}
			>
				{text}
			</Button>
		</AnchorLink>
	) : (
		<Button
			href={to}
			target="_blank"
			color="inherit"
			variant={isSmall ? "text" : "outlined"}
			size="medium"
			fullWidth={isSmall}
			{...isSmallAttribut}
		>
			{text}
		</Button>
	);
};
