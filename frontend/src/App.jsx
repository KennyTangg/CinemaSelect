import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>Cinema Select</title>
      </Helmet>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="*" element={<h1 className="flex items-center justify-center min-h-screen text-3xl">404: Page Not Found</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
