import { Box, Container } from "@mui/material";
import React from "react";
import { SectionIdEnum } from "../../types/sectionId/sectionId.type";

export type SectionContainerProps = {
	children: React.ReactNode;
	sectionId: SectionIdEnum;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, sectionId }) => {
	return (
		<div id={sectionId} key={sectionId}>
			<Container maxWidth={"lg"}>
				<Box minHeight={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
					{children}
				</Box>
			</Container>
		</div>
	);
};
