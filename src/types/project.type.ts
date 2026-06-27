export enum ProjectStatusEnum {
	IN_PROGRESS = "In progress",
	COMPLETED = "Completed",
}

export type ProjectType = {
	title: string;
	status: ProjectStatusEnum;
	description: string;
	descriptionKey?: string;
	image: string;
	githubLink?: string;
	demoLink?: string;
	technologies?: string[];
};

export type Project42Type = {
	title: string;
	circle: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	description: string;
	descriptionKey?: string;
	image?: string;
	githubLink?: string;
	demoLink?: string;
	technologies: string[];
};
