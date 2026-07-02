import type { SxProps, Theme } from "@mui/material";

/** Style glassmorphism standard utilisé dans tous les panneaux et cards */
export const glassSx: SxProps<Theme> = {
	background: "linear-gradient(135deg, rgba(20, 20, 30, 0.75) 0%, rgba(30, 30, 50, 0.65) 100%)",
	backdropFilter: "blur(12px)",
	border: "1px solid rgba(255, 255, 255, 0.08)",
	borderRadius: 4,
};

/** Variante card plus sombre */
export const cardSx: SxProps<Theme> = {
	background: "linear-gradient(135deg, rgba(30, 30, 40, 0.8) 0%, rgba(20, 20, 30, 0.6) 100%)",
	backdropFilter: "blur(16px)",
	border: "1px solid rgba(255, 255, 255, 0.08)",
	borderRadius: 4,
};

/** Variante modal/dialog très opaque */
export const modalSx: SxProps<Theme> = {
	background: "linear-gradient(135deg, rgba(20, 24, 40, 0.96) 0%, rgba(10, 12, 22, 0.96) 100%)",
	backdropFilter: "blur(20px)",
	border: "1.5px solid rgba(255, 167, 38, 0.35)",
	borderRadius: 5,
};
