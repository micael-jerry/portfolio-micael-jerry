import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { IMAGES } from "../../assets";
import "./IntroSection.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SectionIdEnum } from "../../types/sectionId/sectionId";
import { ME } from "../../constants/me";

export const IntroSection: React.FC = () => {
	return (
		<Box display={"flex"} alignItems={"center"} pt={"6%"} pb={4}>
			<Grid container spacing={4} alignItems="center">
				<Grid item xs={12} md={6}>
					<Box>
						<Typography variant="h6">Hello 👋, my name is</Typography>
						<Typography variant="h2" mb={1} fontWeight={500}>
							{ME.firstname}
						</Typography>
						<Typography variant="h4" mb={3}>
							Computer science student with a passion for technology
						</Typography>
						<Typography variant="h6">I am passionate about technology and I love to learn new things.</Typography>
					</Box>
					<Box display={"flex"} gap={2} mt={2}>
						<AnchorLink href={`#${SectionIdEnum.ABOUT}`}>
							<Button variant="contained" color="warning" size="large">
								About
							</Button>
						</AnchorLink>
						<AnchorLink href={`#${SectionIdEnum.CONTACT}`}>
							<Button variant="outlined" color="warning" size="large">
								Contact
							</Button>
						</AnchorLink>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card
						sx={{
							borderRadius: "5%",
							boxShadow: 4,
						}}
					>
						<img alt="jerry" src={IMAGES.jerryImg} id="jerry" />
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};
