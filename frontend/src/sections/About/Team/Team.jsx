import { team } from '../../../constants/about';
import Block from '../../../components/layout/Block';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import WheelGestures from 'embla-carousel-wheel-gestures';

const Team = () => {
    return (
        <Block xpad='large'>
            <section className="bg-white relative">
                <motion.div
                    initial={{ opacity: 0.8, y: 2, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
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
                        className='section-title lg:!text-[3.2rem]'
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
                    className='overflow-x-hidden flex h-full mt-6'
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

function LeadershipTeam({ teamMembers }) {
    const [emblaRef] = useEmblaCarousel(
        {
            align: 'start',
            loop: false,
            dragFree: false,
        },
        [
            Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
            WheelGestures({ forceWheelAxis: 'x', wheelSpeed: 1 }),
        ]
    );

    return (
        <div className="overflow-hidden w-full  mask-fade-x" ref={emblaRef}  style={{"--fade": "10px"}}>
            {/* lt-cards */}
            <div className="flex flex-row gap-4 pb-[32px] pt-[32px]">
                {teamMembers.map((member) => (
                    // lt-card
                    <div
                        key={member.id}
                        className="
                            bg-[#f5efe0]
                            rounded-[20px]
                            overflow-hidden
                            relative
                            transition-[transform,box-shadow]
                            duration-700
                            ease-in-out
                            flex
                            flex-col
                            min-h-[340px]
                            min-w-[320px]
                            w-[320px]
                            shrink-0
                            hover:-translate-y-1
                            hover:shadow-[0_0_40px_rgba(0,0,0,0.25)]
                        "
                    >
                        {/* lt-card-header */}
                        <div className="flex justify-between items-start px-[18px] pt-5 relative z-[2]">
                            {/* lt-name */}
                            <div
                                className="section-description"
                                style={{ fontSize: '1.2rem', color: 'black' }}
                            >
                                {member.name.split(' ')[0]}<br />{member.name.split(' ')[1]}
                            </div>
                            {/* lt-title */}
                            <div
                                className="text-right section-eyebrow"
                            >
                                {member.role.split(' ')[0]}<br />{member.role.split(' ')[1]}
                            </div>
                        </div>

                        {/* lt-image-wrap */}
                        <div className="flex-1 flex items-end justify-center overflow-hidden mt-2">
                            <img
                                className="w-full h-[320px] object-cover object-top block"
                                src={member.img}
                                alt={member.name}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;