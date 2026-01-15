import Container from '../../components/layout/Container';
import Button from '../../components/ui/Button';
import { siteContent } from '../../constants/content';
import heroImage from '../../assets/images/herojpg.jpg';

const Hero = () => {
    const { hero, logoCloud } = siteContent;

    return (
        <section className="relative pt-32 lg:pt-[263px] pb-12 lg:pb-24 overflow-hidden">
            <Container className="relative z-10 w-full max-w-[1440px]">
                <div className="mx-auto text-center flex flex-col items-center">
                    {/* Eyebrow Text */}
                    <div className="mb-6 lg:mb-9 animate-fade-in-up flex justify-center">
                        <span className="font-mono text-sm lg:text-[16px] font-normal uppercase text-[#131212] leading-none tracking-normal">
                            {hero.badge}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mx-auto max-w-full lg:max-w-[679px] px-4 font-noto text-2xl lg:text-[30px] font-medium leading-[140%] text-[#131212] mb-8 lg:mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Automate intelligent cross-sell and upsell journeys that <span className="text-blue-600">maximize lifetime value</span> through AI-powered decisioning at scale.
                    </h1>

                    {/* Hero Image Section */}
                    <div className="relative w-full max-w-[1243px] h-[300px] lg:h-[339px] rounded-[20px] overflow-hidden mb-8 lg:mb-12 animate-fade-in-up shadow-2xl" style={{ animationDelay: '0.2s' }}>
                        <img
                            src={heroImage}
                            alt="Hero Background"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-[87px] w-[90%] lg:w-[574px] h-auto lg:h-[199px] flex flex-col gap-[10px] p-0 z-10 bg-black/40 lg:bg-transparent rounded-xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none">
                            <div className="flex flex-col items-start gap-2 text-white text-left p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                            <polyline points="17 6 23 6 23 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="font-mono text-sm tracking-wider uppercase opacity-90">{hero.overlay.title}</span>
                                </div>
                                <p className="text-sm lg:text-[15px] leading-relaxed opacity-90 font-light">
                                    {hero.overlay.description}
                                </p>
                                <div className="flex gap-1.5 mt-4 justify-center w-full">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons - Moved below image */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 lg:mb-20 animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
                        <button className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full sm:w-[200px] h-[50px] bg-[#261D1C] rounded-[4px] text-white text-sm font-medium hover:bg-[#3E3E3E] transition-colors cursor-pointer whitespace-nowrap">
                            <span>{hero.cta.primary}</span>
                            <span>→</span>
                        </button>
                        <button className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full sm:w-[200px] h-[50px] bg-white border border-[#131212] rounded-[4px] text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors box-border cursor-pointer whitespace-nowrap">
                            <span>{hero.cta.secondary}</span>
                            <span>→</span>
                        </button>
                    </div>

                    {/* Logo Cloud Section - Marquee */}
                    <div className="w-full max-w-[1156px] mx-auto mt-12 lg:mt-20 flex flex-col items-center justify-center px-4">
                        <p className="font-mono text-[12px] uppercase tracking-wider text-[#131212] mb-8">
                            {logoCloud.title}
                        </p>



                        <div className="w-full overflow-hidden relative py-4 flex flex-col gap-6 lg:gap-8">
                            {/* Left Fade Overlay */}
                            <div className="absolute left-0 top-0 bottom-0 w-[50px] lg:w-[200px] z-20 pointer-events-none bg-gradient-to-r from-[#ffff] via-[#F4F4F4]/20 to-transparent"></div>
                            {/* Right Fade Overlay */}
                            <div className="absolute right-0 top-0 bottom-0 w-[50px] lg:w-[200px] z-20 pointer-events-none bg-gradient-to-l from-[#ffff] via-[#F4F4F4]/20 to-transparent"></div>

                            {/* Row 1 - Scroll Left */}
                            <div className="flex animate-scroll" style={{ width: 'max-content' }}>
                                <div className="flex items-center shrink-0">
                                    {[...logoCloud.rows[0], ...logoCloud.rows[0], ...logoCloud.rows[0]].map((logo, index) => (
                                        <div key={`r1-1-${index}`} className="flex items-center gap-2 mx-6 lg:mx-10 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default">
                                            {/* Logic to show logo image if available - currently using text + icon placeholder */}
                                            {/* Ideally we map names to imported images */}
                                            <span className="text-xl lg:text-2xl font-bold font-noto tracking-tight text-gray-500">{logo}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2 - Scroll Right (or Offset) - Implementing reverse scroll would need a new keyframe or just offset */}
                            {/* For now, let's keep it scrolling left but with different content/speed or just offset start */}
                            <div className="flex animate-scroll" style={{ width: 'max-content', animationDuration: '30s', animationDirection: 'reverse' }}>
                                <div className="flex items-center shrink-0">
                                    {[...logoCloud.rows[1], ...logoCloud.rows[1], ...logoCloud.rows[1]].map((logo, index) => (
                                        <div key={`r2-1-${index}`} className="flex items-center gap-2 mx-6 lg:mx-10 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default">
                                            <span className="text-xl lg:text-2xl font-bold font-noto tracking-tight text-gray-500">{logo}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
