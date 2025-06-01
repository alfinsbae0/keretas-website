"use client"

import { ArrowUp, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#ffc715] px-6 md:px-12 lg:px-16 py-12 md:py-16 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                   
                    <div className="order-3 md:order-3 lg:order-1 lg:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe!</h3>
                        <p className="text-gray-800 mb-6">Stay in the loop with our latest updates!</p>

                        <div className="flex">
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="w-full px-6 py-3 rounded-full border-2 border-gray-900 bg-transparent placeholder-gray-700 text-gray-900 focus:outline-none focus:border-gray-700 pr-24"
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="absolute right-1 top-1 bottom-1 px-6 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-800 mt-10 md:mt-25">Copyright © 2024 Keretas.</p>

                    </div>

                    
                    <div className="order-1 md:order-1 lg:order-2 lg:col-span-1">
                        <div className="mb-12">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Email us</h3>
                            <a
                                href="mailto:hello@keretas.id"
                                className="text-black hover:text-gray-500 transition-colors font-medium text-2xl"
                            >
                                hello@keretas.id
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Office location</h3>
                            <address className="text-gray-800 not-italic leading-relaxed md:text-lg">
                                Equity Tower 49th floor,<br />
                                Jl. Jend Sudirman Kav. 52-53,
                                SCBD area,<br />
                                Jakarta Selatan 12190
                            </address>
                        </div>
                    </div>

                  
                    <div className="order-2 md:order-2 lg:order-3 lg:col-span-1">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Call us</h3>
                            <a
                                href="tel:+622129651196"
                                className="text-black hover:text-gray-500 transition-colors text-2xl"
                            >
                                (021) 2965 1196
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow us</h3>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
