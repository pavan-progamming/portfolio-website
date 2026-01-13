import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            RPK
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            © {new Date().getFullYear()} Rallapati Pavan Kumar. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a 
                            href="https://github.com/pavan-progamming" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-indigo-500 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/pavan-progamming/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-indigo-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a 
                            href="mailto:pavankumarrallapati9182@gmail.com" 
                            className="text-gray-400 hover:text-indigo-500 transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
