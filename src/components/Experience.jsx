import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Youtube, Code } from 'lucide-react';

const Experience = () => {
    const timeline = [
        {
            year: "Present",
            title: "B.Tech in Computer Science",
            institution: "Centurion University, Vizianagaram",
            description: "Specializing in Full-Stack Development and AI. Currently in 2nd Year.",
            icon: <GraduationCap size={20} />,
            side: "left"
        },
        {
            year: "2024",
            title: "Started Content Creation",
            institution: "YouTube",
            description: "Begun sharing knowledge on tech, coding tutorials, and career advice to help peers.",
            icon: <Youtube size={20} />,
            side: "right"
        },
        {
            year: "2023",
            title: "Intermediate Education",
            institution: "Sri Viswa Junior College, Visakhapatnam",
            description: "Focus on Mathematics, Physics, and Chemistry. Built strong analytical foundations.",
            icon: <Award size={20} />,
            side: "left"
        },
        {
            year: "2021",
            title: "Secondary Education",
            institution: "N.T School, Visakhapatnam",
            description: "Completed with distinction. Developed early interest in computers.",
            icon: <Award size={20} />,
            side: "right"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-card transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
                    <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My academic journey and professional milestones.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-200 dark:bg-indigo-900"></div>

                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex items-center justify-between mb-8 w-full ${item.side === 'left' ? 'flex-row-reverse' : ''}`}
                        >
                            <div className="w-5/12"></div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-dark-bg border-4 border-indigo-500 flex items-center justify-center z-10">
                                <span className="text-indigo-600 dark:text-indigo-400">
                                    {item.icon}
                                </span>
                            </div>

                            <div className={`w-5/12 ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                                <div className="bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-2">
                                        {item.year}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{item.institution}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
