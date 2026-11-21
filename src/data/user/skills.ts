export interface SkillCompetency {
	titleKey: string;
	descKey: string;
}

export interface SkillDomain {
	id: string;
	titleKey: string;
	badgeKey: string;
	descriptionKey: string;
	iconType: "servicenow" | "fullstack" | "systems" | "data_devops";
	competencies: SkillCompetency[];
	technologies: string[];
	highlightCount: string;
}

export const SKILL_DOMAINS: SkillDomain[] = [
	{
		id: "servicenow",
		titleKey: "skills.domains.servicenow.title",
		badgeKey: "skills.domains.servicenow.badge",
		descriptionKey: "skills.domains.servicenow.desc",
		iconType: "servicenow",
		highlightCount: "ESM & ITSM",
		competencies: [
			{
				titleKey: "skills.domains.servicenow.c1_title",
				descKey: "skills.domains.servicenow.c1_desc",
			},
			{
				titleKey: "skills.domains.servicenow.c2_title",
				descKey: "skills.domains.servicenow.c2_desc",
			},
			{
				titleKey: "skills.domains.servicenow.c3_title",
				descKey: "skills.domains.servicenow.c3_desc",
			},
			{
				titleKey: "skills.domains.servicenow.c4_title",
				descKey: "skills.domains.servicenow.c4_desc",
			},
		],
		technologies: [
			"ServiceNow Platform",
			"ITSM",
			"ESM",
			"Flow Designer",
			"Business Rules",
			"Script Includes",
			"Client Scripts",
			"Service Catalog",
			"REST / JSON APIs",
			"Service Portal",
		],
	},
	{
		id: "fullstack",
		titleKey: "skills.domains.fullstack.title",
		badgeKey: "skills.domains.fullstack.badge",
		descriptionKey: "skills.domains.fullstack.desc",
		iconType: "fullstack",
		highlightCount: "Web & APIs",
		competencies: [
			{
				titleKey: "skills.domains.fullstack.c1_title",
				descKey: "skills.domains.fullstack.c1_desc",
			},
			{
				titleKey: "skills.domains.fullstack.c2_title",
				descKey: "skills.domains.fullstack.c2_desc",
			},
			{
				titleKey: "skills.domains.fullstack.c3_title",
				descKey: "skills.domains.fullstack.c3_desc",
			},
		],
		technologies: [
			"Angular",
			"React",
			"Next.js",
			"TypeScript",
			"NestJS",
			"Node.js",
			"Spring Boot",
			"Express",
			"Tailwind CSS",
			"REST",
			"GraphQL",
		],
	},
	{
		id: "systems",
		titleKey: "skills.domains.systems.title",
		badgeKey: "skills.domains.systems.badge",
		descriptionKey: "skills.domains.systems.desc",
		iconType: "systems",
		highlightCount: "42 Cursus",
		competencies: [
			{
				titleKey: "skills.domains.systems.c1_title",
				descKey: "skills.domains.systems.c1_desc",
			},
			{
				titleKey: "skills.domains.systems.c2_title",
				descKey: "skills.domains.systems.c2_desc",
			},
			{
				titleKey: "skills.domains.systems.c3_title",
				descKey: "skills.domains.systems.c3_desc",
			},
		],
		technologies: ["C", "C++", "Linux / Unix", "Bash", "Memory Management", "POSIX Threads", "TCP/IP Sockets", "Make"],
	},
	{
		id: "data_devops",
		titleKey: "skills.domains.data_devops.title",
		badgeKey: "skills.domains.data_devops.badge",
		descriptionKey: "skills.domains.data_devops.desc",
		iconType: "data_devops",
		highlightCount: "Data & Cloud",
		competencies: [
			{
				titleKey: "skills.domains.data_devops.c1_title",
				descKey: "skills.domains.data_devops.c1_desc",
			},
			{
				titleKey: "skills.domains.data_devops.c2_title",
				descKey: "skills.domains.data_devops.c2_desc",
			},
			{
				titleKey: "skills.domains.data_devops.c3_title",
				descKey: "skills.domains.data_devops.c3_desc",
			},
		],
		technologies: [
			"PostgreSQL",
			"MongoDB",
			"Docker",
			"Linux",
			"Git",
			"GitHub Actions",
			"GitLab",
			"CI/CD",
			"Jira",
			"Trello",
			"Agile / Scrum",
		],
	},
];

export interface SkillType {
	name: string;
	category: string;
}

export const SKILL_CATEGORIES = {
	enterprise: "enterprise",
	languages: "languages",
	frameworks: "frameworks",
	databases: "databases",
	tools: "tools",
} as const;

export const ALL_SKILLS: SkillType[] = [
	{ name: "ServiceNow", category: SKILL_CATEGORIES.enterprise },
	{ name: "ITSM / ESM", category: SKILL_CATEGORIES.enterprise },
	{ name: "Flow Designer", category: SKILL_CATEGORIES.enterprise },
	{ name: "ServiceNow Scripting", category: SKILL_CATEGORIES.enterprise },
	{ name: "TypeScript", category: SKILL_CATEGORIES.languages },
	{ name: "JavaScript", category: SKILL_CATEGORIES.languages },
	{ name: "C", category: SKILL_CATEGORIES.languages },
	{ name: "C++", category: SKILL_CATEGORIES.languages },
	{ name: "Java", category: SKILL_CATEGORIES.languages },
	{ name: "Python", category: SKILL_CATEGORIES.languages },
	{ name: "Angular", category: SKILL_CATEGORIES.frameworks },
	{ name: "React", category: SKILL_CATEGORIES.frameworks },
	{ name: "Next.js", category: SKILL_CATEGORIES.frameworks },
	{ name: "NestJS", category: SKILL_CATEGORIES.frameworks },
	{ name: "Node.js", category: SKILL_CATEGORIES.frameworks },
	{ name: "Spring Boot", category: SKILL_CATEGORIES.frameworks },
	{ name: "Express", category: SKILL_CATEGORIES.frameworks },
	{ name: "Tailwind CSS", category: SKILL_CATEGORIES.frameworks },
	{ name: "REST", category: SKILL_CATEGORIES.frameworks },
	{ name: "GraphQL", category: SKILL_CATEGORIES.frameworks },
	{ name: "PostgreSQL", category: SKILL_CATEGORIES.databases },
	{ name: "MongoDB", category: SKILL_CATEGORIES.databases },
	{ name: "Docker", category: SKILL_CATEGORIES.tools },
	{ name: "Linux", category: SKILL_CATEGORIES.tools },
	{ name: "Git & GitHub", category: SKILL_CATEGORIES.tools },
	{ name: "GitLab", category: SKILL_CATEGORIES.tools },
	{ name: "CI/CD", category: SKILL_CATEGORIES.tools },
	{ name: "Jira", category: SKILL_CATEGORIES.tools },
	{ name: "Trello", category: SKILL_CATEGORIES.tools },
];
