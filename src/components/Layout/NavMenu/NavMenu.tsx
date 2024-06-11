import React from "react";
import { SectionIdEnum } from "../../../types/sectionId/sectionId";
import { Box, Button } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navigationItems = [
	{
		to: SectionIdEnum.INTRO,
		text: "Intro",
	},
	{
		to: SectionIdEnum.ABOUT,
		text: "About",
	},
	{
		to: SectionIdEnum.SKILLS,
		text: "Skills",
	},
	{
		to: SectionIdEnum.PROJECTS,
		text: "Projects",
	},
	{
		to: SectionIdEnum.CONTACT,
		text: "Contact",
	},
];

export const NavMenu: React.FC = () => {
	return (
		<Box>
			{navigationItems.map(({ to, text }) => {
				return (
					<AnchorLink href={`#${to}`} key={to}>
						<Button color="inherit" size="large">
							{text}
						</Button>
					</AnchorLink>
				);
			})}
		</Box>
	);
};
