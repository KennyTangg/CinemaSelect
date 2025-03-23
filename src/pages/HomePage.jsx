import React from 'react'
import Card from '../components/Card';
import Hero from '../components/Hero';

// className="grid grid-cols-[50px_1fr_50px]"
const HomePage = () => {
    return (
        <section>
            <Hero />
            <Card />
        </section>
    )
}

export default HomePage;