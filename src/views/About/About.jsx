import '../Home/Home.scss'
import React from 'react';
import AboutDropdowns from '../../components/aboutDropdowns/AboutDropdowns';
import background from '../../assets/background_about.png'
import Banner from '../../components/banner/Banner';

/**
 * 
 * @returns page About
 */
const About = () => {
    document.title="À propos"
    return (
        <main>
            <Banner image={background} type="about" />
            {<AboutDropdowns />}
        </main>
    )
}

export default About