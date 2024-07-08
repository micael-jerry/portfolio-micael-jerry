import { useMediaQuery } from "@mui/material";

export const useIsSmallWidthScreen = (): boolean => {
	return useMediaQuery("(max-width:950px)");
};
