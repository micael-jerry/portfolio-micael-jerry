import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Button, Chip, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ME } from "../../../data/user/me.ts";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen.ts";
import { SectionIdEnum } from "../../../types/sectionId/sectionId.type.ts";

interface IntroTextProps {
	textVariants: Variants;
}

export const IntroText: React.FC<IntroTextProps> = ({ textVariants }) => {
	const isSmall = useIsSmallScreen();
	const { t } = useTranslation();

	return (
		<>
			<Box component={motion.div} variants={textVariants}>
				{/* Status pill badge */}
				<Box sx={{ mb: 2.5, display: "inline-flex" }}>
					<Chip
						label={t("intro.greeting")}
						size="medium"
						sx={{
							borderRadius: 9999,
							bgcolor: "action.hover",
							border: "1px solid",
							borderColor: "divider",
							color: "text.secondary",
							fontWeight: 600,
							fontSize: "0.85rem",
							px: 1,
						}}
					/>
				</Box>

				{/* Impactful Name Heading */}
				<Typography
					component={motion.h1}
					variant="h1"
					variants={textVariants}
					sx={{
						fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.8rem" },
						fontWeight: 800,
						lineHeight: 1.1,
						letterSpacing: "-0.03em",
						color: "text.primary",
						mb: 2,
					}}
				>
					{`${ME.firstname} ${ME.name}`}
				</Typography>

				{/* Role Subtitle */}
				<Typography
					component={motion.h2}
					variant="h4"
					variants={textVariants}
					sx={{
						color: "text.primary",
						opacity: 0.9,
						fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
						fontWeight: 600,
						lineHeight: 1.3,
						letterSpacing: "-0.015em",
						mb: 2,
					}}
				>
					{t("intro.role")}
				</Typography>

				{/* Passion statement */}
				<Typography
					component={motion.p}
					variant="body1"
					variants={textVariants}
					sx={{
						color: "text.secondary",
						fontWeight: 400,
						fontSize: { xs: "1rem", md: "1.15rem" },
						lineHeight: 1.6,
						maxWidth: 580,
						mb: 4,
					}}
				>
					{t("intro.passion")}
				</Typography>
			</Box>

			{/* CTAs */}
			<Box
				component={motion.div}
				display="flex"
				gap={2}
				justifyContent={{ xs: "center", md: "flex-start" }}
				alignItems="center"
				variants={textVariants}
			>
				<AnchorLink href={`#${SectionIdEnum.EXPERIENCE}`} offset={isSmall ? "60px" : "68px"}>
					<Button
						component={motion.button}
						variant="contained"
						color="primary"
						size="large"
						variants={textVariants}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						sx={{
							borderRadius: 9999,
							px: 3.5,
							py: 1.3,
							fontWeight: 700,
							fontSize: "1rem",
						}}
					>
						{t("nav.experience")}
					</Button>
				</AnchorLink>
				<AnchorLink href={`#${SectionIdEnum.CONTACT}`} offset={isSmall ? "60px" : "68px"}>
					<Button
						component={motion.button}
						variant="outlined"
						size="large"
						variants={textVariants}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						sx={{
							borderRadius: 9999,
							px: 3.5,
							py: 1.3,
							fontWeight: 600,
							fontSize: "1rem",
							borderColor: "divider",
							color: "text.primary",
							"&:hover": {
								borderColor: "text.primary",
								bgcolor: "action.hover",
							},
						}}
					>
						{t("intro.btn_contact")}
					</Button>
				</AnchorLink>
			</Box>

			{!isSmall && (
				<Box component={motion.div} mt={5} variants={textVariants}>
					<AnchorLink href={`#${SectionIdEnum.ABOUT}`} offset="68px" className="anchor-link">
						<Box
							display="inline-flex"
							alignItems="center"
							gap={1}
							sx={{
								color: "text.secondary",
								cursor: "pointer",
								opacity: 0.6,
								transition: "opacity 0.2s ease",
								"&:hover": { opacity: 1 },
							}}
						>
							<Typography variant="body2" sx={{ fontSize: "0.85rem", fontWeight: 500 }}>
								{t("intro.btn_about")}
							</Typography>
							<ArrowDownwardIcon sx={{ fontSize: 16 }} />
						</Box>
					</AnchorLink>
				</Box>
			)}
		</>
	);
};
