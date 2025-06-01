"use client"

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);

    const testimonials = [
        {
            id: 1,
            text: "It has been instrumental in transforming our digital presence. Their expertise in creative design and tech solutions has significantly enhanced our app's user engagement and overall growth. Truly a reliable partner!",
            name: "Antonius Tan",
            position: "Head of Digital Channel, Sequis Life",
            image: "/slide_1.png"
        },
        {
            id: 2,
            text: "The team brought our campaigns to life with exceptional creativity and precision. Their seamless integration of design and digital strategy has elevated our brand presence across platforms. A fantastic partner for impactful results!",
            name: "Darwin Chang",
            position: "Senior Marketing Manager, DestinAsian Media",
            image: "/slide_2.png"
        },
        {
            id: 3,
            text: "Keretas was instrumental in crafting our brand identity and signature designs, blending creativity with expert copywriting to tell our story. Their support during our collaboration with BOSS ensured every detail, from visuals to messaging, was perfectly aligned with our vision.",
            name: "I Kadek Gunadi",
            position: "Founder, Candri Bali",
            image: "/slide_3.png"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        })
    };

    const imageVariants = {
        enter: {
            scale: 0.8,
            opacity: 0,
            rotateY: 45
        },
        center: {
            scale: 1,
            opacity: 1,
            rotateY: 0
        },
        exit: {
            scale: 0.8,
            opacity: 0,
            rotateY: -45
        }
    };

    const textVariants = {
        enter: {
            y: 20,
            opacity: 0
        },
        center: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -20,
            opacity: 0
        }
    };

    return (
        <div className="bg-white py-5 px-4 md:px-20 overflow-hidden">
            <div className="max-w-full mx-auto">

                {/* Mobile Layout */}
                <div className="md:hidden">
                    {/* Mobile Image with Animation */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.img
                                    key={currentSlide}
                                    src={testimonials[currentSlide].image}
                                    alt={testimonials[currentSlide].name}
                                    className="relative w-56 h-auto z-10"
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-between items-center mb-8 px-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>

                    <div className="text-center relative">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <Quote className="text-blue-600 w-12 h-12 mb-6 mx-auto" />
                        </motion.div>

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentSlide}
                                variants={textVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                            >
                                <blockquote className="text-gray-800 text-md leading-relaxed mb-6 font-medium">
                                    {testimonials[currentSlide].text}
                                </blockquote>
                                <div className="mb-8">
                                    <h4 className="text-gray-900 text-xl font-bold mb-1">
                                        {testimonials[currentSlide].name}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {testimonials[currentSlide].position}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-between">
                    <div className="flex flex-col items-center relative w-1/3">
                        <motion.div
                            className='space-y-8'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="absolute left-2 top-12 text-gray-800 text-xl font-bold"
                                key={`current-${currentSlide}`}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                0{currentSlide + 1}
                            </motion.div>
                            <div className="absolute left-4.5 top-30 w-0.5 h-25 bg-gray-600"></div>
                            <div className="absolute left-2 top-65 text-gray-800 text-xl font-bold">
                                0{testimonials.length}
                            </div>
                        </motion.div>

                        <div className="relative mt-10">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.img
                                    key={currentSlide}
                                    src={testimonials[currentSlide].image}
                                    alt={testimonials[currentSlide].name}
                                    className="relative w-64 h-64 z-10"
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex-1 px-12 relative">
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Quote className="text-blue-600 w-16 h-16 mb-6" />
                        </motion.div>

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentSlide}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                custom={direction}
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                            >
                                <blockquote className="text-gray-800 text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                                    {testimonials[currentSlide].text}
                                </blockquote>
                                <div className="mb-8">
                                    <h4 className="text-gray-900 text-xl font-bold mb-1">
                                        {testimonials[currentSlide].name}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {testimonials[currentSlide].position}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-4">
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>

                <div className="flex justify-center mt-12 gap-2">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                                scale: index === currentSlide ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}