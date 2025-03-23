import React from 'react'
import Card from '../components/Card';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';

// className="grid grid-cols-[50px_1fr_50px]"
const HomePage = () => {
    return (
        <section>
            <Hero />
            <Card />
            <FAQ />
        </section>
    )
}

export default HomePage;