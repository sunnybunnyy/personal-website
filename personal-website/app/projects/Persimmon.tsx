import Project from '../components/Project'

const Persimmon = () => {
  return (
    <Project
        title='Workout Planner & Tracker'
        name='Persimmon'
        bullets={[
            'Built full-stack app integrating Strava API with custom REST backend for tracking and analytics',
            'Developed ML-powered recommendation engine to suggest personalized training plans based on user data',
            'Reduced Strava API calls by 72% using Redis caching, improving dashboard load time',
            'Created interactive visualizations with Recharts for pace, distance, and heart rate trends',
            'Automated deployment with GitHub Actions; deployed backend on Render, frontend on Netlify'
        ]}
        techStack={[
            'React',
            'Express.js',
            'Node.js',
            'PostgreSQL',
            'Redis',
            'scikit-learn',
            'GitHub Actions'
        ]}
        screenshots={[
            {
                src: '/projects/persimmon1.png',
                alt: 'Persimmon home screen'
            },
            {
                src: '/projects/persimmon2.png',
                alt: 'Persimmon analytics screen'
            }
        ]}
    />
  )
}

export default Persimmon