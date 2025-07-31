import { IMAGES } from "../../src/assets";
import { ProjectStatusEnum, ProjectType } from "../../src/types/project.type";

export const PROJECTS: ProjectType[] = [
	{
		title: "Portfolio",
		status: ProjectStatusEnum.COMPLETED,
		image: IMAGES.portfolioImg,
		description:
			"My portfolio that showcases my creative and technical skills in various professional fields. (build with react-ts)",
		githubLink: "https://github.com/micael-jerry/portfolio-micael-jerry",
		demoLink: "https://micael-jerry.github.io/portfolio-micael-jerry/",
	},
	{
		title: "Exchange API",
		status: ProjectStatusEnum.COMPLETED,
		image: IMAGES.exchangeApiImg,
		description: "API for exchange rate manipulation (build with spring-boot)",
		githubLink: "https://github.com/micael-jerry/exchange-api",
	},
	{
		title: "SignCraft",
		status: ProjectStatusEnum.COMPLETED,
		image: IMAGES.signCraftImg,
		description: "Online document signature application",
		githubLink: "https://github.com/SignCraft2024/signcraft",
	},
	{
		title: "Dona",
		status: ProjectStatusEnum.IN_PROGRESS,
		image: IMAGES.donaImg,
		description:
			"This project is a React application and an Express API inspired by Waze. It allows users to report police positions and potentially other incidents on a map using Leaflet. Users can sign up, view reports on the map, and report incidents themselves.",
		githubLink: "https://github.com/micael-jerry/dona-backend/tree/dev",
	},
];
