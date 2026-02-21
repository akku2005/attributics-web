import { useState } from 'react';
import Block from '../../../components/layout/Block';
import { metrics } from '../../../constants/content';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import caseStudies from '../../../constants/home';

const MetricCard = ({
        study,
        index,
        expandedCard,
        setExpandedCard,
        isMobile = false,
    }) => {
        const isExpanded = isMobile || expandedCard === index;
  
    return (
      <div
        onMouseEnter={!isMobile ? () => setExpandedCard(index) : undefined}
        // onMouseLeave={!isMobile ? () => setExpandedCard(0) : undefined}
        className={`
          relative rounded-md border border-[#747474] bg-white
          overflow-hidden p-2 flex transition-all duration-700 ease-in-out h-55 lg:h-55
          ${isMobile ? 'w-full' : isExpanded ? 'lg:flex-[2] flex-[4]' : 'flex-[1]'}
        `}
      >
        {/* Image */}
        <div
          className="relative rounded-sm overflow-hidden shrink-0 transition-[width] duration-700 ease-in-out"
          style={{
            width: isMobile ? '144px' : isExpanded ? '25%' : '100%'
          }}
        >
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
  
          {/* Overlay (desktop collapsed only) */}
          {!isMobile && (
            <div
              className={`absolute top-0 right-0 bottom-0 left-3/7 bg-white/80 backdrop-blur-md p-3 flex flex-col transition-opacity duration-500`}
              style={{ opacity: isExpanded ? 0 : 1 }}
            >
              <h3 className="text-sm uppercase">{study.stat}</h3>
              <h3 className="text-sm uppercase mt-1">{study.title}</h3>
            </div>
          )}
        </div>
  
        {/* Content */}
        <div
            className="flex-1 flex flex-col justify-between pl-5 transition-all duration-700"
            style={{
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded ? 'translateX(0)' : 'translateX(20px)',
            }}
        >
          <div>
            <h3 className="
                uppercase
                text-lg
                sm:text-xl
                lg:text-2xl
            ">
                {study.stat} {study.title}
            </h3>
            <p className="
                mt-2
                text-sm
                sm:text-base
                leading-snug
                lg:leading-[140%]
            ">
                {study.description}
            </p>
          </div>
  
          <a className="mt-3 text-sm font-semibold flex items-center gap-1.5">
            Read more →
          </a>
        </div>
      </div>
    );
};
  
const Metrics = () => {
    const [expandedCard, setExpandedCard] = useState(0);

    const [emblaRef] = useEmblaCarousel(
        { 
            align: 'start',
            loop: false,
            dragFree: false,
        },
        [Autoplay({ delay: 3500, stopOnInteraction: true })]
    );
      
    return (
        <Block xpad='medium'>
        <section id="about" className="h-full w-full flex flex-col">
          {/* Headline */}
          <div className="flex-[4] text-center flex justify-center items-center max-w-2xl mx-auto"> 
            <h2 className='section-title'>
              {metrics.headline}{' '}
              <span className="highlight">{metrics.highlightedText}</span>
            </h2>
          </div>

          <div className="flex-[6] w-full flex relative flex-[0_0_90%] lg:items-center lg:justify-center pt-12" style={{ '--fade': '15px'}}>
              {/* Mobile carousel */}
              <div ref={emblaRef} className="overflow-hidden lg:hidden">
                  <div className="flex gap-4">
                      {caseStudies.map((study, index) => (
                      <div key={index} className="flex-[0_0_90%]">
                          <MetricCard study={study} isMobile />
                      </div>
                      ))}
                  </div>
              </div>

              {/* Desktop layout (unchanged) */}
              <div className="hidden lg:flex justify-center gap-5">
                  {caseStudies.map((study, index) => (
                      <MetricCard
                        key={index}
                        study={study}
                        index={index}
                        expandedCard={expandedCard}
                        setExpandedCard={setExpandedCard}
                      />
                  ))}
              </div>
          </div>
        </section>
        </Block>
    );
};

export default Metrics;