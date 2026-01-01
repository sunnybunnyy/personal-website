import Project from '../Project'

const Zone = () => {
    return (
        <Project
            title='Fitbit Heart Rate Zone Monitor'
            name='Zone'
            bullets={[
                'Built a Fitbit app that tracks real-time heart rate and triggers haptic feedback when outside target zones',
                'Integrated Fitbit API to process heart rate data and validate zones dynamically with on-device alerts',
                'Designed UI for custom zone settings and live heart rate display',
            ]}
            techStack={[
                'JavaScript',
                'Fitbit SDK',
            ]}
            screenshots={[
                {
                    src: '/projects/zone1.png',
                    alt: 'Zone screen 1'
                },
                {
                    src: '/projects/zone2.png',
                    alt: 'Zone screen 2'
                }
            ]}
        />
    )
}

export default Zone