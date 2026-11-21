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

// ─────────────────────────────────────────────────────────────────────────────
// Professional work experience only (companies, jobs, internships).
// Add new entries freely — the UI renders them automatically.
// ─────────────────────────────────────────────────────────────────────────────
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
];
