import React from 'react'
import Card from '../components/Card';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

// className="grid grid-cols-[50px_1fr_50px]"
const HomePage = () => {
    return (
        <section>
            <Hero />
            <Card />
            <FAQ />
            <Footer />
        </section>
    )
}

export default HomePage;