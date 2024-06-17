import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavMenu } from "./NavMenu/NavMenu";
import { LOGO } from "../../assets";
import { SectionIdEnum } from "../../types/sectionId/sectionId";
import "./Layout.css";
import { ME } from "../../constants/me";

export type LayoutProps = {
	children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div id="layout">
			<AppBar position="fixed" sx={{ background: "transparent" }}>
				<Toolbar>
					<Box flexGrow={1}>
						<AnchorLink
							href={`#${SectionIdEnum.INTRO}`}
							className="anchor-link"
						>
							<Box display={"flex"} alignItems={"center"} gap={0.5}>
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
			<Box>{children}</Box>
		</div>
	);
};