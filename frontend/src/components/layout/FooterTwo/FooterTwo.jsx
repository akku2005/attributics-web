import Block from '../Block/Block';
import { brand, footer, newsletter } from '../../../constants/other';

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const FooterTwo = () => {
    return (
        <>
            <Block xpad='medium' background={"bg-black"}>
                <footer className="bg-[#000000] text-white lg:px-0 lg:py-12 py-8 px-4">
                    {/* <CTADesign3 /> */}

                    {/* ── Main footer body ── */}
                    <div className="pt-16 pb-4">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Col 1 — Brand */}
                            <div className="flex flex-col gap-5">
                                <a href="/" className="flex items-center gap-2.5">
                                    <img src={brand.logo} alt={brand.name} className="h-6 w-auto filter brightness-0 invert" />
                                    <img src={brand.wordmark} alt={brand.name} className="h-6 w-auto filter brightness-0 invert" />
                                </a>
                                <p className="section-eyebrow">
                                    {brand.tagline}
                                </p>
                                {/* Social */}
                                <div className="flex items-center gap-4 mt-1">
                                    {footer.socials.map((item, index) => (
                                        <a key={index} href={item.href} className="text-white/30 hover:text-white transition-colors" aria-label={item.name}>
                                            <img src={item.logo} alt={item.name} className="h-6 w-auto filter brightness-0 invert" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Col 2 — Links */}
                            <div className="grid grid-cols-2 gap-8">
                                {footer.links.map((section, sectionIndex) => (
                                    <motion.div
                                        key={sectionIndex}
                                        className="flex flex-col gap-3"
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: sectionIndex * 0.08 }}
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">
                                            {section.title}
                                        </p>
                                        {section.items.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="text-sm text-white/50 hover:text-white transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Col 3 — Newsletter (compact) */}
                            <motion.div
                                className="flex flex-col gap-4"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                                    Newsletter
                                </p>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    {newsletter.headline}
                                </p>
                                <div className="flex gap-2 mt-1">
                                    <input
                                        type="email"
                                        placeholder={newsletter.placeholder}
                                        className="flex-1 min-w-0 px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors"
                                    />
                                    <button className="px-4 py-2.5 bg-[#F5614D] hover:bg-[#E8503C] text-white text-sm font-medium rounded transition-colors whitespace-nowrap">
                                        {newsletter.cta}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Divider */}
                        <motion.div
                            className="mt-12 border-t border-white/[0.07]"
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />

                        {/* Bottom bar */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <span className="text-xs text-white/25">{footer.copyright}</span>
                            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
                                {footer.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-xs text-white/25 hover:text-white/60 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    </div>
                </footer>
            </Block>
        </>
    );
};

// DESIGN 3: Integrated dark CTA — consistent with black footer
const CTADesign3 = () => {
    return (
        <Block xpad='large'>
            <motion.section
                className="relative overflow-hidden rounded-2xl py-8 lg:py-12"
                style={{
                    background: 'linear-gradient(160deg, #161616 0%, #0e0e0e 100%)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Fine grid texture */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)`,
                        backgroundSize: '48px 48px',
                    }}
                />

                {/* Coral gradient wash — bottom-left sweep */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 70% 80% at 10% 85%, rgba(245,97,77,0.30) 0%, transparent 100%)',
                    }}
                />
                {/* <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 70% 80% at 90% 15%, rgba(245,97,77,0.15) 0%, transparent 100%)',
                    }}
                /> */}

                {/* Faint warm top-right accent */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 40% 40% at 88% 10%, rgba(255,160,100,0.07) 0%, transparent 60%)',
                    }}
                />

                {/* Top edge highlight line */}
                <div
                    className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(245,97,77,0.4) 30%, rgba(255,255,255,0.15) 50%, rgba(245,97,77,0.4) 70%, transparent 100%)',
                    }}
                />

                <div className="relative max-w-3xl mx-auto text-center px-6">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium text-white/70">Join 500+ growing companies</span>
                        </div>
                    </motion.div> */}

                    <motion.h2
                        className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Let's Grow
                        <br />
                        <span className="text-[#F5614D]">Together.</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-white/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Book a free 30-minute strategy session and discover how we can help you achieve sustainable, data-driven growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link to="/contact">
                            <motion.button
                                className="group px-10 py-5 text-white font-semibold rounded-full transition-all duration-300"
                                style={{
                                    background: '#F5614D',
                                    boxShadow: '0 0 0 0 rgba(245,97,77,0.4)',
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 8px 30px rgba(245,97,77,0.35)',
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center gap-3">
                                    Schedule Free Consultation
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </motion.button>
                        </Link>

                        <p className="mt-6 text-sm text-white/30">
                            No pressure, no sales pitch—just actionable insights.
                        </p>
                    </motion.div>

                    {/* Subtle bottom decoration */}
                    {/* <motion.div
                        className="mt-16 flex justify-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }}></div>
                        ))}
                    </motion.div> */}
                </div>
            </motion.section>
        </Block>
    );
};

export default FooterTwo;