import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Code, Briefcase } from 'lucide-react';
import pavanImage from '../assets/pavan.png';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My journey from a student to a passionate full-stack developer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Who I am
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I am <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Rallapati Pavan Kumar</span>,
                            a B.Tech student at Centurion University, Vizianagaram.
                            I have a strong passion for Artificial Intelligence and Full-Stack Development.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I enjoy building scalable applications and solving complex problems with code.
                            My experience ranges from building machine learning models to creating dynamic web applications.
                            Apart from coding, I am an active content creator, sharing knowledge about tech on YouTube.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-gray-50 dark:bg-dark-card rounded-lg border border-gray-100 dark:border-gray-800">
                                <MapPin className="text-indigo-600 w-6 h-6 mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Andhra Pradesh, India</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark-card rounded-lg border border-gray-100 dark:border-gray-800">
                                <Briefcase className="text-indigo-600 w-6 h-6 mb-2" />
                                <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Fresh / Projects</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-indigo-600/10">
                            <img
                                src={pavanImage}
                                alt="Pavan Kumar - Full-Stack Developer"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                {/* <p className="text-white font-medium italic">"Turning coffee into code since day one."</p> */}
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default About;
