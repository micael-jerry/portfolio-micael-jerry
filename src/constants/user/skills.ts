import { LOGO } from "../../assets";

export type SkillType = {
	name: string;
	logo: string;
};

export const ALL_SKILLS: SkillType[] = [
	// --- Language ---
	{ name: "CSS", logo: LOGO.css },
	{ name: "HTML", logo: LOGO.html },
	{ name: "Javascript", logo: LOGO.javascript },
	{ name: "Typescript", logo: LOGO.typescript },
	{ name: "C", logo: LOGO.c },
	{ name: "C++", logo: LOGO.cpp },
	{ name: "Java", logo: LOGO.java },
	{ name: "Python", logo: LOGO.python },

	// --- Frameworks / Library ---
	{ name: "NestJS", logo: LOGO.nest },
	{ name: "NextJS", logo: LOGO.next },
	{ name: "ExpressJS", logo: LOGO.express },
	{ name: "ReactJS", logo: LOGO.react },
	{ name: "Spring-Boot", logo: LOGO.springBoot },
	{ name: "Tailwind CSS", logo: LOGO.tailwind },
	{ name: "GraphQL", logo: LOGO.graphQl },

	// --- Database ---
	{ name: "MongoDB", logo: LOGO.mongoDb },
	{ name: "PostgreSQL", logo: LOGO.postgreSql },

	// --- Tools / Others ---
	{ name: "Linux", logo: LOGO.linux },
	{ name: "CI/CD", logo: LOGO.ciCd },
	{ name: "Docker", logo: LOGO.docker },
	{ name: "Git", logo: LOGO.git },
	{ name: "Github", logo: LOGO.github },
	{ name: "Jira", logo: LOGO.jira },
];
