import Experience from "../Experience"

const Nokia = () => {
  return (
    <Experience
      highlightProps={{
        logo: {
          src: '/experiences/nokiaLogo.png', 
          alt: 'Nokia logo'
        },
        icon: {
          src: '/experiences/nokiaIcon.png',
          alt: 'Nokia icon'
        },
        title: 'Nokia',
        date: 'Jul. 2022'
      }}
      title='Internship #1'
      role='Network Analytics Intern'
      bullets={[
        `Built an unsupervised ML tool using k-means clustering
             to detect anomalies in 1000+ customer network logs, 
             enabling proactive troubleshooting`,
        `Developed a fuzzy matching heuristic algorithm that 
            increased correct statistic name matches by 26%`,
        `Normalized debug log data, improving downstream 
            analysis consistency by 38%`,
        `Added CSV/JSON support to packet filtering script, 
            enabling processing of 4 data formats`
      ]}
      techStack={[
        'Python',
        'Perl',
        'Wireshark'
      ]}
      time={2}
    />
  )
}

export default Nokia