import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './components/Card';
import Hero from './components/Hero';

const App = () => {
  return (
    < >
      <BrowserRouter>
        <main>
          {/* Navigation */}
          <Hero />

          {/* Route default
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes> */}
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
