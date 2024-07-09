import { useMediaQuery } from "@mui/material";

export const useIsSmallScreen = (): boolean => {
	return useMediaQuery("(max-width:950px)");
};
