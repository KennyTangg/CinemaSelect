import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    < >
      <BrowserRouter>
        <main>
          {/* Navigation */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<RegisterPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="*" element={<h1 className="flex items-center justify-center min-h-screen text-3xl">404: Page Not Found</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App