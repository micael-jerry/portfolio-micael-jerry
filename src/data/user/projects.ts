import { IMAGES } from "../../assets/index.ts";
import { ProjectStatusEnum, ProjectType } from "../../types/project.type.ts";

export const PROJECTS: ProjectType[] = [
	{
		title: "Portfolio",
		status: ProjectStatusEnum.COMPLETED,
		image: IMAGES.portfolioImg,
		description:
			"My portfolio that showcases my creative and technical skills in various professional fields. (build with react-ts)",
		descriptionKey: "projects.portfolio_desc",
		githubLink: "https://github.com/micael-jerry/portfolio-micael-jerry",
		demoLink: "https://micael-jerry.github.io/",
		technologies: ["React", "Material-UI", "Vite"],
	},
	{
		title: "Valentin Invitation",
		status: ProjectStatusEnum.COMPLETED,
		image: IMAGES.saintValentinImg,
		description: "A romantic and interactive digital invitation for a request for Valentine's Day.",
		descriptionKey: "projects.valentin_desc",
		demoLink: "https://www.valentin-invitation.quest",
		technologies: ["NextJS", "Tailwind CSS", "PostgresSQL"],
	},
	{
		title: "Coucou App Api",
		status: ProjectStatusEnum.IN_PROGRESS,
		image: IMAGES.coucouAppImg,
		description:
			"Coucou API powers the backend of the Coucou chat app, managing authentication, real-time messaging, and conversations. Built with NestJS for scalability and maintainability, it serves as the foundation for a full-featured messenger.",
		descriptionKey: "projects.coucou_desc",
		githubLink: "https://github.com/micael-jerry/coucou-api",
		demoLink: "https://sour-georgena-micael-jerry-3c76162d.koyeb.app/api#/",
		technologies: ["NestJS", "PostgreSQL", "Resend", "Docker"],
	},
];
