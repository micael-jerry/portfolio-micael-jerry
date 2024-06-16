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
		title: "Chatify",
		status: ProjectStatusEnum.COMPLETED,
		description:
			"Personal Chat Room or Workspace to share resources and hangout with friends...",
		githubLink: "https://github.com/your-github/chatify",
		demoLink: "https://chatify-demo-link",
	},
	{
		title: "Bits-of-Code",
		status: ProjectStatusEnum.COMPLETED,
		description: "My personal blog page build with Next.js and Tailwind CSS...",
		githubLink: "https://github.com/your-github/bits-of-code",
		demoLink: "https://bits-of-code-demo-link",
	},
	{
		title: "Bits-of-Code2",
		status: ProjectStatusEnum.COMPLETED,
		description: "My personal blog page build with Next.js and Tailwind CSS...",
		githubLink: "https://github.com/your-github/bits-of-code",
		demoLink: "https://bits-of-code-demo-link",
	},
];
