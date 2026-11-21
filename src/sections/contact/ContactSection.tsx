import { Box, Grid } from "@mui/material";
import React from "react";
import { Footer } from "../../components/Footer/Footer";
import "./ContactSection.css";
import { ContactForm } from "./components/ContactForm.tsx";
import { ContactInfo } from "./components/ContactInfo.tsx";

export const ContactSection: React.FC = () => {
	return (
		<Box component="section" sx={{ position: "relative", minHeight: { xs: "auto", md: "75vh" }, width: "100%", pb: 0 }}>
			<Box display="flex" alignItems="center" sx={{ position: "relative", zIndex: 1, py: { xs: 4, md: 6 } }}>
				<Grid container spacing={{ xs: 5, md: 6 }} alignItems="stretch" justifyContent="center">
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
