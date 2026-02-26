import Block from '../../../components/layout/Block/Block';
import { MailIcon, MapPinIcon, PhoneIcon } from '../../../components/Icons/Icons';
import { audit } from '../../../constants/contact';
import { useLocation } from "react-router-dom";

const Calendar = () => {
    const location = useLocation();

    useEffect(() => {
        if (!window.location.search.includes("r=true")) {
        window.location.replace(
            window.location.pathname + "?r=true"
        );
        }
    }, [location.pathname]);
    
    return (
        <Block xpad='large'>
            <section className="items-center justify-center flex flex-col lg:justify-between grid grid-cols-1 lg:grid-cols-[8fr_8fr] gap-2">
                
                {/* Left Side - Text Content */}
                <div className="flex-col flex ">
                    <p className="section-eyebrow">{audit.eyebrow}</p>
                    <h1 className="section-title" style={{fontSize: '3rem'}}>
                        If These Questions Resonate,
                        <br />
                        <span className='highlight'>We Should Talk.</span>
                    </h1>
                    <div className='w-full border-t-2 mb-3 mt-3' />
                    <p className="section-description flex flex-col gap-1" style={{color: ''}}>
                        Here’s what we’ll cover:
                    </p>
                    <p className="section-description flex flex-col gap-1 px-3" style={{color: ''}}>
                        <span>• Your current lifecycle and retention challenges</span>
                        <span>• Where data silos are limiting performance</span>
                        <span>• How to turn automation into intelligent personalization</span>
                        <span>• Practical steps toward measurable growth</span>
                        <span>• What meaningful progress would look like for your team</span>
                    </p>
                </div>

                {/* Right Side - Contact Form */}
                <div className='w-full flex'>
                    <ZCal />
                </div>
            </section>
        </Block>
    );
};

import { useEffect, useRef } from "react";
const ZCal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Prevent duplicate loading
    if (document.querySelector('script[src="https://static.zcal.co/embed/v1/embed.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;

    document.body.appendChild(script);

  }, []);

  return (
   
    <div class="zcal-inline-widget w-full h-full"><a href="https://zcal.co/i/2RquSAd-">30 Minute Meeting - Schedule a meeting</a></div>

  );
};

export default Calendar;
