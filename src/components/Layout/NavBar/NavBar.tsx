import { AppBar, Avatar, Box, Toolbar, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LOGO } from "../../../assets";
import { ME } from "../../../data/user/me";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen";
import { SectionIdEnum } from "../../../types/sectionId/sectionId.type";
import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher";
import { ThemeToggle } from "../../ThemeToggle/ThemeToggle";
import { NavMenu } from "../NavMenu/NavMenu";

export const NavBar: React.FC = () => {
	const isSmall = useIsSmallScreen();
	const theme = useTheme();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isLight = theme.palette.mode === "light";

	return (
		<AppBar
			position="fixed"
			elevation={0}
			sx={{
				background: scrolled ? (isLight ? "rgba(241, 243, 245, 0.88)" : "rgba(15, 17, 23, 0.85)") : "transparent",
				backdropFilter: scrolled ? "blur(16px)" : "none",
				borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : "1px solid transparent",
				transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease, box-shadow 0.3s ease",
				boxShadow: scrolled
					? isLight
						? "0 2px 12px 0 rgba(0, 0, 0, 0.03)"
						: "0 2px 12px 0 rgba(0, 0, 0, 0.3)"
					: "none",
			}}
		>
			<Toolbar sx={{ minHeight: { xs: 60, md: 68 }, px: { xs: 2, md: 4 } }}>
				<Box flexGrow={1}>
					<AnchorLink href={`#${SectionIdEnum.INTRO}`} offset={isSmall ? "60px" : "68px"} className="anchor-link">
						<Box
							component={motion.div}
							display="flex"
							alignItems="center"
							gap={1.2}
							sx={{ cursor: "pointer", width: "fit-content" }}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<Avatar
								src={LOGO.logoApp}
								alt="Logo"
								sx={{
									width: 34,
									height: 34,
									border: `1px solid ${theme.palette.divider}`,
									boxShadow: isLight ? "0 1px 4px rgba(0,0,0,0.06)" : "0 1px 4px rgba(0,0,0,0.3)",
								}}
							/>
							<Typography
								variant="h6"
								sx={{
									fontWeight: 700,
									fontSize: "1.05rem",
									letterSpacing: "-0.01em",
									color: "text.primary",
								}}
							>
								{ME.firstname}
							</Typography>
						</Box>
					</AnchorLink>
				</Box>
				<Box display="flex" alignItems="center" gap={1}>
					<ThemeToggle />
					<LanguageSwitcher />
					<NavMenu />
				</Box>
			</Toolbar>
		</AppBar>
	);
};
