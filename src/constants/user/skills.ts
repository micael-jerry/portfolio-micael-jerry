import { LOGO } from "../../assets";

export type SkillType = {
	name: string;
	logo: string;
};

export const FRONT_END_SKILLS = [
	{
		name: "HTML",
		logo: LOGO.html,
	},
	{
		name: "CSS",
		logo: LOGO.css,
	},
	{
		name: "Javascript",
		logo: LOGO.javascript,
	},
	{
		name: "Typescript",
		logo: LOGO.typescript,
	},
	{
		name: "React",
		logo: LOGO.react,
	},
	{
		name: "Next",
		logo: LOGO.next,
	},
	{
		name: "Tailwind CSS",
		logo: LOGO.tailwind,
	},
];

export const BACK_END_SKILLS = [
	{
		name: "NestJS",
		logo: LOGO.nest,
	},
	{
		name: "Java",
		logo: LOGO.java,
	},
	{
		name: "Spring-Boot",
		logo: LOGO.springBoot,
	},
	{
		name: "Express.js",
		logo: LOGO.express,
	},
	{
		name: "GraphQL",
		logo: LOGO.graphQl,
	},
	{
		name: "PostgreSQL",
		logo: LOGO.postgreSql,
	},
	{
		name: "MongoDB",
		logo: LOGO.mongoDb,
	},
];

export const OTHER_SKILLS = [
	{
		name: "Git",
		logo: LOGO.git,
	},
	{
		name: "Github",
		logo: LOGO.github,
	},
	{
		name: "CI/CD",
		logo: LOGO.ciCd,
	},
	{
		name: "Docker",
		logo: LOGO.docker,
	},
	{
		name: "Jira",
		logo: LOGO.jira,
	},
	{
		name: "Ruby",
		logo: LOGO.ruby,
	},
	{
		name: "Python",
		logo: LOGO.python,
	},
];
