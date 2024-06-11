import React from "react";
import { Layout } from "./components/Layout/Layout";
import { SectionContainer } from "./components/SectionContainer/SectionContainer";
import { AboutSection } from "./sections/about/AboutSection";
import { ContactSection } from "./sections/contact/ContactSection";
import { IntroSection } from "./sections/intro/IntroSection";
import { ProjetsSection } from "./sections/projets/ProjetsSection";
import { SkillsSection } from "./sections/skills/SkillsSection";
import { SectionIdEnum } from "./types/sectionId/sectionId";

const sections = [
	{
		sectionId: SectionIdEnum.INTRO,
		component: <IntroSection />,
	},
	{
		sectionId: SectionIdEnum.ABOUT,
		component: <AboutSection />,
	},
	{
		sectionId: SectionIdEnum.SKILLS,
		component: <SkillsSection />,
	},
	{
		sectionId: SectionIdEnum.PROJECTS,
		component: <ProjetsSection />,
	},
	{
		secitonId: SectionIdEnum.CONTACT,
		component: <ContactSection />,
	},
];

const App: React.FC = () => {
	return (
		<Layout>
			{sections.map(({ sectionId, component }) => (
				<SectionContainer sectionId={sectionId!} key={sectionId}>
					{component}
				</SectionContainer>
			))}
		</Layout>
	);
};

export default App;
