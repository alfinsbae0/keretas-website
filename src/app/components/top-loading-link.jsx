'use client';

import Link from 'next/link';
import { useTopLoading } from './top-loading-provider';

export default function TopLoadingLink({ href, children, className, onClick, ...props }) {
    const { startLoading } = useTopLoading();

    const handleClick = (e) => {
        // Call custom onClick if provided
        if (onClick) {
            onClick(e);
        }

        // Only show loading for internal navigation
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            startLoading();
        }
    };

    return (
        <Link
            href={href}
            className={className}
            onClick={handleClick}
            {...props}
        >
            {children}
        </Link>
    );
}
