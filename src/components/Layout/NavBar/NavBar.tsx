import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LOGO } from "../../../assets";
import { ME } from "../../../data/user/me";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen";
import { SectionIdEnum } from "../../../types/sectionId/sectionId.type";
import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher";
import { NavMenu } from "../NavMenu/NavMenu";

export const NavBar: React.FC = () => {
	const isSmall = useIsSmallScreen();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AppBar
			position="fixed"
			elevation={0}
			sx={{
				background: scrolled ? "rgba(7, 0, 45, 0.82)" : "rgba(7, 0, 45, 0.0)",
				backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
				borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
				transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease",
				boxShadow: scrolled ? "0 2px 24px 0 rgba(0,0,0,0.35)" : "none",
			}}
		>
			<Toolbar sx={{ minHeight: { xs: 60, md: 68 } }}>
				<Box flexGrow={1}>
					<AnchorLink href={`#${SectionIdEnum.INTRO}`} offset={isSmall ? "60px" : "68px"} className="anchor-link">
						<Box
							component={motion.div}
							display="flex"
							alignItems="center"
							gap={1.2}
							sx={{ cursor: "pointer", width: "fit-content" }}
							whileHover={{ scale: 1.04 }}
							whileTap={{ scale: 0.97 }}
						>
							<Avatar
								src={LOGO.logoApp}
								alt="Logo"
								sx={{
									width: 36,
									height: 36,
									border: "2px solid rgba(255,167,38,0.6)",
									boxShadow: "0 0 10px rgba(255,167,38,0.3)",
								}}
							/>
							<Typography
								variant="h6"
								sx={{
									fontWeight: 700,
									letterSpacing: "0.08em",
									background: "linear-gradient(90deg, #fff 60%, #ffa726 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								{ME.firstname}
							</Typography>
						</Box>
					</AnchorLink>
				</Box>
				<Box display="flex" alignItems="center" gap={1}>
					<LanguageSwitcher />
					<NavMenu />
				</Box>
			</Toolbar>
		</AppBar>
	);
};
