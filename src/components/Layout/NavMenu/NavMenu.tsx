import React from "react";
import { SectionIdEnum } from "../../../types/sectionId/sectionId";
import { Avatar, Box, Button } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ME } from "../../../constants/me";
import { LOGO } from "../../../assets";

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
					<AnchorLink href={`#${to}`} key={to} className="anchor-link">
						<Button color="inherit" size="large">
							{text}
						</Button>
					</AnchorLink>
				);
			})}
			<Button color="inherit" size="large" target="_blank" href={ME.link.cv}>
				<Avatar variant="square" src={LOGO.cv} alt="cv" />
			</Button>
		</Box>
	);
};
