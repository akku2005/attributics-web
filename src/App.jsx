import { BrowserRouter, Routes, Route, Suspense } from 'react-router-dom';
import { lazy } from 'react';
import { Header, Footer } from './components';
import GlobalLoader from './components/ui/Loader/GlobalLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<GlobalLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
