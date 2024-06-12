import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavMenu } from "./NavMenu/NavMenu";
import { IMAGES } from "../../assets";
import { SectionIdEnum } from "../../types/sectionId/sectionId";

export type LayoutProps = {
	children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div id="layout">
			<AppBar position="fixed" sx={{ background: "transparent" }}>
				<Toolbar>
					<Box flexGrow={1}>
						<AnchorLink href={`#${SectionIdEnum.INTRO}`}>
							<Box display={"flex"} alignItems={"center"} gap={0.5}>
								<img
									width={"40px"}
									height={"30px"}
									alt="logo"
									src={IMAGES.logo}
								/>
								<Typography variant="h5" sx={{ width: "fit-content" }}>
									Micael Jerry
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
