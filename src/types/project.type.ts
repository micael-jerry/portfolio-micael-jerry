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
