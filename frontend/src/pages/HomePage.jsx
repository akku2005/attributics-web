import { Suspense, lazy } from 'react';
import GlobalLoader from '../components/ui/Loader/GlobalLoader';
import WhiteSpace from '../components/layout/WhiteSpace/WhiteSpace';

// Lazy load sections with explicit paths
const Hero = lazy(() => import('../sections/Home/Hero/Hero'));
const HeroTwo = lazy(() => import('../sections/Home/HeroTwo/HeroTwo'));
const Metrics = lazy(() => import('../sections/Home/Metrics/Metrics'));
const Agentic = lazy(() => import('../sections/Home/Agentic/Agentic'));
const Features = lazy(() => import('../sections/Home/Features/Features'));
const Partners = lazy(() => import('../sections/Home/Partners/Partners'));
const CTA = lazy(() => import('../sections/Home/CTA/CTA'));
const RevenueAutomation = lazy(() => import('../sections/Home/RevenueAutomation/RevenueAutomation'));

const reducedWhiteSpaceHeight = '10vh';
const whiteSpaceHeight = '15vh';
const biggerWhiteSpaceHeight = '25vh';

const HomePage = () => {
  return (
    <main>
      <Suspense fallback={<GlobalLoader />}>
        <HeroTwo />
        <WhiteSpace height={reducedWhiteSpaceHeight} />
        
        <Metrics />
        <WhiteSpace height={biggerWhiteSpaceHeight} />

        <Agentic />
        <WhiteSpace height={biggerWhiteSpaceHeight} />

        <Features />
        <WhiteSpace height={biggerWhiteSpaceHeight} />
        
        <Partners />
        <WhiteSpace height={biggerWhiteSpaceHeight} />

        <CTA />
        <WhiteSpace height={biggerWhiteSpaceHeight} />

        <RevenueAutomation />
        <WhiteSpace height={biggerWhiteSpaceHeight} />

      </Suspense>
    </main>
  );
};

export default HomePage;
