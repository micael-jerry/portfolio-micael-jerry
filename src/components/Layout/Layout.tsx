import { Box } from "@mui/material";
import React from "react";

export type LayoutProps = {
	children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return <Box height={"100vh"}>{children}</Box>;
};
