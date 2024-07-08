import React, { ReactElement, useState } from "react";
import { SectionIdEnum } from "../../../types/sectionId/sectionId";
import { AppBar, Box, Button, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ME } from "../../../constants/user/me.ts";
import { Close, Menu } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";

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

	const mappedItems = navigationItems.map(({ to, text }) => {
		return (
			<AnchorLink href={`#${to}`} key={to} offset={isSmall ? "56px" : "64px"} className="anchor-link">
				<Button
					color="inherit"
					variant={isSmall ? "text" : "outlined"}
					size="medium"
					fullWidth={isSmall}
					onClick={onCloseHandler}
				>
					{text}
				</Button>
			</AnchorLink>
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
							<Button
								color="inherit"
								size="large"
								target="_blank"
								href={ME.link.cv}
								fullWidth={isSmall}
								onClick={onCloseHandler}
							>
								CV
							</Button>
						</Box>
					</Dialog>
				</>
			) : (
				<Box display={"flex"} gap={2}>
					{mappedItems}
					<Button
						color="inherit"
						variant="outlined"
						size="medium"
						target="_blank"
						href={ME.link.cv}
						fullWidth={isSmall}
					>
						CV
					</Button>
				</Box>
			)}
		</Box>
	);
};
