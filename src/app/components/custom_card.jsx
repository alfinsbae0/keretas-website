import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';


export default function CustomCard({
    id,
    title,
    description,
    backgroundColor = 'bg-blue-100',
    titleColor = 'text-gray-800',
    descriptionColor = 'text-gray-600',
    icon,
    iconPosition = 'top-left',
    iconSize = 60,
    className = '',
    delay = 0,
    duration = 0.5
}) {
    
    const IconDisplay = ({ icon, size = 60, alt = 'Icon' }) => (
        <img
            src={icon}
            alt={alt}
            width={size}
            height={size}
            className="transition-all duration-300 hover:opacity-80 object-contain rounded"
            onError={(e) => {
                e.target.style.display = 'none';
            }}
        />
    );

    const getIconPositionClasses = () => {
        if (iconPosition.startsWith('top')) {
            return 'top-4 left-4';
        }
        return 'bottom-4 left-4';
    };

    const getContentPaddingClasses = () => {
        if (iconPosition.startsWith('top')) {
            return 'pt-20';
        }
        if (iconPosition.startsWith('bottom')) {
            return 'pb-20';
        }
        return '';
    };

    const isTop = iconPosition.startsWith('top');

    const variant = {
        hidden: {
            y: isTop ? 50 : -50,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay,
                duration,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.div
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`relative flex flex-col ${className}`}
        >
           
            {!isTop && (
                <div className="flex items-center justify-start basis-[10%] pl-10">
                    <span className="transform -rotate-90 text-2xl font-bold text-gray-400">
                        {id}
                    </span>
                </div>
            )}

          
            <div className="relative basis-[90%] w-full h-full">
                <div className={`relative w-full h-full ${backgroundColor} p-6 flex flex-col`}>
                   
                    {icon && (
                        <div className={`absolute ${getIconPositionClasses()}`}>
                            <IconDisplay icon={icon} size={iconSize} />
                        </div>
                    )}

                   
                    <div
                        className={`${getContentPaddingClasses()} flex-1 flex flex-col ${isTop ? 'justify-end' : 'justify-start'
                            } overflow-hidden`}
                    >
                        <h3 className={`text-xl font-bold mb-3 ${titleColor} leading-tight`}>
                            {title}
                        </h3>
                        {description && (
                            <p className={`text-sm ${descriptionColor} leading-relaxed break-words`}>
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

           
            {isTop && (
                <div className="flex items-center justify-start basis-[10%] pl-10">
                    <span className="transform -rotate-90 text-2xl font-bold text-gray-400">
                        {id}
                    </span>
                </div>
            )}


        </motion.div >
    );
}

CustomCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    backgroundColor: PropTypes.string,
    titleColor: PropTypes.string,
    descriptionColor: PropTypes.string,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf([
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right'
    ]),
    iconSize: PropTypes.number,
    className: PropTypes.string,
    delay: PropTypes.number,
    duration: PropTypes.number
};
