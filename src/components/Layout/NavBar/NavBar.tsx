import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ME } from "../../../../data/user/me";
import { LOGO } from "../../../assets";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen";
import { SectionIdEnum } from "../../../types/sectionId/sectionId.type";
import { COLOR_MAIN } from "../../../utils/color";
import { NavMenu } from "../NavMenu/NavMenu";

export const NavBar: React.FC = () => {
	const isSmall = useIsSmallScreen();
	return (
		<AppBar position="fixed" sx={{ backgroundColor: COLOR_MAIN }}>
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
	);
};
