import Experience from "./Experience"
import fordLogo from '../../public/fordLogo.png'
import fordIcon from '../../public/fordIcon.png'

const Ford = () => {
  return (
    <Experience
        highlightProps={{
            logoSrc: fordLogo,
            logoAlt: 'Ford Motor Company logo',
            iconSrc: fordIcon,
            iconAlt: 'Ford icon',
            title: 'Ford Motor Company',
            date: 'Sep. 2025'
        }}
        title='Internship #3'
        role='Android Developer Intern'
        description={[
            `Reduced manual remediation time by 80% and sped up 
            code reviews by building a code quality tool 
            integrating SonarQube, OpenAI, Jira, and GitHub APIs 
            to detect issues, generate fixes, create tickets, 
            and submit PRs`,
            `Implemented user interface updates for towing app 
            components using Kotlin in Android AOSP, translating 
            Figma mockups into functional interfaces`,
            `Improved test coverage by writing unit and UI tests 
            using JUnit, Mockito, and Roboelectric`
        ]}
        techStack={[
            'Kotlin',
            'Java',
            'Android AOSP',
            'JUnit',
            'Mockito',
            'Roboelectric',
            'Jenkins',
            'SonarQube',
            'Figma',
            'Jira',
        ]}
        time={4}
    />
  )
}

export default Ford