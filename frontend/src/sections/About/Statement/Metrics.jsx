import { useState, useEffect, useRef } from 'react';
import { metricCards } from '../../../constants/about';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Metrics = () => {
    const [animatedMetrics, setAnimatedMetrics] = useState(metricCards.map(() => 0));
    const [isVisible, setIsVisible] = useState(false);
    const metricsRef = useRef(null);
    const timersRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    setIsVisible(true);

                    timersRef.current.forEach(clearInterval);
                    timersRef.current = [];

                    setAnimatedMetrics(metricCards.map(() => 0));

                    metricCards.forEach((card, index) => {
                        const steps = 60;
                        const increment = card.metric / steps;
                        let step = 0;

                        const timer = setInterval(() => {
                            step++;
                            setAnimatedMetrics((prev) => {
                                const copy = [...prev];
                                copy[index] = step >= steps ? card.metric : Math.floor(step * increment);
                                return copy;
                            });
                            if (step >= steps) clearInterval(timer);
                        }, 1000 / steps);

                        timersRef.current.push(timer);
                    });
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (metricsRef.current) observer.observe(metricsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
        <div ref={metricsRef} className="w-full flex flex-col">
        {/* Cards and dividers as flat siblings in one flex row */}
            <div className="grid grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200 grid-cols-2 gap-0 divide-x divide-slate-300 items-center w-full lg:flex lg:items-center lg:justify-between">
                {metricCards.map((card, index) => (
                    <>
                        {/* Card */}
                        <motion.div
                            key={`card-${index}`}
                            className="z-10 py-4 px-4 flex-1 flex flex-col items-center text-center gap-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            {/* Number + unit + arrow */}
                            <div className="flex items-center justify-center gap-1">
                                <h1 className="section-title" style={{ fontSize: '3rem', fontWeight: '600' }}>
                                    {animatedMetrics[index]}
                                </h1>
                                <h1 className="section-title" style={{ fontSize: '1.8rem' }}>
                                    {card.unit}
                                </h1>
                                <GrowthArrow positive={card.postive} />
                            </div>

                            {/* Label */}
                            <p className="section-description text-black">
                                {card.subheadline}
                            </p>
                        </motion.div>
                    </>
                ))}
            </div>
        </div>
    </>
    );
};

// ─── Arrow using Lucide TrendingUp / TrendingDown ─────────────────────────────
const GrowthArrow = ({ positive = true }) => {
    const Icon = positive ? TrendingUp : TrendingDown;

    return (
        <Icon
            className="shrink-0"
            style={{
                width: 22,
                height: 22,
                color: positive ? '#10b981' : '#f43f5e',
                strokeWidth: 2.5,
            }}
        />
    );
};

export default Metrics;