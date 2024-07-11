import { Box, BoxProps } from "@mui/material";
import React from "react";
import "./Layout.css";
import { useScreenSizeChecker } from "../../hooks/useScreenSizeChecker.ts";
import { NavBar } from "./NavBar/NavBar.tsx";

export type LayoutProps = {
	children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const checkScreenWidth = useScreenSizeChecker(899);

	const otherProps: Partial<BoxProps> = checkScreenWidth
		? {
				mt: 5,
			}
		: {};

	return (
		<div id="layout">
			<NavBar />
			<Box {...otherProps}>{children}</Box>
		</div>
	);
};
