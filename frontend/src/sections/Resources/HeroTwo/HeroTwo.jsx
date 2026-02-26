import React, { useState, useEffect } from 'react';
import Block from '../../../components/layout/Block';
const API_URL = import.meta.env.VITE_API_URL || "localhost:5000";
import { resourcesData } from '../../../constants/resources';

// Skeleton Component
const HeroSkeleton = () => {
    return (
        <div className="relative rounded-2xl overflow-hidden bg-white animate-pulse">
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
        </div>
    );
};

// Main Hero Component
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
            {loading ? (
                <HeroSkeleton />
            ) : (
                featuredBlog && (
                    <div className="relative rounded-2xl overflow-hidden bg-white">

                        {/* Background Image */}
                        <div className="absolute inset-0 bg-white">
                            <img
                                src={featuredBlog.heroImage}
                                alt={featuredBlog.title}
                                className="w-full h-full object-contain lg:object-cover"
                                loading='eager'
                            />
                        </div>
                    
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/0 to-black/20" />
                    
                        {/* Content Wrapper */}
                        <div className="relative z-10 flex flex-col justify-between">
                    
                            {/* Top Block */}
                            <div className="bg-white rounded-br-2xl p-6 lg:max-w-[40%] self-start">
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
                    
                            {/* Spacer Block */}
                            <div className="flex-grow lg:py-20 py-50" />
                    
                            {/* Bottom Block */}
                            <div className="bg-white rounded-tl-2xl p-6 lg:max-w-[40%] self-end">
                                <h1 className="section-title">
                                    {featuredBlog.title}
                                </h1>
                                <p className="section-description">
                                    {featuredBlog.description}
                                </p>
                    
                                <div className="resources-meta mt-1 mb-1">
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
                    
                                <a href={`/resources/${featuredBlog.slug}`}>
                                    <p className='section-description'>
                                        Read More →
                                    </p>
                                </a>
                            </div>
                    
                        </div>
                    </div>
                )
            )}
        </Block>
    );
};

export default HeroTwo;