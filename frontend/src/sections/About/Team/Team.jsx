import { team } from '../../../constants/about';
import Block from '../../../components/layout/Block';
import { motion } from 'motion/react';

const Team = () => {
    return (
        <Block xpad='large'>
            <section className="bg-white relative">
                <motion.div
                    initial={{ opacity: 0.8, y: 2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.p 
                        className="section-eyebrow"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {team.eyebrow}
                    </motion.p>
                    <motion.h1 
                        className='section-title'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {team.headline}{' '}
                        <span className='highlight'>{team.highlighted}</span>
                    </motion.h1>
                </motion.div>

                <motion.div 
                    className='overflow-x-hidden' 
                    style={{ '--fade': '0px' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <LeadershipTeam teamMembers={team.members} />
                </motion.div>
            </section>
        </Block>
    );
};

import './scroll.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import WheelGestures from 'embla-carousel-wheel-gestures';

function LeadershipTeam({teamMembers}) {

    const [emblaRef] = useEmblaCarousel(
        { 
            align: 'start',
            loop: true,
            dragFree: false,
        },
        [
            Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true}),
            WheelGestures({ forceWheelAxis: 'x', wheelSpeed: 1 }),
        ]
    );
    
    return (
        <>
            <div className='lt-viewport' ref={emblaRef}>
                <div className="lt-cards">
                    {teamMembers.map((member) => (
                        <div className="lt-card" key={member.id}>
                            <div className="lt-card-header">
                                <div className="lt-name">{member.name.split(' ')[0]}<br />{member.name.split(' ')[1]}</div>
                                <div className="lt-title">{member.role.split(' ')[0]}<br />{member.role.split(' ')[1]}</div>
                            </div>

                            <div className="lt-image-wrap">
                                <img
                                    className="lt-image"
                                    src={member.img}
                                    alt={member.name}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Team;