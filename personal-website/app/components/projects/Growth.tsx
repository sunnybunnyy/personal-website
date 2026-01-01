import Project from '../Project'

const Growth = () => {
    return (
        <Project
            title='Android Plant Growth Tracker'
            name='Growth'
            bullets={[
                'Developed app to track plant growth with photo capture and time-lapse video generation',
                'Managed data persistence with Room and automated video creation using FFmpeg',
                'Designed UI with Jetpack Compose and integrated CameraX for photo capture',
            ]}
            techStack={[
                'Kotlin',
                'Jetpack Compose',
                'FFmpeg',
                'Room'
            ]}
            screenshots={[
                {
                    src: '/projects/growth1.png',
                    alt: 'Growth permission screens'
                },
                {
                    src: '/projects/growth2.png',
                    alt: 'Growth main app screens'
                }
            ]}
        />
    )
}

export default Growth