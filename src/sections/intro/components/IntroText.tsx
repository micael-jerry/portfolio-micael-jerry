import { Box, Button, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LOGO } from "../../../assets";
import { ME } from "../../../data/user/me.ts";
import { useIsSmallScreen } from "../../../hooks/useIsSmallScreen.ts";
import { SectionIdEnum } from "../../../types/sectionId/sectionId.type.ts";
import { COLOR_WARNING } from "../../../utils/color.ts";

interface IntroTextProps {
	textVariants: Variants;
}

export const IntroText: React.FC<IntroTextProps> = ({ textVariants }) => {
	const isSmall = useIsSmallScreen();

	return (
		<>
			<Box component={motion.div} variants={textVariants}>
				<Typography
					component={motion.h6}
					variant="h6"
					variants={textVariants}
					sx={{ color: "#b3e5fc", fontWeight: 400, mb: 1, letterSpacing: 1 }}
				>
					Hello 👋, my name is
				</Typography>
				<Typography
					component={motion.h1}
					variant="h2"
					mb={1}
					fontWeight={700}
					color={COLOR_WARNING.dark}
					variants={textVariants}
					sx={{
						fontSize: { xs: "2.2rem", md: "3.2rem" },
						lineHeight: 1.1,
						letterSpacing: 1,
						textShadow: "0 2px 16px rgba(255,193,7,0.18)",
					}}
				>
					{ME.firstname}
				</Typography>
				<Typography
					component={motion.h2}
					variant="h4"
					mb={2}
					fontWeight={500}
					variants={textVariants}
					sx={{
						color: "#fff",
						fontSize: { xs: "1.2rem", md: "2rem" },
						lineHeight: 1.2,
						mb: 2,
					}}
				>
					Computer science student & Fullstack developer
				</Typography>
				<Typography
					component={motion.h5}
					variant="h6"
					variants={textVariants}
					sx={{
						color: "#bdbdbd",
						fontWeight: 400,
						fontSize: { xs: "1rem", md: "1.2rem" },
						mb: 3,
					}}
				>
					I am passionate about technology and I love to learn new things.
				</Typography>
			</Box>
			<Box
				component={motion.div}
				display="flex"
				gap={2}
				mt={3}
				justifyContent={{ xs: "center", md: "flex-start" }}
				variants={textVariants}
			>
				<AnchorLink href={`#${SectionIdEnum.ABOUT}`}>
					<Button
						component={motion.button}
						variant="contained"
						color="warning"
						size="large"
						variants={textVariants}
						sx={{
							borderRadius: 8,
							boxShadow: "0 4px 24px 0 rgba(255,193,7,0.18)",
							px: 4,
							fontWeight: 600,
							fontSize: "1.1rem",
						}}
					>
						About
					</Button>
				</AnchorLink>
				<AnchorLink href={`#${SectionIdEnum.CONTACT}`}>
					<Button
						component={motion.button}
						variant="outlined"
						color="warning"
						size="large"
						variants={textVariants}
						sx={{
							borderRadius: 8,
							px: 4,
							fontWeight: 600,
							fontSize: "1.1rem",
							borderWidth: 2,
						}}
					>
						Contact
					</Button>
				</AnchorLink>
			</Box>
			{!isSmall && (
				<Box component={motion.div} mt={4} variants={textVariants}>
					<motion.img
						alt="scroll"
						src={LOGO.scroll}
						id="scroll-img"
						variants={textVariants}
						animate="scrollButton"
						style={{ margin: "0 auto" }}
					/>
				</Box>
			)}
		</>
	);
};
