import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'About Page',
}

const About: NextPage = () => {
    return (
        <h3>
            Select sub item
        </h3>
    )
}

export default About