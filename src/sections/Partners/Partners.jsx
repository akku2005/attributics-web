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
import Block from '../../components/layout/Block';

// Row 1
const row1 = [
    { name: 'AWS', logo: aws },
    { name: 'CleverTap', logo: clevertap },
    { name: 'Americana', logo: americana },
    { name: 'Tableau', logo: tableau },
];

// Row 2
const row2 = [
    { name: 'Power BI', logo: powerbi },
    { name: 'Microsoft Azure', logo: azure },
    { name: 'AWS', logo: aws },
    { name: 'Databricks', logo: databricks },
];

const bottomLeft = { name: 'CleverTap', logo: clevertap };
const bottomRight = { name: 'Americana', logo: americana };

const Partners = () => {
    return (
        <Block xpad="15%">
            <section className="relative w-full overflow-hidden flex flex-col justify-end mt-20 mb-20">
                {/* Dotted Mask Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            WebkitMaskImage: `url(${unionBg})`,
                            maskImage: `url(${unionBg})`,
                            WebkitMaskSize: 'cover',
                            maskSize: 'cover',
                            background:
                                'linear-gradient(180deg, #FFFFFF 0%, #FFB5AC 50%, #FF6758 100%)',
                        }}
                    />

                    {/* Top Fade */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0) 50%)',
                        }}
                    />
                </div>

                {/* Glass Card */}
                <div
                    className="relative z-10 mx-auto lg:w-[90%] w-[98%] rounded-t-[10px] border-t border-r border-l flex flex-col items-center"
                    style={{
                        background:
                            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 105.18%)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        borderColor: '#C1C1C1',
                        borderStyle: 'solid',
                        borderWidth: '1px 1px 0px 1px',
                    }}
                >
                    <div className="w-full px-8 sm:px-12 lg:px-16 pt-8 lg:pt-10">

                        {/* Row 1 */}
                        <div className="grid grid-cols-4 gap-y-4">
                            {row1.map((p, i) => (
                                <div key={i} className="flex justify-center py-4">
                                    <img
                                        src={p.logo}
                                        alt={p.name}
                                        className="h-6 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-4 gap-y-4 mb-6">
                            {row2.map((p, i) => (
                                <div key={i} className="flex justify-center py-4">
                                    <img
                                        src={p.logo}
                                        alt={p.name}
                                        className="h-6 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Bottom Center Row */}
                        <div className="flex items-center justify-between pt-1">

                            <div className="w-24 flex justify-center">
                                <img
                                    src={bottomLeft.logo}
                                    alt={bottomLeft.name}
                                    className="h-5 object-contain grayscale opacity-40"
                                />
                            </div>

                            <div
                                className="flex-1 mx-4 flex items-center justify-center rounded-t-[10px] border-t border-r border-l max-w-[593px] h-[134px]"
                                style={{
                                    background:
                                        'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 95.81%)',
                                    backdropFilter: 'blur(4px)',
                                    WebkitBackdropFilter: 'blur(4px)',
                                    borderColor: '#C1C1C1',
                                    borderStyle: 'solid',
                                    borderWidth: '1px 1px 0px 1px',
                                }}
                            >
                                <img
                                    src={attributicsLogo}
                                    alt="Attributics"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>

                            <div className="w-24 flex justify-center">
                                <img
                                    src={bottomRight.logo}
                                    alt={bottomRight.name}
                                    className="h-5 object-contain grayscale opacity-40"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Block>
    );
};


export default Partners;
