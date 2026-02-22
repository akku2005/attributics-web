import { Suspense, lazy } from 'react';
import GlobalLoader from '../components/ui/Loader/GlobalLoader';
import WhiteSpace from '../components/layout/WhiteSpace/WhiteSpace';
import { useSearchParams } from 'react-router-dom';

// Lazy load sections with explicit paths
const Form = lazy(() => import('../sections/Contact/Form/Form'));
const Audit = lazy(() => import('../sections/Contact/Audit/Audit'));

const reducedWhiteSpaceHeight = '10vh';
const whiteSpaceHeight = '15vh';

const HomePage = () => {
    const [searchParams] = useSearchParams();
    const getQueryParam = (key) => {
        return searchParams.get(key);
    };
    const formType = getQueryParam("type");
    console.log(formType);

    return (
        <main>
        <Suspense fallback={<GlobalLoader />}>
            {formType === "audit" ? ( 
                <>
                    <Audit />
                    <WhiteSpace height={reducedWhiteSpaceHeight} />
                </>
            ): (
                <>
                    <Form />
                    <WhiteSpace height={reducedWhiteSpaceHeight} />
                </>
            )}
        </Suspense>
        </main>
    );
};

export default HomePage;
