import { Suspense, lazy } from 'react';
import GlobalLoader from '../components/ui/Loader/GlobalLoader';
import WhiteSpace from '../components/layout/WhiteSpace/WhiteSpace';

// Lazy load sections with explicit paths
const Hero = lazy(() => import('../sections/Careers/Hero/Hero'));

const reducedWhiteSpaceHeight = '10vh';
const whiteSpaceHeight = '15vh';

const HomePage = () => {
    return (
        <main>
        <Suspense fallback={<GlobalLoader />}>
            <Hero />
            {/* <WhiteSpace height={reducedWhiteSpaceHeight} /> */}
        </Suspense>
        </main>
    );
};

export default HomePage;
