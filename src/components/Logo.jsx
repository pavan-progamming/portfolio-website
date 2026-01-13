import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", animated = true, size = "default" }) => {
    const sizeClasses = {
        small: "w-8 h-8",
        default: "w-10 h-10",
        large: "w-12 h-12"
    };

    const textSizes = {
        small: "text-lg",
        default: "text-2xl",
        large: "text-3xl"
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Logo Icon */}
            <motion.div
                className={`${sizeClasses[size]} relative`}
                whileHover={animated ? { rotate: 360, scale: 1.1 } : {}}
                transition={{ duration: 0.5 }}
            >
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background Circle with Gradient */}
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                    </defs>
                    
                    {/* Outer Circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="url(#logoGradient)"
                        className="dark:opacity-90"
                    />
                    
                    {/* Code Brackets */}
                    <motion.path
                        d="M 30 35 L 20 50 L 30 65"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
                        animate={animated ? { pathLength: 1 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                    />
                    <motion.path
                        d="M 70 35 L 80 50 L 70 65"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
                        animate={animated ? { pathLength: 1 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                    />
                    
                    {/* Center Dot */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="4"
                        fill="white"
                        initial={animated ? { scale: 0 } : { scale: 1 }}
                        animate={animated ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 }}
                    />
                </svg>
            </motion.div>

            {/* Text Logo */}
            <motion.span
                className={`font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent ${textSizes[size]}`}
                whileHover={animated ? { scale: 1.05 } : {}}
                transition={{ duration: 0.2 }}
            >
                RPK
            </motion.span>
        </div>
    );
};

export default Logo;

