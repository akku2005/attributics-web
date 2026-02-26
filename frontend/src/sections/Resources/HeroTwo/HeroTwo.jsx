import React, { useState,  useEffect } from 'react';
import Block from '../../../components/layout/Block';
const API_URL = import.meta.env.VITE_API_URL || "localhost:5000";
import { resourcesData } from '../../../constants/resources';

const HeroTwo = () => {
    const { hero } = resourcesData;

    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFeaturedBlog() {
            try {
                const res = await fetch(`${API_URL}/api/blogs/local/featured`);
                const data = await res.json();

                console.log(data);
    
                setFeaturedBlog(data);
            } catch (err) {
                console.error("Failed to fetch blogs", err);
            } finally {
                setLoading(false);
            }
        }
    
        loadFeaturedBlog();
    }, []);

    return (
        <Block xpad='medium' topMargin='small'>
            {!loading && featuredBlog && 
                <div className="max-h-[80vh]">
                {/* Design 1: Clean Modern */}
                    <div className="relative h-screen max-h-[80vh]">
                        {/* Background Image */}
                        <div className="relative rounded-2xl h-screen max-h-[80vh] overflow-hidden ">
                            <img 
                                src={featuredBlog.heroImage}
                                alt={featuredBlog.title}
                                className="w-full h-full object-cover opacity-90"
                            />
                              {/* <div className="absolute inset-0 bg-black/15"></div> */}
                              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-black/0"></div>
                              <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/5 to-black/0"></div>
                        </div>

                        {/* Top Left Box - Page Info */}
                        <div className="absolute rounded-br-2xl bg-white top-0 left-0 pr-6 pb-6 lg:max-w-[40%]">
                            <h1 className="section-eyebrow">
                                {hero.eyebrow}
                            </h1>
                            <p className="section-title">
                                {hero.headline}
                            </p>
                            <p className="section-description">
                                {hero.description}
                            </p>
                        </div>

                        {/* Bottom Right Box - Featured Post */}
                        <div className="absolute rounded-tl-2xl bg-white bottom-0 right-0 pl-6 pt-6 lg:max-w-[40%]">
                            <h1 className="section-title">
                                {featuredBlog.title}
                            </h1>
                            <p className="section-description">
                                {featuredBlog.description}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam qui sapiente alias.
                            </p>
                            <div className="resources-meta mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                <img
                                    src={featuredBlog.author.avatar}
                                    alt={featuredBlog.author.name}
                                    className="w-7 h-7 rounded-full object-cover"
                                />
                                <span>{featuredBlog.author.name}</span>
                                <span>•</span>
                                <span>{featuredBlog.publishedAt}</span>
                                <span>•</span>
                                <span>{featuredBlog.readTime}</span>
                            </div>
                            <a href={`/resources/${featuredBlog.slug}`}>Read More →</a> 
                        </div>

                        {/* Scroll Icon */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <div className="flex flex-col items-center gap-2 animate-bounce">
                                <span className="section-description drop-shadow-sm">Scroll</span>
                                <svg className="w-6 h-6 section-description drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Block>
    );
};

export default HeroTwo;