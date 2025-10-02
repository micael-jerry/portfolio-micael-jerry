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
		title: "So long",
		status: ProjectStatusEnum.COMPLETED,
		image: IMAGES.soLongImg,
		description: 'So Long is a small 2D game. The objective is to navigate a player through a map, collect all the collectibles, and then reach the exit.',
		githubLink: "https://github.com/micael-jerry/so_long",
	},
	{
		title: "Coucou App Api",
		status: ProjectStatusEnum.IN_PROGRESS,
		image: IMAGES.coucouAppImg,
		description: "Coucou API powers the backend of the Coucou chat app, managing authentication, real-time messaging, and conversations. Built with NestJS for scalability and maintainability, it serves as the foundation for a full-featured messenger.",
		githubLink: "https://github.com/micael-jerry/coucou-api",
		demoLink: "https://sour-georgena-micael-jerry-3c76162d.koyeb.app/api#/"
	}
];
