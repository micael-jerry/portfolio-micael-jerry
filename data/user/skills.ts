import { LOGO } from "../../src/assets";

export type SkillType = {
	name: string;
	logo: string;
	category: string;
};

export const SKILL_CATEGORIES = {
	languages: "Languages",
	frameworks: "Frameworks & Libraries",
	databases: "Databases",
	tools: "Tools & Others",
};

export const ALL_SKILLS: SkillType[] = [
	// --- Languages ---
	{ name: "Javascript", logo: LOGO.javascript, category: SKILL_CATEGORIES.languages },
	{ name: "Typescript", logo: LOGO.typescript, category: SKILL_CATEGORIES.languages },
	{ name: "C", logo: LOGO.c, category: SKILL_CATEGORIES.languages },
	{ name: "Java", logo: LOGO.java, category: SKILL_CATEGORIES.languages },
	{ name: "Python", logo: LOGO.python, category: SKILL_CATEGORIES.languages },

	// --- Frameworks / Libraries ---
	{ name: "NestJS", logo: LOGO.nest, category: SKILL_CATEGORIES.frameworks },
	{ name: "NextJS", logo: LOGO.next, category: SKILL_CATEGORIES.frameworks },
	{ name: "ExpressJS", logo: LOGO.express, category: SKILL_CATEGORIES.frameworks },
	{ name: "ReactJS", logo: LOGO.react, category: SKILL_CATEGORIES.frameworks },
	{ name: "Angular", logo: LOGO.angular, category: SKILL_CATEGORIES.frameworks },
	{ name: "Spring-Boot", logo: LOGO.springBoot, category: SKILL_CATEGORIES.frameworks },
	{ name: "Tailwind CSS", logo: LOGO.tailwind, category: SKILL_CATEGORIES.frameworks },
	{ name: "GraphQL", logo: LOGO.graphQl, category: SKILL_CATEGORIES.frameworks },

	// --- Databases ---
	{ name: "MongoDB", logo: LOGO.mongoDb, category: SKILL_CATEGORIES.databases },
	{ name: "PostgreSQL", logo: LOGO.postgreSql, category: SKILL_CATEGORIES.databases },

	// --- Tools / Others ---
	{ name: "Linux", logo: LOGO.linux, category: SKILL_CATEGORIES.tools },
	{ name: "CI/CD", logo: LOGO.ciCd, category: SKILL_CATEGORIES.tools },
	{ name: "Docker", logo: LOGO.docker, category: SKILL_CATEGORIES.tools },
	{ name: "Git", logo: LOGO.git, category: SKILL_CATEGORIES.tools },
	{ name: "Github", logo: LOGO.github, category: SKILL_CATEGORIES.tools },
	{ name: "Jira", logo: LOGO.jira, category: SKILL_CATEGORIES.tools },
];
