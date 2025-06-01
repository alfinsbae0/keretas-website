import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smile } from 'lucide-react';

const useScreenSize = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isMobile;
};

const JargonAnimated = () => {
    const sectionRef = useRef(null);
    const isMobile = useScreenSize();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.7", "end 0.7"]
    });

    const mobileProgressPoints = [0, 0.2, 0.9, 1];
    const desktopProgressPoints = [0, 0.3, 0.8, 1];

    const currentProgressPoints = isMobile ? mobileProgressPoints : desktopProgressPoints;

    const mobileRightToLeftValues = [200, 90, -90, -200];
    const mobileLeftToRightValues = [-200, -90, 90, 200];

    const desktopRightToLeftValues = [450, 180, -100, -450];
    const desktopLeftToRightValues = [-450, -180, 100, 450];

    const currentRightToLeftValues = isMobile ? mobileRightToLeftValues : desktopRightToLeftValues;
    const currentLeftToRightValues = isMobile ? mobileLeftToRightValues : desktopLeftToRightValues;

    const xRightToLeft = useTransform(
        scrollYProgress,
        currentProgressPoints,
        currentRightToLeftValues
    );

    const xLeftToRight = useTransform(
        scrollYProgress,
        currentProgressPoints,
        currentLeftToRightValues
    );

    return (
        <div ref={sectionRef} className="flex flex-col items-center justify-center py-20 text-center">
            {/* Main Heading */}
            <div className="mb-8">
                <motion.h1
                    style={{ x: xRightToLeft }}
                    className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-2 leading-tight"
                >
                    Let's craft
                </motion.h1>
                <motion.div
                    style={{ x: xLeftToRight }}
                    className="flex items-center gap-3 md:gap-5 justify-center flex-wrap"
                >
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        big thing
                    </h1>
                    <button className="h-16 w-32 md:h-20 md:w-40 gap-2 rounded-full bg-[#ffc715] flex items-center justify-center hover:bg-yellow-400 transition-colors">
                        <Smile color="#000000" size={isMobile ? 16 : 20} />
                        <h2 className="text-black font-semibold text-sm md:text-base">Let's Talk</h2>
                    </button>
                </motion.div>
                <motion.h1
                    style={{ x: xRightToLeft }}
                    className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mt-2 leading-tight"
                >
                    together
                </motion.h1>
            </div>


        </div>
    );
};

export default JargonAnimated;