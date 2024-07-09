import "./NavMenu.css";
import React, { useState } from "react";
import { SectionIdEnum } from "../../../types/sectionId/sectionId";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { ME } from "../../../constants/user/me.ts";
import { Close, Menu } from "@mui/icons-material";
import { NavButton } from "./NavButton.tsx";
import { motion, Variants } from "framer-motion";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen.ts";

const navigationItems = [
	{
		to: SectionIdEnum.INTRO,
		text: "Intro",
		anchor: false,
	},
	{
		to: SectionIdEnum.ABOUT,
		text: "About",
		anchor: false,
	},
	{
		to: SectionIdEnum.SKILLS,
		text: "Skills",
		anchor: false,
	},
	{
		to: SectionIdEnum.PROJECTS,
		text: "Projects",
		anchor: false,
	},
	{
		to: SectionIdEnum.CONTACT,
		text: "Contact",
		anchor: false,
	},
	{
		to: ME.link.cv,
		text: "CV",
		anchor: true,
	},
];

const variants: Variants = {
	open: {
		clipPath: "circle(1200px at 50px 50px)",
		transition: {
			type: "spring",
			stiffness: 20,
		},
	},
	closed: {
		clipPath: "circle(30px at 50px 50px)",
		opacity: 0,
		transition: {
			delay: 0,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export const NavMenu: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const isSmall = useIsSmallScreen();

	const onOpenHandler = () => setOpen(true);
	const onCloseHandler = () => setOpen(false);

	const mappedItems = navigationItems.map(({ to, text, anchor }) => {
		return (
			<NavButton
				key={text}
				to={to}
				text={text}
				isSmall={isSmall}
				isAnchorLink={anchor}
				onCloseHandler={onCloseHandler}
			/>
		);
	});
	return (
		<Box>
			{isSmall ? (
				<>
					<IconButton onClick={onOpenHandler}>
						<Menu color="warning" />
					</IconButton>
					<Box component={motion.div} className="nav-menu" animate={open ? "open" : "closed"}>
						<Box component={motion.div} className="nav-menu-open" variants={variants}>
							<AppBar position="static" sx={{ background: "inherit" }}>
								<Toolbar>
									<Typography variant="h5" sx={{ flexGrow: 1 }}>
										Menu
									</Typography>
									<IconButton onClick={onCloseHandler}>
										<Close color="warning" />
									</IconButton>
								</Toolbar>
							</AppBar>
							<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} py={3} width={"100%"}>
								{mappedItems}
							</Box>
						</Box>
					</Box>
				</>
			) : (
				<Box display={"flex"} gap={2}>
					{mappedItems}
				</Box>
			)}
		</Box>
	);
};
