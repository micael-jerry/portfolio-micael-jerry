import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../assets/logo.png";
import { NavMenu } from "./NavMenu/NavMenu";

export type LayoutProps = {
	children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Box height={"100vh"}>
			<AppBar position="fixed" sx={{ background: "black" }}>
				<Toolbar>
					<Box flexGrow={1}>
						<AnchorLink>
							<Box display={"flex"} alignItems={"center"} gap={0.5}>
								<img width={"54px"} height={"54px"} alt="logo" src={logo} />
								<Typography variant="h5" sx={{ width: "fit-content" }}>
									Micael Jerry
								</Typography>
							</Box>
						</AnchorLink>
					</Box>
					<NavMenu />
				</Toolbar>
			</AppBar>
			<Box>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
