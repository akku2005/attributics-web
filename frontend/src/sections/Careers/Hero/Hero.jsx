import React from 'react';
import Block from '../../../components/layout/Block';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';
import { careers } from '../../../constants/careers';

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useMemo } from "react";
import { motion } from 'motion/react';


const Hero = () => {
  return (
    <Block xpad='none'>
        <div
            style={{
                background: "linear-gradient(to top,rgb(255, 255, 255) 0%,rgba(173, 173, 173, 0.4) 10%,rgba(129, 129, 129, 0.4) 13%,rgb(255, 255, 255) 35%,rgb(255, 255, 255) 100%)"
            }}
            className="min-h-screen flex flex-col lg:pt-25 lg:mt-0 mt-20">

            {/* Header Section */}
            <motion.div 
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.p 
                    className='section-eyebrow'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {careers.eyebrow}
                </motion.p>

                <div className="flex justify-center items-center mb-2">
                    <motion.h1 
                        className="section-title lg:max-w-[40%]" 
                        style={{fontSize: '2.5rem'}}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {careers.headline[0]}{' '}
                        <span className='highlight'>{careers.highlighted}</span>
                        {' '}{careers.headline[1]}
                    </motion.h1>
                </div>
                
                <div className="flex justify-center items-center mb-2">
                    <motion.p 
                        className="section-description mb-4 lg:max-w-[50%]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {careers.description}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link to="/contact?type=career">
                        <Button
                            size='lg'
                            variant="primary"
                        >
                            <p className="section-description" style={{color: 'white'}}>
                                {careers.buttonLabel}{' '}
                                <span className="text-xl">→</span>
                            </p>
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* CONTENT */}
            <motion.div 
                className="flex-1 flex lg:items-center rounded-t-3xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
                <CarouselImgs />
            </motion.div>
        </div>
    </Block>
  );
};

const CarouselImgs = () => {

    const autoScroll = AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
    });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: true,
            align: 'start',
            dragFree: true,
        },
        [autoScroll]
    );

    const MIN_TILT = -5;
    const MAX_TILT = 5;

    const getRandomBetween = (min, max) =>
        Math.random() * (max - min) + min;

    // Generate random tilt once
    const imagesWithTilt = useMemo(() => {
        return careers.carouselImgs.map((image, index) => ({
            id: index,
            src: image,
            tilt: getRandomBetween(MIN_TILT, MAX_TILT)
        }));
    }, []);

  return (
    <div className="overflow-x-hidden h-full flex-1 flex py-20" ref={emblaRef}>
      <div className="flex h-full">
        {imagesWithTilt.map((image, index) => (
          <motion.div 
            key={image.id} 
            className="
                flex-[0_0_90%] 
                sm:flex-[0_0_85%]
                md:flex-[0_0_50%]
                lg:flex-[0_0_35%]
                xl:flex-[0_0_35%]
                flex items-center px-4 sm:px-6 lg:px-8
            "
            initial={{ opacity: 0.9, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
                duration: 0.6, 
                delay: 0.6 + (index * 0.1),
                ease: "easeIn"
            }}
          >
            <div
              className="transition duration-300"
              style={{ transform: `rotate(${image.tilt}deg)` }}
            >
              <img
                src={image.src}
                loading='eager'
                className="rounded-3xl w-auto h-full object-cover shadow-2xl shadow-black/15"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;