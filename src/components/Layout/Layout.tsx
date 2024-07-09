import { AppBar, Avatar, Box, BoxProps, Toolbar, Typography } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavMenu } from "./NavMenu/NavMenu";
import { LOGO } from "../../assets";
import { SectionIdEnum } from "../../types/sectionId/sectionId";
import "./Layout.css";
import { ME } from "../../constants/user/me.ts";
import { useIsSmallScreen } from "../../hooks/useIsSmallScreen.ts";
import { useScreenSizeChecker } from "../../hooks/useScreenSizeChecker.ts";

export type LayoutProps = {
	children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const isSmall = useIsSmallScreen();
	const checkScreenWidth = useScreenSizeChecker(899);

	const otherProps: Partial<BoxProps> = checkScreenWidth
		? {
				mt: 5,
			}
		: {};

	return (
		<div id="layout">
			<AppBar position="fixed" sx={{ background: "transparent" }}>
				<Toolbar>
					<Box flexGrow={1}>
						<AnchorLink href={`#${SectionIdEnum.INTRO}`} offset={isSmall ? "56px" : "64px"} className="anchor-link">
							<Box display={"flex"} alignItems={"center"} gap={0.5} sx={{ cursor: "pointer" }}>
								<Avatar src={LOGO.logoApp} alt={"Logo"} />
								<Typography variant="h5" sx={{ width: "fit-content" }}>
									{ME.firstname}
								</Typography>
							</Box>
						</AnchorLink>
					</Box>
					<NavMenu />
				</Toolbar>
			</AppBar>
			<Box {...otherProps}>{children}</Box>
		</div>
	);
};
