import { Layout } from "./components/Layout/Layout"
import { AboutSection } from "./sections/about/AboutSection"
import { ContactSection } from "./sections/contact/ContactSection"
import { IntroSection } from "./sections/intro/IntroSection"
import { ProjetsSection } from "./sections/projets/ProjetsSection"
import { SkillsSection } from "./sections/skills/SkillsSection"
import { SectionIdEnum } from "./types/sectionId/sectionId"

const sections = [
  {
    sectionId: SectionIdEnum.INTRO,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.ABOUT,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.SKILLS,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.PROJECTS,
    component: <IntroSection />,
  },
  {
    secitonId: SectionIdEnum.CONTACT,
    component: <IntroSection />,
  },
];

const App = () => {
  return (
    <Layout>
      {
        sections.map(({ sectionId, component }) => (
          <section key={sectionId} id={sectionId}>
            {component}
          </section>
        ))
      }
    </Layout>
  )
}

export default App
