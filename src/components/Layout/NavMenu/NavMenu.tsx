import React, { ReactElement, useState } from "react";
import { SectionIdEnum } from "../../../types/sectionId/sectionId";
import { AppBar, Box, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import { ME } from "../../../constants/user/me.ts";
import { Close, Menu } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";
import { NavButton } from "./NavButton.tsx";

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

const Transition = React.forwardRef(
	(
		props: TransitionProps & {
			children: ReactElement;
		},
		ref: React.Ref<unknown>,
	) => {
		return <Slide direction="left" ref={ref} {...props} />;
	},
);

export type NavMenuProps = {
	isSmall: boolean;
};

export const NavMenu: React.FC<NavMenuProps> = ({ isSmall }) => {
	const [open, setOpen] = useState<boolean>(false);

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
					<Dialog
						open={open}
						fullScreen
						fullWidth
						TransitionComponent={Transition}
						hideBackdrop
						PaperProps={{
							sx: {
								boxShadow: "none",
							},
						}}
					>
						<AppBar position="static" sx={{ background: "white", color: "text.primary" }}>
							<Toolbar>
								<Typography variant="h5" sx={{ flexGrow: 1 }}>
									Menu
								</Typography>
								<IconButton onClick={onCloseHandler}>
									<Close color="warning" />
								</IconButton>
							</Toolbar>
						</AppBar>
						<Box display={"flex"} flexDirection={"column"} py={3} width={"100%"}>
							{mappedItems}
						</Box>
					</Dialog>
				</>
			) : (
				<Box display={"flex"} gap={2}>
					{mappedItems}
				</Box>
			)}
		</Box>
	);
};
