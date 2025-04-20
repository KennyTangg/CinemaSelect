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
            <div className='absolute top-175 sm:top-150 h-[30vh] w-full bg-gradient-to-t from-gray-900 to-transparent'></div>
            <section className='flex flex-col gap-10 pt-25'>
                <h1 className='p-0 text-center text-xl font-bold lg:pl-30 lg:text-left sm:text-3xl lg:text-4xl'>NOW SHOWING IN CINEMAS</h1>
                <Card />
            </section>
            <section className="home-faq">
                <FAQ />
            </section>    
            <Footer />
        </section>
    )
}

export default HomePage;