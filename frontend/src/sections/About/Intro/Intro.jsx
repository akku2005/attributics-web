import {vision} from '../../../constants/about';
import Block from '../../../components/layout/Block';
import { motion } from 'motion/react';

const Intro = () => {
    return (
        <Block xpad='larger' topMargin='large'>
        <section id="about" className='h-full w-full'>
            {/* WHO ARE WE */}
            <motion.div 
                className=""
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-[6fr_6fr] gap-22 lg:gap-24 items-center hyphens-none">
                    <motion.div 
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <motion.p 
                            className="section-eyebrow"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            {vision.whoAreWe.eyebrow}
                        </motion.p>
                        <motion.h2 
                            className="section-title mb-6 lg:!text-[3.5rem]"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            style={{fontWeight: '600'}}
                        >
                            {vision.whoAreWe.headline}
                            <br />
                            <span className="highlight">{vision.whoAreWe.highlightedText}</span>
                        </motion.h2>
                        <div className='text-justify'>
                            {vision.whoAreWe.description.map((item, idx) => (
                                <motion.p 
                                    key={idx} 
                                    className="section-description mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + (idx * 0.05) }}
                                >
                                    {item}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="w-full h-auto max-h-[80vh]"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <img
                            src={vision.whoAreWe.image}
                            alt="Group"
                            className="w-full h-auto max-h-[80vh] object-cover rounded-[55px]"
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
        </Block>
    );
};

export default Intro;