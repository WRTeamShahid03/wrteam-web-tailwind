'use client'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../layout/Layout'
import HeroSection from './sections/HeroSection'
import AboutWrteam from './sections/AboutWrteam'
import AchievementEnvanto from './sections/AchievementEnvanto'
import Counter from './sections/Counter'
import Solutions from './sections/Solutions'
import BestItServices from './sections/BestItServices'
import Technologies from './sections/Technologies'
import WorkChain from './sections/WorkChain'
import Exclusive from './sections/Exclusive'
import Testimonials from './sections/Testimonials'

const HomePage: React.FC = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Layout>
            <HeroSection />
            <AboutWrteam />
            <AchievementEnvanto />
            <Counter />
            <Solutions />
            <BestItServices />
            <Technologies />
            <WorkChain />
            <Exclusive />
            <Testimonials />
        </Layout>
    )
}

export default HomePage