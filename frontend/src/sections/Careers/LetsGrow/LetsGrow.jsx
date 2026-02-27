import React from 'react';
import { letsgrow, companies } from '../../../constants/careers';
import Block from '../../../components/layout/Block';
import { motion } from 'motion/react';

export default function LetsGrow() {
  return (
    <>
    <Block xpad='large'>
      {/* Header Section */}
      <motion.div 
        className="mb-30  lg:px-[20%]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
          <motion.p 
            className='section-eyebrow'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {letsgrow.eyebrow}
          </motion.p>
          
          <motion.h1 
            className="section-title mb-8 text-center" 
            style={{fontSize: '2.5rem'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {letsgrow.headline[0]}{' '}
            <span className='highlight'>{letsgrow.highlighted}</span>
            {' '}{letsgrow.headline[1]}
          </motion.h1>
          
          <motion.p 
            className="section-description mb-4 text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {letsgrow.description}
          </motion.p>
          
          <motion.a 
            href={letsgrow.readMore.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className='section-description'>
              {letsgrow.readMore.btnLabel}{' '}
              <span>→</span>
            </p>
          </motion.a>
      </motion.div>
    </Block>

    <Block xpad='large'>
      {/* Companies Section */}
      <div>
        <div className='text-center'>
          <motion.p 
            className='section-eyebrow mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {companies.eyebrow}
          </motion.p>
          
          <motion.h2 
            className="section-title mb-12" 
            style={{fontSize: '2.5rem'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {companies.headline}
          </motion.h2>
        </div>
        
        {/* Logo Grid */}
        <div className="flex flex-wrap gap-16 items-center justify-center">
          {companies.logoList.map((logo, index) => (
            <motion.div 
              key={index}
              className="flex items-center justify-center h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: "easeOut"
              }}
            >
              <img 
                src={logo} 
                className="w-35 max-h-16 object-contain" 
                alt="company-logo"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Block>
    </>
  );
}