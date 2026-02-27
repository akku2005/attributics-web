import React, { useState, useEffect } from 'react';
import Block from '../../../components/layout/Block';
const API_URL = import.meta.env.VITE_API_URL || "localhost:5000";
import { resourcesData } from '../../../constants/resources';
import { motion, AnimatePresence } from 'motion/react';

// Skeleton Component
const HeroSkeleton = () => {
    return (
        <motion.div 
            className="relative rounded-2xl overflow-hidden bg-white"
            initial={{ opacity: 0.9, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background Skeleton */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200">
                <div className="w-full h-full bg-gray-300" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/0 to-black/10" />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col justify-between">

                {/* Top Block Skeleton */}
                <div className="bg-white rounded-br-2xl p-6 w-[40%] self-start">
                    {/* Eyebrow skeleton */}
                    <div className="h-4 w-32 bg-gray-200 rounded mb-3" />
                    
                    {/* Title skeleton */}
                    <div className="space-y-2 mb-4">
                        <div className="h-8 bg-gray-300 rounded w-full" />
                        <div className="h-8 bg-gray-300 rounded w-4/5" />
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </div>
                </div>

                {/* Spacer Block */}
                <div className="flex-grow lg:py-10 py-50" />

                {/* Bottom Block Skeleton */}
                <div className="bg-white rounded-tl-2xl p-6 w-[40%] self-end">
                    {/* Title skeleton */}
                    <div className="space-y-2 mb-4">
                        <div className="h-7 bg-gray-300 rounded w-full" />
                        <div className="h-7 bg-gray-300 rounded w-3/4" />
                    </div>
                    
                    {/* Description skeleton */}
                    <div className="space-y-2 mb-4">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-2/3" />
                    </div>

                    {/* Meta skeleton */}
                    <div className="flex items-center gap-2 mt-1 mb-1">
                        <div className="w-7 h-7 rounded-full bg-gray-300" />
                        <div className="h-3 w-20 bg-gray-200 rounded" />
                        <div className="h-3 w-1 bg-gray-200 rounded" />
                        <div className="h-3 w-16 bg-gray-200 rounded" />
                        <div className="h-3 w-1 bg-gray-200 rounded" />
                        <div className="h-3 w-14 bg-gray-200 rounded" />
                    </div>

                    {/* Read More skeleton */}
                    <div className="h-4 w-24 bg-gray-200 rounded mt-2" />
                </div>

            </div>
        </motion.div>
    );
};

// Main Hero Component
const HeroTwo = () => {
    const { hero } = resourcesData;

    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

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

    // Preload image
    useEffect(() => {
        if (featuredBlog?.heroImage) {
            const img = new Image();
            img.src = featuredBlog.heroImage;
            img.onload = () => {
                setImageLoaded(true);
            };
        }
    }, [featuredBlog]);

    const showContent = !loading && featuredBlog && imageLoaded;

    return (
        <Block xpad='medium' topMargin='small'>
            <AnimatePresence mode="wait">
                {!showContent ? (
                    <HeroSkeleton key="skeleton" />
                ) : (
                    <motion.div 
                        key="content"
                        className="relative rounded-2xl overflow-hidden bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                    >

                        {/* Background Image */}
                        <motion.div 
                            className="absolute inset-0 bg-white"
                            initial={{ opacity: 0.9, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <img
                                src={featuredBlog.heroImage}
                                alt={featuredBlog.title}
                                className="w-full h-full object-contain lg:object-cover"
                                loading='eager'
                            />
                        </motion.div>
                    
                        {/* Overlay */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/0 to-black/50"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0.05 }}
                            transition={{ duration: 3, delay: 0.2 }}
                        />
                    
                        {/* Content Wrapper */}
                        <div className="relative z-10 flex flex-col justify-between">
                    
                            {/* Top Block */}
                            <motion.div 
                                className="bg-white rounded-br-2xl p-6 lg:max-w-[40%] self-start"
                                initial={{ opacity: 0, x: -1000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            >
                                <motion.h1 
                                    className="section-eyebrow"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
                                    {hero.eyebrow}
                                </motion.h1>
                                <motion.p 
                                    className="section-title"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
                                    {hero.headline}
                                </motion.p>
                                <motion.p 
                                    className="section-description"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
                                    {hero.description}
                                </motion.p>
                            </motion.div>
                    
                            {/* Spacer Block */}
                            <div className="flex-grow lg:py-20 py-50" />
                    
                            {/* Bottom Block */}
                            <motion.div 
                                className="bg-white rounded-tl-2xl p-6 lg:max-w-[40%] self-end"
                                initial={{ opacity: 0, x: 1000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            >
                                <motion.h1 
                                    className="section-title"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
                                    {featuredBlog.title}
                                </motion.h1>
                                <motion.p 
                                    className="section-description"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
                                    {featuredBlog.description}
                                </motion.p>
                    
                                <motion.div 
                                    className="resources-meta mt-1 mb-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                >
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
                                </motion.div>
                    
                                <motion.a 
                                    href={`/resources/${featuredBlog.slug}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                >
                                    <p className='section-description'>
                                        Read More →
                                    </p>
                                </motion.a>
                            </motion.div>
                    
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Block>
    );
};

export default HeroTwo;