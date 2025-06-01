"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Splashscreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 1000);

        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                        opacity: { duration: 0.3 },
                        exit: { duration: 0.6, ease: "easeInOut" }
                    }}
                >
                    {/* Animated Background Elements */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        {/* Top left circle */}
                        <motion.div
                            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-green-100"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Bottom right circle */}
                        <motion.div
                            className="absolute -bottom-20 -right-20 w-32 h-32 rounded-full bg-green-50"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, -180, -360]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Floating squares */}
                        <motion.div
                            className="absolute top-1/4 right-1/4 w-6 h-6 bg-green-200 rounded"
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0],
                                rotate: [0, 45, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <motion.div
                            className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-green-300 rounded-full"
                            animate={{
                                y: [0, 15, 0],
                                x: [0, -15, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    {/* Logo Container */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >
                        <motion.div
                            className="w-32 h-32 mb-8 relative"
                            animate={{
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.img
                                src="/logo_k.png"
                                alt="Keretas Logo"
                                className="w-full h-full object-contain"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                }}
                            />
                        </motion.div>

                        {/* Company Name */}
                        <motion.div
                            className="text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <motion.h1
                                className="text-3xl font-bold text-gray-800 mb-2"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                style={{
                                    background: "linear-gradient(90deg, #374151, #059669, #374151)",
                                    backgroundSize: "200% 100%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                KERETAS
                            </motion.h1>
                        </motion.div>
                    </motion.div>

                    {/* Tagline */}
                    <AnimatePresence>
                        {showText && (
                            <motion.div
                                className="absolute bottom-20 text-center px-8"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.p
                                    className="text-white text-lg font-medium"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    Crafting marketing magic together
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Loading Indicator */}
                    <motion.div
                        className="absolute bottom-8 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        <motion.div
                            className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-green-600 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    delay: 1.5,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}