import { Suspense, lazy } from 'react';
import GlobalLoader from '../components/ui/Loader/GlobalLoader';

// Lazy load sections with explicit paths
const Hero = lazy(() => import('../sections/Hero/Hero'));
const Metrics = lazy(() => import('../sections/Metrics/Metrics'));
const Features = lazy(() => import('../sections/Features/Features'));
const AgenticAI = lazy(() => import('../sections/AgenticAI/AgenticAI'));
const Partners = lazy(() => import('../sections/Partners/Partners'));
const RevenueAutomation = lazy(() => import('../sections/RevenueAutomation/RevenueAutomation'));

const HomePage = () => {
  return (
    <main>
      <Suspense fallback={<GlobalLoader />}>
        <Hero />
        <Metrics />
        <Features />
        <AgenticAI />
        <Partners />
        <RevenueAutomation />
      </Suspense>
    </main>
  );
};

export default HomePage;
