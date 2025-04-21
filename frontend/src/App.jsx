import { Navigate, Outlet } from 'react-router-dom';
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
import SettingsPage from './pages/SettingsPage';

const SetRoute = ({ isPublic }) => {
  const token = localStorage.getItem('token');

  if (isPublic) {
    if (token) {
      return <Navigate to="/main" />;
    } else {
      return <Outlet />;
    }
  } else {
    if (!token) {
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  }
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>Cinema Select</title>
      </Helmet>
      <BrowserRouter>
        <main>
          <Routes>
            <Route element={<SetRoute isPublic={true} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/signup" element={<AuthPage />} />
            </Route>
            <Route element={<SetRoute isPublic={false} />}>
              <Route path="/main" element={<MainPage />} />
              <Route path="/main/:path" element={<MoviePage />} />
              <Route path="/cinemas" element={<CinemaPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/tickets" element={<TicketPage />} />
              <Route path="/upcoming" element={<UpcomingPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/settings/:option" element={<SettingsPage />} />
            </Route>

            <Route path="*" element={<h1 className="flex items-center justify-center min-h-screen text-3xl">404: Page Not Found</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
