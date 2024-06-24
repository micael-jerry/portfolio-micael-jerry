import React from "react";
import {
	Card,
	CardContent,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
} from "@mui/material";
import { SkillType } from "../../constants/skills";

export interface SkillCardProps {
	title: string;
	skills: SkillType[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
	return (
		<Card
			sx={{
				backgroundColor: "transparent",
				boxShadow: 10,
				color: "white",
				maxWidth: 345,
			}}
		>
			<CardContent>
				<Typography variant="h4" component="div" gutterBottom>
					{title}
				</Typography>
				<List>
					{skills.map((skill) => (
						<ListItem key={skill.name}>
							<ListItemAvatar>
								<Avatar src={skill.logo} alt={skill.name} />
							</ListItemAvatar>
							<Typography variant="h5" component={"p"}>
								{skill.name}
							</Typography>
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>
	);
};
