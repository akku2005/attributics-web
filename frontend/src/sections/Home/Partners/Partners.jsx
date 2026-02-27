import Block from '../../../components/layout/Block';
import { partners } from '../../../constants/home';
import { motion } from 'motion/react';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay },
});

const Partners = () => {
    return (
        <Block xpad='large'>
            <section className="flex w-full h-full justify-between lg:flex-row flex-col">
            <div style={{backgroundColor: 'rgb(244, 240, 240)'}}  className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className='py-20 flex flex-row'>
                {/* Left side block */}
                <div className='flex flex-col justify-center z-10' style={{ flexBasis: '50%' }}>
                    <motion.p className='section-eyebrow' {...fadeUp(0)}>
                        {partners.eyebrow}
                    </motion.p>

                    <motion.h2 className="section-title" style={{ fontSize: '4.2rem' }} {...fadeUp(0.1)}>
                        {partners.headline}
                        <br />
                        <span className="highlight">{partners.highlighted}</span>
                    </motion.h2>

                    <motion.p className="section-description" style={{ fontSize: '1.5rem' }} {...fadeUp(0.2)}>
                        {partners.description}
                    </motion.p>

                </div>

                {/* Right side block */}
                <motion.div
                    className="relative flex justify-center z-10 isolate"
                    style={{ flexBasis: '45%' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none -z-20"
                        style={{
                            background: 'radial-gradient(ellipse 100% 100% at 10% 15%, rgba(245,97,77,0.25) 0%, transparent 100%)',
                            borderRadius: '55px',
                        }}
                    />
                    <div
                        className="absolute inset-0 pointer-events-none -z-10"
                        style={{
                            background: 'radial-gradient(ellipse 70% 80% at 90% 85%, rgba(150, 77, 245, 0.05) 0%, transparent 100%)',
                            borderRadius: '55px',
                        }}
                    />
                    <div
                        className="z-5 relative w-full flex flex-col items-center justify-center shadow-[0_22px_22px_-12px_rgba(0,0,0,0.12)]"
                        style={{ borderRadius: '55px' }}
                    >
                        <PartnersStaticList />
                    </div>
                </motion.div>
                </div>
            </section>
        </Block>
    );
};


const PartnersStaticList = () => {
    return (
        <div className="w-full flex flex-wrap justify-between gap-12 py-12 px-12">
            {partners.logos.map((logo, i) => (
                <motion.div
                    key={i}
                    className="
                        w-[45%] h-auto aspect-[2/1]
                        rounded-4xl
                        shadow-lg
                        flex items-center justify-center
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-md
                        z-10
                    "
                    style={{ backgroundColor: 'white' }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.45,
                        delay: 0.2 + i * 0.07,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    <img
                        src={logo}
                        alt={`Logo ${i}`}
                        className="max-h-10 max-w-[70%] object-contain"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default Partners;