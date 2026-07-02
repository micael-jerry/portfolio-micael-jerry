import { useScreenSizeChecker } from "./useScreenSizeChecker";

/** Retourne true si l'écran est ≤ 950px (breakpoint mobile/tablette) */
export const useIsSmallScreen = (): boolean => useScreenSizeChecker(950);
