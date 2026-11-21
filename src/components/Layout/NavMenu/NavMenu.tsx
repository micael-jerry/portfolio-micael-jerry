import { Close, Description, Menu } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LOGO } from "../../../assets/index.ts";
import { ME } from "../../../data/user/me.ts";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen.ts";
import { SectionIdEnum } from "../../../types/sectionId/sectionId.type.ts";
import { NavButton } from "./NavButton.tsx";
import "./NavMenu.css";

const mobileMenuVariants: Variants = {
	open: {
		x: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 320, damping: 32 },
	},
	closed: {
		x: "100%",
		opacity: 0,
		transition: { type: "spring", stiffness: 380, damping: 38 },
	},
};

const itemVariants: Variants = {
	open: (i: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: 0.04 * i, type: "spring", stiffness: 300, damping: 24 },
	}),
	closed: { x: 30, opacity: 0 },
};

export const NavMenu: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const isSmall = useIsSmallScreen();
	const { t } = useTranslation();

	const navigationItems = [
		{ to: SectionIdEnum.INTRO, text: t("nav.intro") },
		{ to: SectionIdEnum.ABOUT, text: t("nav.about") },
		{ to: SectionIdEnum.EXPERIENCE, text: t("nav.experience") },
		{ to: SectionIdEnum.SKILLS, text: t("nav.skills") },
		{ to: SectionIdEnum.PROJECTS, text: t("nav.projects") },
		{ to: SectionIdEnum.PROJECTS_42, text: t("nav.projects_42") },
		{ to: SectionIdEnum.CONTACT, text: t("nav.contact") },
	];

	const onOpenHandler = () => setOpen(true);
	const onCloseHandler = () => setOpen(false);

	return (
		<Box>
			{isSmall ? (
				<>
					<IconButton
						onClick={onOpenHandler}
						aria-label="Open menu"
						sx={{
							borderRadius: 9999,
							p: 0.8,
							border: "1px solid",
							borderColor: "divider",
							color: "text.primary",
							bgcolor: "transparent",
							"&:hover": {
								bgcolor: "action.hover",
							},
							transition: "all 0.2s ease",
						}}
					>
						<Menu sx={{ fontSize: 22 }} />
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
										borderBottom: "1px solid",
										borderColor: "divider",
									}}
								>
									<Toolbar sx={{ justifyContent: "space-between" }}>
										<Box display="flex" alignItems="center" gap={1.2}>
											<Avatar
												src={LOGO.logoApp}
												alt="Logo"
												sx={{
													width: 32,
													height: 32,
													border: "1px solid",
													borderColor: "divider",
												}}
											/>
											<Typography
												variant="subtitle1"
												sx={{
													fontWeight: 700,
													color: "text.primary",
													letterSpacing: "-0.01em",
												}}
											>
												{ME.firstname}
											</Typography>
										</Box>
										<IconButton
											onClick={onCloseHandler}
											aria-label="Close menu"
											sx={{
												borderRadius: 9999,
												p: 0.8,
												border: "1px solid",
												borderColor: "divider",
												color: "text.primary",
												"&:hover": { bgcolor: "action.hover" },
											}}
										>
											<Close sx={{ fontSize: 20 }} />
										</IconButton>
									</Toolbar>
								</AppBar>

								{/* Nav items */}
								<Box
									display="flex"
									flexDirection="column"
									alignItems="center"
									justifyContent="center"
									gap={1}
									py={5}
									sx={{ flex: 1, px: 3 }}
								>
									{navigationItems.map(({ to, text }, i) => (
										<motion.div
											key={to}
											custom={i}
											variants={itemVariants}
											initial="closed"
											animate="open"
											style={{ width: "100%", maxWidth: 300 }}
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
										style={{ width: "100%", maxWidth: 300 }}
									>
										<Divider sx={{ my: 2 }} />
										<Button
											fullWidth
											variant="outlined"
											startIcon={<Description />}
											href={ME.link.cv}
											target="_blank"
											onClick={onCloseHandler}
											sx={{
												fontWeight: 700,
												borderRadius: 9999,
												py: 1.2,
												fontSize: "0.95rem",
												borderColor: "text.primary",
												color: "text.primary",
												"&:hover": {
													bgcolor: "text.primary",
													color: "background.paper",
													borderColor: "text.primary",
												},
												transition: "all 0.2s ease",
											}}
										>
											{t("nav.cv")}
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
						<NavButton key={to} to={to} text={text} isSmall={false} isAnchorLink={false} onCloseHandler={() => {}} />
					))}
					<Button
						component={motion.a}
						href={ME.link.cv}
						target="_blank"
						variant="outlined"
						size="small"
						startIcon={<Description sx={{ fontSize: 18 }} />}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						sx={{
							ml: 1,
							fontWeight: 600,
							borderRadius: 9999,
							px: 2,
							py: 0.7,
							fontSize: "0.85rem",
							borderColor: "divider",
							color: "text.primary",
							"&:hover": {
								borderColor: "text.primary",
								bgcolor: "action.hover",
							},
							transition: "all 0.2s ease",
						}}
					>
						{t("nav.cv")}
					</Button>
				</Box>
			)}
		</Box>
	);
};
