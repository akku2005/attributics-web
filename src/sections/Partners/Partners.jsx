import Container from '../../components/layout/Container';
import unionBg from '../../assets/Union.svg';
import attributicsLogo from '../../assets/logo/attributics_logo.png';
import aws from '../../assets/brands/aws.svg';
import clevertap from '../../assets/brands/clevertap.svg';
import americana from '../../assets/brands/americana.svg';
import tableau from '../../assets/brands/tableau.svg';
import powerbi from '../../assets/brands/powerbi.svg';
import azure from '../../assets/brands/azure.svg';
import databricks from '../../assets/brands/databricks.svg';

// Row 1 (4 logos)
const row1 = [
    { name: 'AWS', logo: aws },
    { name: 'CleverTap', logo: clevertap },
    { name: 'Americana', logo: americana },
    { name: 'Tableau', logo: tableau },
];

// Row 2 (4 logos)
const row2 = [
    { name: 'Power BI', logo: powerbi },
    { name: 'Microsoft Azure', logo: azure },
    { name: 'AWS', logo: aws },
    { name: 'Databricks', logo: databricks },
];

// Bottom row flanking logos
const bottomLeft = { name: 'CleverTap', logo: clevertap };
const bottomRight = { name: 'Americana', logo: americana };

const Partners = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden relative">
            {/* Layer 1: Union.svg Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <img
                    src={unionBg}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    style={{
                        opacity: 1,
                    }}
                />
            </div>

            <Container>
                {/* Wrapper: positions logos and card on top of SVG */}
                <div className="relative z-10 flex items-center justify-center">

                    {/* Row 1: 4 logos at top */}
                    <div className="grid grid-cols-4 gap-x-16 gap-y-8 mb-10 w-full max-w-4xl">
                        {row1.map((partner, i) => (
                            <div key={i} className="flex items-center justify-center">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-5 w-auto max-w-[90px] object-contain filter grayscale opacity-50"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 2 logos + center card + 2 logos */}
                    <div className="flex items-center justify-between w-full max-w-4xl mb-10 gap-8">
                        {/* Left column: 2 logos */}
                        <div className="flex flex-col gap-8 flex-shrink-0">
                            <div className="flex items-center justify-center">
                                <img
                                    src={row2[0].logo}
                                    alt={row2[0].name}
                                    className="h-5 w-auto max-w-[90px] object-contain filter grayscale opacity-50"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src={bottomLeft.logo}
                                    alt={bottomLeft.name}
                                    className="h-5 w-auto max-w-[90px] object-contain filter grayscale opacity-50"
                                />
                            </div>
                        </div>

                        {/* Center: Glassmorphism card with Attributics logo */}
                        <div
                            className="flex items-center justify-center rounded-[16px] border border-white/50 flex-shrink-0"
                            style={{
                                width: '593px',
                                height: '134px',
                                background: 'rgba(255, 255, 255, 0.3)',
                                backdropFilter: 'blur(18px)',
                                WebkitBackdropFilter: 'blur(18px)',
                                boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
                            }}
                        >
                            <img
                                src={attributicsLogo}
                                alt="Attributics"
                                className="h-10 w-auto object-contain"
                            />
                        </div>

                        {/* Right column: 2 logos */}
                        <div className="flex flex-col gap-8 flex-shrink-0">
                            <div className="flex items-center justify-center">
                                <img
                                    src={row2[1].logo}
                                    alt={row2[1].name}
                                    className="h-5 w-auto max-w-[90px] object-contain filter grayscale opacity-50"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src={bottomRight.logo}
                                    alt={bottomRight.name}
                                    className="h-5 w-auto max-w-[90px] object-contain filter grayscale opacity-50"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: 4 logos at bottom (middle 2 from row 2) */}
                    <div className="grid grid-cols-4 gap-x-16 gap-y-0 w-full max-w-4xl">
                        <div />
                        <div className="flex items-center justify-center">
                            <img
                                src={row2[2].logo}
                                alt={row2[2].name}
                                className="h-5 w-auto max-w-[90px] object-contain filter grayscale opacity-50"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={row2[3].logo}
                                alt={row2[3].name}
                                className="h-5 w-auto max-w-[90px] object-contain filter grayscale opacity-50"
                            />
                        </div>
                        <div />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Partners;
