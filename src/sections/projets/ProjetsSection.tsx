import { Box, Typography } from "@mui/material";
import React from "react";

export const ProjetsSection: React.FC = () => {
	return (
		<Box py={4}>
			<Typography variant="h6">Hello, my name is</Typography>
			<Typography variant="h2" mb={1} fontWeight={500}>
				Micael Jerry
			</Typography>
			<Typography variant="h5" mb={3}>
				Computer science student with a passion for technology
			</Typography>
			<Typography maxWidth={500}>
				I am passionate about technology and I love to learn new things.
			</Typography>
		</Box>
	);
};
