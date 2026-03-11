import { Close, Description, Menu } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useState } from "react";
import { LOGO } from "../../../assets/index.ts";
import { ME } from "../../../data/user/me.ts";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen.ts";
import { SectionIdEnum } from "../../../types/sectionId/sectionId.type.ts";
import { NavButton } from "./NavButton.tsx";
import "./NavMenu.css";

const navigationItems = [
	{ to: SectionIdEnum.INTRO, text: "Intro" },
	{ to: SectionIdEnum.ABOUT, text: "About" },
	{ to: SectionIdEnum.SKILLS, text: "Skills" },
	{ to: SectionIdEnum.PROJECTS, text: "Projects" },
	{ to: SectionIdEnum.CONTACT, text: "Contact" },
];

const mobileMenuVariants: Variants = {
	open: {
		x: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 300, damping: 30 },
	},
	closed: {
		x: "100%",
		opacity: 0,
		transition: { type: "spring", stiffness: 400, damping: 40 },
	},
};

const itemVariants: Variants = {
	open: (i: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: 0.05 * i, type: "spring", stiffness: 300, damping: 24 },
	}),
	closed: { x: 40, opacity: 0 },
};

export const NavMenu: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const isSmall = useIsSmallScreen();

	const onOpenHandler = () => setOpen(true);
	const onCloseHandler = () => setOpen(false);

	return (
		<Box>
			{isSmall ? (
				<>
					<IconButton
						onClick={onOpenHandler}
						sx={{
							border: "1.5px solid rgba(255,167,38,0.4)",
							borderRadius: 2,
							p: 0.7,
							"&:hover": {
								background: "rgba(255,167,38,0.12)",
								borderColor: "#ffa726",
							},
							transition: "all 0.2s",
						}}
					>
						<Menu sx={{ color: "#ffa726", fontSize: 26 }} />
					</IconButton>

					<AnimatePresence>
						{open && (
							<Box
								component={motion.div}
								className="nav-menu-open"
								initial="closed"
								animate="open"
								exit="closed"
								variants={mobileMenuVariants}
							>
								{/* Header */}
								<AppBar
									position="static"
									elevation={0}
									sx={{
										background: "transparent",
										borderBottom: "1px solid rgba(255,255,255,0.08)",
									}}
								>
									<Toolbar>
										<Avatar
											src={LOGO.logoApp}
											alt="Logo"
											sx={{
												mr: 1.5,
												width: 34,
												height: 34,
												border: "2px solid rgba(255,167,38,0.5)",
											}}
										/>
										<Typography
											variant="h6"
											sx={{
												flexGrow: 1,
												fontWeight: 700,
												letterSpacing: "0.06em",
												background: "linear-gradient(90deg, #fff 60%, #ffa726 100%)",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor: "transparent",
												backgroundClip: "text",
											}}
										>
											{ME.firstname}
										</Typography>
										<IconButton
											onClick={onCloseHandler}
											sx={{
												border: "1.5px solid rgba(255,167,38,0.4)",
												borderRadius: 2,
												p: 0.6,
												"&:hover": { background: "rgba(255,167,38,0.12)" },
											}}
										>
											<Close sx={{ color: "#ffa726", fontSize: 22 }} />
										</IconButton>
									</Toolbar>
								</AppBar>

								{/* Nav items */}
								<Box
									display="flex"
									flexDirection="column"
									alignItems="center"
									justifyContent="center"
									gap={0.5}
									py={4}
									sx={{ flex: 1 }}
								>
									{navigationItems.map(({ to, text }, i) => (
										<motion.div
											key={text}
											custom={i}
											variants={itemVariants}
											initial="closed"
											animate="open"
											style={{ width: "80%" }}
										>
											<NavButton
												to={to}
												text={text}
												isSmall={isSmall}
												isAnchorLink={false}
												onCloseHandler={onCloseHandler}
											/>
										</motion.div>
									))}

									<motion.div
										custom={navigationItems.length}
										variants={itemVariants}
										initial="closed"
										animate="open"
										style={{ width: "80%" }}
									>
										<Divider
											sx={{
												my: 2,
												borderColor: "rgba(255,255,255,0.1)",
											}}
										/>
										<Button
											fullWidth
											variant="outlined"
											startIcon={<Description />}
											href={ME.link.cv}
											target="_blank"
											onClick={onCloseHandler}
											sx={{
												fontWeight: 700,
												borderRadius: 2.5,
												py: 1.2,
												fontSize: "1rem",
												borderWidth: 2,
												letterSpacing: "0.06em",
												borderColor: "#ffa726",
												color: "#ffa726",
												"&:hover": {
													background: "rgba(255,167,38,0.12)",
													borderColor: "#ffca5a",
													color: "#ffca5a",
												},
												transition: "all 0.2s",
											}}
										>
											Mon CV
										</Button>
									</motion.div>
								</Box>
							</Box>
						)}
					</AnimatePresence>
				</>
			) : (
				<Box display="flex" gap={0.5} alignItems="center">
					{navigationItems.map(({ to, text }) => (
						<NavButton key={text} to={to} text={text} isSmall={false} isAnchorLink={false} onCloseHandler={() => {}} />
					))}
					<Button
						component={motion.a}
						href={ME.link.cv}
						target="_blank"
						variant="outlined"
						startIcon={<Description />}
						whileHover={{ scale: 1.04 }}
						whileTap={{ scale: 0.97 }}
						sx={{
							ml: 1,
							fontWeight: 700,
							borderRadius: 2.5,
							px: 2.5,
							py: 0.75,
							fontSize: "0.9rem",
							borderWidth: 2,
							letterSpacing: "0.06em",
							borderColor: "#ffa726",
							color: "#ffa726",
							"&:hover": {
								background: "rgba(255,167,38,0.12)",
								borderColor: "#ffca5a",
								color: "#ffca5a",
								borderWidth: 2,
							},
							transition: "all 0.2s",
						}}
					>
						Mon CV
					</Button>
				</Box>
			)}
		</Box>
	);
};
