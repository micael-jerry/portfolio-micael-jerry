import { Close, Description, Menu } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import { ME } from "../../../../data/user/me.ts";
import { LOGO } from "../../../assets/index.ts";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen.ts";
import { SectionIdEnum } from "../../../types/sectionId/sectionId.type.ts";
import { NavButton } from "./NavButton.tsx";
import "./NavMenu.css";

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

	const mappedItems = navigationItems.map(({ to, text, anchor }) => (
		<NavButton key={text} to={to} text={text} isSmall={isSmall} isAnchorLink={anchor} onCloseHandler={onCloseHandler} />
	));

	return (
		<Box>
			{isSmall ? (
				<>
					<IconButton onClick={onOpenHandler}>
						<Menu color="warning" />
					</IconButton>
					<Box component={motion.div} className="nav-menu" animate={open ? "open" : "closed"}>
						<Box component={motion.div} className="nav-menu-open" variants={variants}>
							<AppBar position="static" sx={{ background: "rgba(20,20,30,0.95)", boxShadow: "none" }}>
								<Toolbar>
									<Avatar src={LOGO.logoApp} alt={"Logo"} />
									<Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
										Menu
									</Typography>
									<IconButton onClick={onCloseHandler}>
										<Close color="warning" />
									</IconButton>
								</Toolbar>
							</AppBar>
							<Box
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"center"}
								alignItems="center"
								py={3}
								width={"100%"}
								gap={1}
							>
								{mappedItems}
								<Divider sx={{ my: 2, width: "60%" }} />
								<Button
									variant="outlined"
									color="warning"
									startIcon={<Description />}
									href={ME.link.cv}
									target="_blank"
									sx={{
										mt: 1,
										fontWeight: 600,
										borderRadius: 3,
										px: 3,
										fontSize: "1.08rem",
										borderWidth: 2,
										letterSpacing: 1,
									}}
								>
									My CV
								</Button>
							</Box>
						</Box>
					</Box>
				</>
			) : (
				<Box display={"flex"} gap={2} alignItems="center">
					{mappedItems}
					<Button
						variant="outlined"
						color="warning"
						startIcon={<Description />}
						href={ME.link.cv}
						target="_blank"
						sx={{
							fontWeight: 600,
							borderRadius: 3,
							px: 2.5,
							fontSize: "1.08rem",
							borderWidth: 2,
							letterSpacing: 1,
						}}
					>
						My CV
					</Button>
				</Box>
			)}
		</Box>
	);
};
