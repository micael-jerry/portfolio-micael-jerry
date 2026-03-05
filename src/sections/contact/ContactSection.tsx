import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Footer } from "../../components/Footer/Footer";
import "./ContactSection.css";
import { ContactForm } from "./components/ContactForm.tsx";
import { ContactInfo } from "./components/ContactInfo.tsx";

export const ContactSection: React.FC = () => {
	return (
		<Box component="section" sx={{ position: "relative", minHeight: { xs: "70vh", md: "80vh" }, pb: 0 }}>
			<motion.div
				style={{
					position: "absolute",
					right: "0%",
					top: "10%",
					width: "60%",
					height: "70%",
					zIndex: 0,
					background: "radial-gradient(circle at 70% 40%, rgba(255,193,7,0.13) 0%, transparent 80%)",
					filter: "blur(32px)",
				}}
				animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
				transition={{ duration: 7, repeat: Infinity }}
			/>
			<Box display={"flex"} alignItems={"center"} sx={{ position: "relative", zIndex: 1, minHeight: "60vh" }}>
				<Grid container spacing={6} alignItems="stretch" justifyContent="center">
					<Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
						<ContactInfo />
					</Grid>

					<Grid size={{ xs: 12, md: 7 }}>
						<ContactForm />
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</Box>
	);
};
