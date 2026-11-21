export interface ExperienceType {
	id: string;
	roleKey: string;
	entityKey: string;
	periodKey: string;
	badgeKey: string;
	domainKey: string;
	locationKey: string;
	isCurrent?: boolean;
	descriptionKey: string;
	highlightsKeys: string[];
	technologies: string[];
}

export const EXPERIENCES: ExperienceType[] = [
	{
		id: "servicenow-dev",
		roleKey: "experience.servicenow.role",
		entityKey: "experience.servicenow.entity",
		periodKey: "experience.servicenow.period",
		badgeKey: "experience.servicenow.badge",
		domainKey: "experience.servicenow.domain",
		locationKey: "experience.servicenow.location",
		isCurrent: true,
		descriptionKey: "experience.servicenow.desc",
		highlightsKeys: [
			"experience.servicenow.h1",
			"experience.servicenow.h2",
			"experience.servicenow.h3",
			"experience.servicenow.h4",
		],
		technologies: [
			"ServiceNow",
			"ITSM",
			"ESM",
			"Flow Designer",
			"Business Rules",
			"Script Includes",
			"Client Scripts",
			"REST APIs",
			"Service Catalog",
		],
	},
	{
		id: "fullstack-dev",
		roleKey: "experience.fullstack.role",
		entityKey: "experience.fullstack.entity",
		periodKey: "experience.fullstack.period",
		badgeKey: "experience.fullstack.badge",
		domainKey: "experience.fullstack.domain",
		locationKey: "experience.fullstack.location",
		descriptionKey: "experience.fullstack.desc",
		highlightsKeys: [
			"experience.fullstack.h1",
			"experience.fullstack.h2",
			"experience.fullstack.h3",
			"experience.fullstack.h4",
		],
		technologies: [
			"React",
			"Next.js",
			"TypeScript",
			"NestJS",
			"Node.js",
			"PostgreSQL",
			"MongoDB",
			"Docker",
			"REST & GraphQL",
		],
	},
	{
		id: "student-42-hei",
		roleKey: "experience.academic.role",
		entityKey: "experience.academic.entity",
		periodKey: "experience.academic.period",
		badgeKey: "experience.academic.badge",
		domainKey: "experience.academic.domain",
		locationKey: "experience.academic.location",
		descriptionKey: "experience.academic.desc",
		highlightsKeys: [
			"experience.academic.h1",
			"experience.academic.h2",
			"experience.academic.h3",
			"experience.academic.h4",
		],
		technologies: ["C", "C++", "Linux", "Algorithms", "POSIX Threads", "TCP/IP Sockets", "Clean Code", "System Design"],
	},
];
