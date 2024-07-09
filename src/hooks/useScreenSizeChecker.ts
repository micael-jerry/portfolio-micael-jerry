import { useMediaQuery } from "@mui/material";

export const useScreenSizeChecker = (maxWidth: number): boolean => {
	return useMediaQuery(`(max-width:${maxWidth}px)`);
};
