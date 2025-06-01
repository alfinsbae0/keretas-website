"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Splash2 = ({ onComplete }) => {
    const [isComplete, setIsComplete] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setShowAnimation(true);
        }, 1000);

        const completeTimer = setTimeout(() => {
            setIsComplete(true);
            if (onComplete) onComplete();
        }, 3000);

        return () => {
            clearTimeout(startTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    const logoVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const rectangleVariants = {
        left: {
            hidden: { y: "100%" },
            visible: {
                y: "0%",
                transition: {
                    duration: 1.2,
                    ease: "easeInOut"
                }
            }
        },
        right: {
            hidden: { y: "-100%" },
            visible: {
                y: "0%",
                transition: {
                    duration: 1.2,
                    ease: "easeInOut"
                }
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-50 bg-green-700 overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className="absolute top-0 left-0 w-1/2 h-full bg-black z-10"
                        variants={rectangleVariants.left}
                        initial="hidden"
                        animate={showAnimation ? "visible" : "hidden"}
                    />

                    <motion.div
                        className="absolute top-0 right-0 w-1/2 h-full bg-black z-10"
                        variants={rectangleVariants.right}
                        initial="hidden"
                        animate={showAnimation ? "visible" : "hidden"}
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.div
                            variants={logoVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <img className="w-40 h-auto" src="/logo_k.png" alt="" />

                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Splash2;