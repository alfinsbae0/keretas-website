'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const TopLoadingContext = createContext();

export function TopLoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    // Handle route change loading
    useEffect(() => {
        setIsLoading(true);
        setProgress(10);

        // Simulate progressive loading
        const progressSteps = [30, 60, 90];
        const timers = progressSteps.map((step, index) =>
            setTimeout(() => setProgress(step), (index + 1) * 100)
        );

        // Complete loading
        const completeTimer = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
                setProgress(0);
            }, 200);
        }, 500);

        return () => {
            timers.forEach(clearTimeout);
            clearTimeout(completeTimer);
        };
    }, [pathname]);

    const startLoading = () => {
        setIsLoading(true);
        setProgress(10);
    };

    const finishLoading = () => {
        setProgress(100);
        setTimeout(() => {
            setIsLoading(false);
            setProgress(0);
        }, 200);
    };

    return (
        <TopLoadingContext.Provider value={{
            isLoading,
            progress,
            startLoading,
            finishLoading
        }}>
            {/* Top Loading Bar */}
            {(isLoading || progress > 0) && (
                <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
                    <div
                        className="h-full bg-gradient-to-r from-green-500 via-green-600 to-green-500 transition-all duration-300 ease-out"
                        style={{
                            width: `${progress}%`,
                            boxShadow: progress > 0 ? '0 0 10px rgba(34, 197, 94, 0.5)' : 'none'
                        }}
                    />
                </div>
            )}
            {children}
        </TopLoadingContext.Provider>
    );
}

export function useTopLoading() {
    const context = useContext(TopLoadingContext);
    if (!context) {
        throw new Error('useTopLoading must be used within TopLoadingProvider');
    }
    return context;
}
