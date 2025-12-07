import Experience from "./Experience"
import caribouLogo from '../../public/caribouLogo.png'
import caribouIcon from '../../public/caribouIcon.png'

const Caribou = () => {
  return (
    <Experience
        highlightProps={{
            logoSrc: caribouLogo,
            logoAlt: 'Caribou Contests logo',
            iconSrc: caribouIcon,
            iconAlt: 'Caribou Contests icon',
            title: 'Caribou Contests',
            date: 'Jan. 2025'
        }}
        title='Internship #2'
        role='Full-Stack Developer Intern'
        description={[
            `Cut Contest Day Editor load time by 98% (90s → 2s) by 
            fixing HTML parsing and adding validation`,
            `Enabled parallel editing for 10+ translators with 
            conflict detection, eliminating overwrite errors`,
            ` Added multilingual audio playback using WebSpeech API 
            for improved accessibility`,
            `Reduced answer submission latency by 70% by replacing 
            full page reloads with async POST requests`,
            `Secured 100% of database queries with input 
            sanitization and prepared statements, eliminating 
            injection vulnerabilities`
        ]}
        techStack={[
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL',
        ]}
        time={4}
    />
  )
}

export default Caribou