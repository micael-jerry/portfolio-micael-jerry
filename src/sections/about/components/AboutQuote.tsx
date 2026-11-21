import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { Trans } from "react-i18next";
import { cardSx } from "../../../utils/styles.ts";

interface AboutQuoteProps {
	variants?: Variants;
}

export const AboutQuote: React.FC<AboutQuoteProps> = ({ variants }) => {
	return (
		<Box
			component={motion.div}
			variants={variants}
			sx={{
				...cardSx,
				p: { xs: 3, md: 4 },
				textAlign: "center",
				position: "relative",
				overflow: "hidden",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					mb: 1.5,
					color: "text.secondary",
					opacity: 0.35,
					display: "flex",
				}}
			>
				<FormatQuoteIcon sx={{ fontSize: 44, transform: "rotate(180deg)" }} />
			</Box>
			<Typography
				sx={{
					fontStyle: "italic",
					color: "text.primary",
					fontWeight: 500,
					fontSize: { xs: "1.05rem", md: "1.2rem" },
					lineHeight: 1.6,
					maxWidth: 320,
				}}
			>
				<Trans i18nKey="about.quote">
					Stay <span style={{ fontWeight: 700 }}>curious</span>, keep <span style={{ fontWeight: 700 }}>learning</span>,
					and never stop <span style={{ fontWeight: 700 }}>building</span>.
				</Trans>
			</Typography>
		</Box>
	);
};
