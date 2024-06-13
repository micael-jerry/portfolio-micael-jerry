export enum ProjectStatusEnum {
	IN_PROGRESS = "In progress",
	COMPLETED = "Completed",
}

export type ProjectType = {
	name: string;
	status: ProjectStatusEnum;
	githubRepository: string;
	description: string;
};

export const PROJECTS: ProjectType[] = [
	{
		name: "Portfolio",
		status: ProjectStatusEnum.IN_PROGRESS,
		githubRepository: "https://github.com/micael-jerry/portfolio-micael-jerry",
		description:
			"Design and development of a portfolio website to showcase my skills and achievements.",
	},
	{
		name: "Portfolio1",
		status: ProjectStatusEnum.IN_PROGRESS,
		githubRepository: "https://github.com/micael-jerry/portfolio-micael-jerry",
		description:
			"Design and development of a portfolio websi aejr ;aelrn Design and development of a portfolio websi aejr ;aelrn a; na tae tou kant ae aeljtn Design and development of a portfolio websi aejr ;aelrn a; na tae tou kant ae aeljtn Design and development of a portfolio websi aejr ;aelrn a; na tae tou kant ae aeljtn a; na tae tou kant ae aeljtn ajent aette to showcase my skills and achievements.",
	},
	{
		name: "Portfolio2",
		status: ProjectStatusEnum.IN_PROGRESS,
		githubRepository: "https://github.com/micael-jerry/portfolio-micael-jerry",
		description:
			"Design and development of a portfolio website to showcase my skills and achievements Design and development of a portfolio websi aejr ;aelrn a; na tae tou kant ae aeljtn.",
	},
	{
		name: "Portfolio3",
		status: ProjectStatusEnum.IN_PROGRESS,
		githubRepository: "https://github.com/micael-jerry/portfolio-micael-jerry",
		description:
			"Design and development of a portfolio website to showcase my skills and achievements.",
	},
	{
		name: "Portfolio4",
		status: ProjectStatusEnum.IN_PROGRESS,
		githubRepository: "https://github.com/micael-jerry/portfolio-micael-jerry",
		description:
			"Design and development of a portfolio website to showcase my skills and achievements.",
	},
];
