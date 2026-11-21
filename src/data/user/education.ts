// ─────────────────────────────────────────────────────────────────────────────
// Education data — add new entries freely, the UI renders them automatically.
// Two kinds of entries:
//   "degree"      → formal diploma / programme from a school or university
//   "certification" → professional certificate, online course, or badge
// ─────────────────────────────────────────────────────────────────────────────

export type EducationKind = "degree" | "certification";

export interface EducationType {
	id: string;
	kind: EducationKind;
	institutionKey: string;
	degreeKey: string;
	descriptionKey: string;
	periodKey: string;
	locationKey: string;
	/** Optional: highlight bullet i18n keys (up to 3 recommended) */
	highlightsKeys?: string[];
	/** Tech / topics tags shown as chips */
	tags: string[];
	/** Shows a "In Progress" badge when true */
	isOngoing?: boolean;
}

export const EDUCATION: EducationType[] = [
	{
		id: "42-antananarivo",
		kind: "degree",
		institutionKey: "education.42.institution",
		degreeKey: "education.42.degree",
		descriptionKey: "education.42.desc",
		periodKey: "education.42.period",
		locationKey: "education.42.location",
		isOngoing: true,
		highlightsKeys: ["education.42.h1", "education.42.h2", "education.42.h3"],
		tags: ["C", "C++", "Unix", "Algorithms", "POSIX Threads", "Networking", "Docker", "Clean Code"],
	},
	{
		id: "hei-madagascar",
		kind: "degree",
		institutionKey: "education.hei.institution",
		degreeKey: "education.hei.degree",
		descriptionKey: "education.hei.desc",
		periodKey: "education.hei.period",
		locationKey: "education.hei.location",
		highlightsKeys: ["education.hei.h1", "education.hei.h2", "education.hei.h3"],
		tags: ["Software Engineering", "Algorithms", "System Design", "Object-Oriented Programming", "Databases"],
	},
];
