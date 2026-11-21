import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
	mode: ThemeMode;
	toggleTheme: () => void;
	isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
	mode: "light",
	toggleTheme: () => {},
	isDark: false,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [mode, setMode] = useState<ThemeMode>(() => {
		const saved = localStorage.getItem("portfolio_theme_mode");
		if (saved === "light" || saved === "dark") {
			return saved;
		}
		return "light";
	});

	const toggleTheme = () => {
		setMode((prev) => {
			const next = prev === "light" ? "dark" : "light";
			localStorage.setItem("portfolio_theme_mode", next);
			return next;
		});
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", mode);
		document.documentElement.style.colorScheme = mode;
	}, [mode]);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary:
						mode === "light"
							? { main: "#0F172A", light: "#334155", dark: "#020617", contrastText: "#FFFFFF" }
							: { main: "#F8FAFC", light: "#FFFFFF", dark: "#CBD5E1", contrastText: "#0F172A" },
					secondary:
						mode === "light"
							? { main: "#475569", light: "#64748B", dark: "#334155" }
							: { main: "#94A3B8", light: "#CBD5E1", dark: "#64748B" },
					background:
						mode === "light" ? { default: "#F1F3F5", paper: "#FFFFFF" } : { default: "#0F1117", paper: "#171A23" },
					text:
						mode === "light"
							? { primary: "#0F172A", secondary: "#64748B", disabled: "#94A3B8" }
							: { primary: "#F8FAFC", secondary: "#94A3B8", disabled: "#64748B" },
					divider: mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)",
					action: {
						hover: mode === "light" ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.05)",
					},
				},
				typography: {
					fontFamily: '"Plus Jakarta Sans", "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
					h1: { fontWeight: 800, letterSpacing: "-0.03em" },
					h2: { fontWeight: 800, letterSpacing: "-0.025em" },
					h3: { fontWeight: 700, letterSpacing: "-0.02em" },
					h4: { fontWeight: 700, letterSpacing: "-0.015em" },
					h5: { fontWeight: 600, letterSpacing: "-0.01em" },
					h6: { fontWeight: 600 },
					button: { textTransform: "none", fontWeight: 600, letterSpacing: "0.01em" },
				},
				shape: {
					borderRadius: 16,
				},
				components: {
					MuiButton: {
						styleOverrides: {
							root: {
								borderRadius: 9999,
								paddingLeft: 22,
								paddingRight: 22,
								paddingTop: 10,
								paddingBottom: 10,
								boxShadow: "none",
								"&:hover": {
									boxShadow: "none",
								},
							},
						},
					},
					MuiChip: {
						styleOverrides: {
							root: {
								borderRadius: 9999,
								fontWeight: 600,
							},
						},
					},
					MuiCard: {
						styleOverrides: {
							root: {
								borderRadius: 20,
								boxShadow:
									mode === "light"
										? "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 8px 16px -4px rgba(0, 0, 0, 0.03)"
										: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 8px 16px -4px rgba(0, 0, 0, 0.25)",
							},
						},
					},
				},
			}),
		[mode],
	);

	return (
		<ThemeContext.Provider value={{ mode, toggleTheme, isDark: mode === "dark" }}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};
