import type { SxProps, Theme } from "@mui/material";

/** Style surface moderne Material (frosted / tonal) */
export const glassSx: SxProps<Theme> = (theme) => ({
	background: theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.82)" : "rgba(23, 26, 35, 0.82)",
	backdropFilter: "blur(16px)",
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: 4, // 16px
	boxShadow:
		theme.palette.mode === "light"
			? "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 8px 16px -4px rgba(0, 0, 0, 0.03)"
			: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 8px 16px -4px rgba(0, 0, 0, 0.2)",
});

/** Style card moderne Material élevé */
export const cardSx: SxProps<Theme> = (theme) => ({
	background: theme.palette.background.paper,
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: 4, // 16px
	boxShadow:
		theme.palette.mode === "light"
			? "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 10px 24px -4px rgba(0, 0, 0, 0.04)"
			: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 10px 24px -4px rgba(0, 0, 0, 0.25)",
	transition: "transform 0.25s ease, box-shadow 0.25s ease",
});

/** Style modal / dialog Material 3 */
export const modalSx: SxProps<Theme> = (theme) => ({
	background: theme.palette.background.paper,
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: 5, // 20px
	boxShadow:
		theme.palette.mode === "light" ? "0 20px 40px -8px rgba(0, 0, 0, 0.12)" : "0 20px 40px -8px rgba(0, 0, 0, 0.6)",
});
