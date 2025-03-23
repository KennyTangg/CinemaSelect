import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Card from './components/Card';
import Hero from './components/Hero';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    < >
      <BrowserRouter>
        <main>
          {/* Navigation */}
          <HomePage />
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
