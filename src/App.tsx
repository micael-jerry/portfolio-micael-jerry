import React from "react";
import { Layout } from "./components/Layout/Layout";
import { SectionContainer } from "./components/SectionContainer/SectionContainer";
import { AboutSection } from "./sections/about/AboutSection";
import { ContactSection } from "./sections/contact/ContactSection";
import { EducationSection } from "./sections/education/EducationSection";
import { ExperienceSection } from "./sections/experience/ExperienceSection";
import { IntroSection } from "./sections/intro/IntroSection";
import { ProjectsSection } from "./sections/projects/ProjectsSection";
import { Projects42Section } from "./sections/projects42/Projects42Section";
import { SkillsSection } from "./sections/skills/SkillsSection";
import { ThemeProvider } from "./theme/ThemeContext";
import { SectionIdEnum } from "./types/sectionId/sectionId.type";

const SECTIONS = [
	{
		sectionId: SectionIdEnum.INTRO,
		component: <IntroSection />,
	},
	{
		sectionId: SectionIdEnum.ABOUT,
		component: <AboutSection />,
	},
	{
		sectionId: SectionIdEnum.EXPERIENCE,
		component: <ExperienceSection />,
	},
	{
		sectionId: SectionIdEnum.SKILLS,
		component: <SkillsSection />,
	},
	{
		sectionId: SectionIdEnum.EDUCATION,
		component: <EducationSection />,
	},
	{
		sectionId: SectionIdEnum.PROJECTS,
		component: <ProjectsSection />,
	},
	{
		sectionId: SectionIdEnum.PROJECTS_42,
		component: <Projects42Section />,
	},
	{
		sectionId: SectionIdEnum.CONTACT,
		component: <ContactSection />,
	},
];

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<Layout>
				{SECTIONS.map(({ sectionId, component }) => (
					<SectionContainer sectionId={sectionId} key={sectionId}>
						{component}
					</SectionContainer>
				))}
			</Layout>
		</ThemeProvider>
	);
};

export default App;
