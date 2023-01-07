import { useContext } from 'react'
import { ScreenContext } from './App'
import IntroSection from './IntroSection';
import IntroSectionMobile from './IntroSectionMobile';
import ProjectsSection from './ProjectsSection';
import ProjectsSectionMobile from './ProjectsSectionMobile';
import ExperienceSection from './ExperienceSection';
import ExperienceMobile from './ExperienceMobile';
import DiarySection from './DiarySection';
import DiarySectionMobile from './DiarySectionMobile';
import Resume from './Resume';

const Portfolio = () => {
    const appContext = useContext(ScreenContext);
    if(appContext) {
        return (
            <div>
                <IntroSection />
                <ProjectsSection />
                <ExperienceSection />
                <DiarySection />
                <Resume />
            </div>
        )
    } else {
        return (
            <div>
                <IntroSectionMobile />
                <ProjectsSectionMobile />
                <ExperienceMobile />
                <DiarySectionMobile />
                <Resume />
            </div>
        )
    }
};

export default Portfolio;
