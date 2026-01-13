import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import roadImage from '../assets/road.svg';
import resonaImage from '../assets/resona.png';
import carrerImage from '../assets/carrer.png';
import timeTableImage from '../assets/time-table.png';

const Projects = () => {
    const projects = [
        {
            title: "Road Review",
            description: "FixRide is a user-friendly, full-stack web application designed to connect drivers in need of roadside assistance with nearby, verified mechanics quickly and effortlessly.",
            tech: ["React", "Node.js", "MySQL", "JSON Web Tokens"],
            github: "https://github.com/pavan-progamming/Fix_ride",
            live: "#",
            image: roadImage,
        },
        {
            title: "Music Website",
            description: "Interactive music streaming platform interface with seamless playback controls.",
            tech: ["HTML", "CSS", "JavaScript", "Audio API"],
            github: "https://github.com/pavan-progamming/Resona",
            live: "https://pavan-progamming.github.io/Resona/",
            image: resonaImage,
        },
        {
            title: "Career Campaign",
            description: "Digital marketing campaign and landing page optimization for career growth services.",
            tech: ["React", "Node.js"],
            github: "https://github.com/pavan-progamming/Career_Companion",
            live: "https://pavan-progamming.github.io/Career_Companion/#/",
            image: carrerImage,
        },
        {
            title: "Personal Time-Table App",
            description: "A modern, mobile-first application for managing your university schedule, tasks, and deadlines. Built with React and Capacitor for a seamless cross-platform experience.",
            tech: ["React", "Android Studio", "Capacitor",],
            github: "https://github.com/pavan-progamming/Time-Table-App",
            live: "#",
            image: timeTableImage
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent works ranging from Web Development to AI Solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-gray-50 dark:bg-dark-card rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col h-full hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
                        >
                            <div className="h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700 relative group">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        <Github size={18} className="mr-1" /> Code
                                    </a>
                                    {project.live !== "#" && (
                                        <a 
                                            href={project.live} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            <ExternalLink size={18} className="mr-1" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
