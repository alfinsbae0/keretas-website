'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample articles data - you can replace this with actual data from your CMS
const featuredArticle = {
    id: 0,
    title: "Boost your online sales with these top conversion strategies",
    description: "Is easy movement them, for harder your a in duty the except when of interfaces had is screen state be accuse own set the creating how have him, on the into authentic.",
    image: "/slide_1.png", // You can use a more suitable 3D/abstract image
    date: "April 15, 2025",
    readTime: "2 min read",
    author: "Courtney Henry",
    slug: "boost-online-sales-conversion-strategies",
    featured: true
};

const articlesData = [
    {
        id: 1,
        title: "Elements that Capture and Retain User Interest",
        image: "/slide_1.png",
        date: "April 15, 2025",
        readTime: "7 min read",
        slug: "elements-that-capture-and-retain-user-interest"
    },
    {
        id: 2,
        title: "Top Trends to Watch and Implement in 2024",
        image: "/slide_2.png",
        date: "April 15, 2025",
        readTime: "10 min read",
        slug: "top-trends-to-watch-and-implement-in-2024"
    },
    {
        id: 3,
        title: "Engaging Your Audience in the Digital Age",
        image: "/slide_3.png",
        date: "April 15, 2025",
        readTime: "4 min read",
        slug: "engaging-your-audience-in-the-digital-age"
    },
    {
        id: 4,
        title: "A Comprehensive Beginner's Guide to Online Success",
        image: "/slide_1.png",
        date: "April 15, 2025",
        readTime: "15 min read",
        slug: "comprehensive-beginners-guide-online-success"
    },
    {
        id: 5,
        title: "Tips for Content Creation and Audience Growth",
        image: "/slide_2.png",
        date: "April 15, 2025",
        readTime: "8 min read",
        slug: "tips-content-creation-audience-growth"
    },
    {
        id: 6,
        title: "Strategies for Higher Open and Conversion Rates",
        image: "/slide_3.png",
        date: "April 15, 2025",
        readTime: "9 min read",
        slug: "strategies-higher-open-conversion-rates"
    }
];

function FeaturedArticle({ article }) {
    return (
        <div className="rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <Link href={`/articles/${article.slug}`}>
                <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
                    {/* Image Section */}
                    <div className="relative overflow-hidden flex items-center justify-center p-6">
                        <div className="relative w-full h-full">
                            {/* 3D Abstract Shape Background */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg"></div>
                                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md"></div>
                            </div>

                            {/* Main 3D Element */}
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <div className="relative">
                                    {/* 3D Grid Lines */}
                                    <svg width="300" height="200" viewBox="0 0 300 200" className="opacity-60">
                                        <defs>
                                            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3B82F6" />
                                                <stop offset="50%" stopColor="#10B981" />
                                                <stop offset="100%" stopColor="#F59E0B" />
                                            </linearGradient>
                                        </defs>
                                        {/* Horizontal lines */}
                                        {[...Array(8)].map((_, i) => (
                                            <line
                                                key={`h-${i}`}
                                                x1="0"
                                                y1={i * 25}
                                                x2="300"
                                                y2={i * 25}
                                                stroke="url(#gridGradient)"
                                                strokeWidth="1"
                                                opacity={0.7 - i * 0.1}
                                            />
                                        ))}
                                        {/* Vertical curved lines */}
                                        {[...Array(12)].map((_, i) => (
                                            <path
                                                key={`v-${i}`}
                                                d={`M ${i * 25} 0 Q ${i * 25 + 10} 100 ${i * 25} 200`}
                                                fill="none"
                                                stroke="url(#gridGradient)"
                                                strokeWidth="1"
                                                opacity={0.8 - Math.abs(i - 6) * 0.1}
                                            />
                                        ))}
                                    </svg>

                                    {/* Central 3D Shape */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-2xl shadow-xl animate-float"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center p-8 lg:p-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight hover:text-green-600 transition-colors">
                            {article.title}
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {article.description}
                        </p>

                        {/* Metadata */}
                        <div className="flex items-center space-x-6 mb-8 text-sm text-gray-500">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                                <span className="font-medium">{article.author}</span>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{article.date}</span>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{article.readTime}</span>
                            </div>
                        </div>

                        {/* Read More Button */}
                        <div>
                            <button className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 group">
                                Read more
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function ArticleCard({ article }) {
    return (
        <div className="group cursor-pointer">
            <Link href={`/articles/${article.slug}`}>
                <div className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors mb-4 line-clamp-2">
                            {article.title}
                        </h3>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {article.date}
                            </span>
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {article.readTime}
                            </span>
                        </div>

                        <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors">
                            Read more
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function NewsletterSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <div className="bg-gray-50 py-32 mb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Subscribe Our Weekly Newsletter
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Regular updates ensure that readers have access to fresh perspectives, making our articles a must-read.
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function ArticlesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            {/* <div className="relative bg-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 w-20 h-20 bg-green-100 rounded-full opacity-60"></div>
                    <div className="absolute top-32 right-32 w-12 h-12 bg-green-200 rounded-full opacity-40"></div>
                    <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
                            Articles
                        </h1>

                    </div>
                </div>
            </div> */}

            {/* Featured Article Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <FeaturedArticle article={featuredArticle} />
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-18">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articlesData.map((article) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                        />
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <NewsletterSection />

            {/* Footer Links Section */}
            {/* <div className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pages</h3>
                            <ul className="space-y-2">
                                <li><Link href="/articles" className="text-gray-600 hover:text-green-600 transition-colors">Articles</Link></li>
                                <li><Link href="/categories" className="text-gray-600 hover:text-green-600 transition-colors">Categories</Link></li>
                                <li><Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">About us</Link></li>
                                <li><Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Utility</h3>
                            <ul className="space-y-2">
                                <li><Link href="/style-guide" className="text-gray-600 hover:text-green-600 transition-colors">Style guide</Link></li>
                                <li><Link href="/licenses" className="text-gray-600 hover:text-green-600 transition-colors">Licenses</Link></li>
                                <li><Link href="/changelog" className="text-gray-600 hover:text-green-600 transition-colors">Changelog</Link></li>
                                <li><Link href="/404" className="text-gray-600 hover:text-green-600 transition-colors">404 Page</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}