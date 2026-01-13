import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-dark-bg pt-16">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl delay-1000 animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                            <span className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Available for opportunities
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                            Hi, I'm <br />
                            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                Pavan Kumar
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                            Full-Stack Developer & AI Enthusiast based in Andhra Pradesh.
                            I build scalable applications and solve real-world problems through code.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-8">
                            <Link to="contact" smooth={true} duration={500} offset={-50}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
                                >
                                    Hire Me <ArrowRight size={20} />
                                </motion.button>
                            </Link>

                            <Link to="projects" smooth={true} duration={500} offset={-50}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-gray-700 dark:text-gray-200 font-medium transition-colors bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm"
                                >
                                    View Projects
                                </motion.button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <a 
                                href="https://github.com/pavan-progamming" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/pavan-progamming/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a 
                                href="mailto:pavankumarrallapati9182@gmail.com"
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-md relative"
                    >
                        {/* "Code" Card Illustration instead of photo for now to look professional/abstract */}
                        <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-xs text-slate-500 font-mono ml-auto">developer.jsx</span>
                            </div>
                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex">
                                    <span className="text-purple-400 w-12 text-right mr-4">1</span>
                                    <span className="text-pink-400">const</span> <span className="text-yellow-200">developer</span> <span className="text-slate-300">=</span> <span className="text-slate-300">{`{`}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-slate-600 w-12 text-right mr-4">2</span>
                                    <span className="text-slate-300 pl-4">name:</span> <span className="text-green-400">'Rallapati Pavan Kumar'</span><span className="text-slate-300">,</span>
                                </div>
                                <div className="flex">
                                    <span className="text-slate-600 w-12 text-right mr-4">3</span>
                                    <span className="text-slate-300 pl-4">skills:</span> <span className="text-slate-300">[</span><span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'AI'</span><span className="text-slate-300">],</span>
                                </div>
                                <div className="flex">
                                    <span className="text-slate-600 w-12 text-right mr-4">4</span>
                                    <span className="text-slate-300 pl-4">hardWorker:</span> <span className="text-blue-400">true</span><span className="text-slate-300">,</span>
                                </div>
                                <div className="flex">
                                    <span className="text-slate-600 w-12 text-right mr-4">5</span>
                                    <span className="text-slate-300 pl-4">problemSolver:</span> <span className="text-blue-400">true</span><span className="text-slate-300">,</span>
                                </div>
                                <div className="flex">
                                    <span className="text-purple-400 w-12 text-right mr-4">6</span>
                                    <span className="text-slate-300">{`};`}</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 p-4 bg-white dark:bg-dark-card rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 hidden md:block"
                        >
                            <Terminal className="text-indigo-600 w-8 h-8" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
