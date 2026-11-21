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
// Most recent first. Add new entries freely — the UI renders them automatically.
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
			"Flow Designer",
			"Business Rules",
			"Script Includes",
			"Client Scripts",
			"Service Catalog",
			"REST APIs",
			"JavaScript",
		],
	},
	{
		id: "frontend-dev",
		roleKey: "experience.frontend.role",
		entityKey: "experience.frontend.entity",
		periodKey: "experience.frontend.period",
		badgeKey: "experience.frontend.badge",
		domainKey: "experience.frontend.domain",
		locationKey: "experience.frontend.location",
		descriptionKey: "experience.frontend.desc",
		highlightsKeys: ["experience.frontend.h1", "experience.frontend.h2", "experience.frontend.h3"],
		technologies: ["Angular 19", "Angular 16", "TypeScript", "UX", "Migration"],
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
		highlightsKeys: ["experience.fullstack.h1", "experience.fullstack.h2", "experience.fullstack.h3"],
		technologies: ["NestJS", "GraphQL", "Next.js", "TypeScript", "TDD"],
	},
];
