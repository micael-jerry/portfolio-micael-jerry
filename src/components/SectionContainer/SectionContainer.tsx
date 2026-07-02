import { Box, Container } from "@mui/material";
import React from "react";
import { SectionIdEnum } from "../../types/sectionId/sectionId.type";

export type SectionContainerProps = {
	children: React.ReactNode;
	sectionId: SectionIdEnum;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, sectionId }) => {
	return (
		<section id={sectionId} key={sectionId} aria-label={sectionId}>
			<Container maxWidth={"lg"}>
				<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 4 }}>{children}</Box>
			</Container>
		</section>
	);
};
