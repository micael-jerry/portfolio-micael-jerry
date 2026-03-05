import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/portfolio-micael-jerry/",
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					"vendor-react": ["react", "react-dom"],
					"vendor-mui": ["@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"],
					"vendor-framer": ["framer-motion"],
				},
			},
		},
	},
});
