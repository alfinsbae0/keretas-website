'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TopLoadingBar() {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        // Start loading when pathname changes
        setLoading(true);
        setProgress(20);

        // Simulate progress
        const timer1 = setTimeout(() => setProgress(20), 100);
        const timer2 = setTimeout(() => setProgress(50), 200);
        const timer3 = setTimeout(() => {
            setProgress(100);
            // Hide after completing
            setTimeout(() => {
                setLoading(false);
                setProgress(0);
            }, 200);
        }, 400);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [pathname]);

    if (!loading && progress === 0) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1">
            <div
                className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 ease-out shadow-sm"
                style={{
                    width: `${progress}%`,
                    boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)'
                }}
            />
        </div>
    );
}
