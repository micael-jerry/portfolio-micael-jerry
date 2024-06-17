import { IMAGES } from "../assets";

export enum ProjectStatusEnum {
	IN_PROGRESS = "In progress",
	COMPLETED = "Completed",
}

export type ProjectType = {
	title: string;
	status: ProjectStatusEnum;
	description: string;
	image?: string;
	githubLink: string;
	demoLink?: string;
};

export const PROJECTS: ProjectType[] = [
	{
		title: "Portfolio",
		status: ProjectStatusEnum.IN_PROGRESS,
		image: IMAGES.portfolioImg,
		description:
			"My portfolio that showcases my creative and technical skills in various professional fields. (build with react-ts)",
		githubLink: "https://github.com/micael-jerry/portfolio-micael-jerry",
	},
	{
		title: "Exchange API",
		status: ProjectStatusEnum.IN_PROGRESS,
		description: "API for exchange rate manipulation (build with spring-boot)",
		githubLink: "https://github.com/micael-jerry/exchange-api",
	},
];
