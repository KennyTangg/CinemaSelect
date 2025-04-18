import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';
import CinemaPage from './pages/CinemaPage';
import PaymentPage from './pages/PaymentPage';
import TicketPage from './pages/TicketPage';
import UpcomingPage from './pages/UpcomingPage';
import HistoryPage from './pages/HistoryPage';

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
            <Route path="/main/:path" element={<MoviePage />} />
            <Route path="/cinemas" element={<CinemaPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/tickets" element={<TicketPage />} />
            <Route path="/upcoming" element={<UpcomingPage />}  />
            <Route path="/history" element={<HistoryPage />}  />
            <Route path="*" element={<h1 className="flex items-center justify-center min-h-screen text-3xl">404: Page Not Found</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
