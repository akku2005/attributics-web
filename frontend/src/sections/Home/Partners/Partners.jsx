import unionBg from '../../../assets/Union.svg';
import aws from '../../../assets/brands/aws.svg';
import clevertap from '../../../assets/brands/clevertap.svg';
import americana from '../../../assets/brands/americana.svg';
import tableau from '../../../assets/brands/tableau.svg';
import azure from '../../../assets/brands/azure.svg';
import Block from '../../../components/layout/Block';

const logos = [
    aws,
    clevertap,
    americana,
    tableau,
    azure,
    aws,
    americana,
    azure,
]

const Partners = () => {
    return (
        <Block xpad='large'>
            <section className="flex w-full overflow-hidden justify-between lg:flex-row flex-col">

                {/* Left side block, contains Title */}
                <div className='flex items-center' style={{flexBasis: '50%'}}>
                    {/* Title and Subheading */}
                    <div className="">
                        <h2 className="section-title" style={{fontSize: '3rem'}}>
                            Backed by
                            <br />
                            <span className="highlight">Industry Leaders</span>
                        </h2>
                        <p className="section-description">
                            Collaborating with industry leaders to drive innovation and success.
                            It's the growth that compounds. Intelligent agents continuously optimize engagement, retention, and expansion—turning every customer into a long-term value driver.
                        </p>
                    </div>
                </div>

               {/* Right side block with self-contained background and glass card */}
                <div className="relative flex justify-center" style={{ flexBasis: '45%' }}>

                    {/* Dotted Mask Background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div
                            className="absolute inset-0"
                            style={{
                                WebkitMaskImage: `url(${unionBg})`,
                                maskImage: `url(${unionBg})`,
                                WebkitMaskSize: 'cover',
                                maskSize: 'cover',
                                background:
                                    'linear-gradient(180deg, #FFFFFF 0%, #FFB5AC 50%, #FF6758 100%)',
                            }}
                        />
                    </div>

                    {/* Glass Card */}
                    <div className="relative z-10 w-full lg:mx-[5%] mx-[5%] my-7 flex flex-col items-center justify-center" 
                        style={{ 
                            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 105%)', 
                            backdropFilter: 'blur(30px)', 
                            WebkitBackdropFilter: 'blur(30px)', 
                            borderRadius: '10px', 
                    }} >
                        {PartnersStaticList()}
                        {/* {PartnersCarousel()} */}
                    </div>
                </div>
            </section>
        </Block>
    );
};

const PartnersStaticList = () => {
    return (
        <div className="w-full flex flex-wrap justify-center items-center py-22 gap-y-16">  
            {logos.map((logo, i) => (
                <div key={i} className="flex justify-center items-center w-1/2 flex-none">
                    <img
                        src={logo}
                        alt={`Logo ${i}`}
                        className="h-9 w-auto object-contain"
                    />
                </div>
            ))}
        </div>
    );
}

export default Partners;
