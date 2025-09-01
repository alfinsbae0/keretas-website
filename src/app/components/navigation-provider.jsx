'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Handle navigation loading
    useEffect(() => {
        const handleStart = () => setIsLoading(true);
        const handleComplete = () => setIsLoading(false);

        // Listen to route changes
        const originalPush = router.push;
        router.push = (...args) => {
            handleStart();
            return originalPush.apply(router, args);
        };

        // Clean up loading state when pathname changes
        const timer = setTimeout(() => {
            handleComplete();
        }, 100);

        return () => {
            clearTimeout(timer);
            router.push = originalPush;
        };
    }, [pathname, router]);

    // Show loading for initial page load
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <NavigationContext.Provider value={{ isLoading, setIsLoading }}>
            {children}

            {/* Global Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-95 backdrop-blur-sm">
                    <div className="flex flex-col items-center space-y-6">
                        {/* Keretas Logo with pulse animation */}
                        <div className="w-24 h-24 animate-pulse">
                            <img
                                src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/664a75fdd1514bc81cfd52c5_Keretas%20Logo%20Type%20Tagline.png"
                                alt="Keretas Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Modern Loading Spinner */}
                        <div className="relative">
                            <div className="w-12 h-12 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
                        </div>

                        {/* Loading Text */}
                        <p className="text-gray-700 text-sm font-medium">Loading page...</p>
                    </div>
                </div>
            )}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within NavigationProvider');
    }
    return context;
}
