import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // EmailJS Configuration
    // Get these values from your EmailJS account:
    // 1. Go to https://www.emailjs.com/ and create a free account
    // 2. Create an Email Service (Gmail, Outlook, etc.) - get Service ID
    // 3. Create an Email Template - get Template ID
    // 4. Get your Public Key from Account > API Keys
    // 5. Add them to your .env file (see .env.example)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if EmailJS is configured
        if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            setError('Email service not configured. Please contact me directly at pavankumarallapati9182@gmail.com');
            return;
        }

        setLoading(true);
        setError('');
        setDone(false);

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );
            
            setDone(true);
            setLoading(false);
            formRef.current.reset();
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setDone(false);
            }, 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setError('Failed to send message. Please try again or email me directly at pavankumarallapati9182@gmail.com');
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-card transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's talk about everything!</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Don't like forms? Send me an email.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <a 
                                        href="mailto:pavankumarallapati9182@gmail.com" 
                                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 transition-colors break-all"
                                    >
                                        pavankumarallapati9182@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                                    <a 
                                        href="https://www.linkedin.com/in/pavan-kumar-rallapati-2762a9319/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 transition-colors"
                                    >
                                        Pavan Kumar Rallapati
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Andhra Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="your@email.com"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {loading ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                            {done && <p className="text-green-500 text-center text-sm font-medium">✓ Message sent successfully! I'll get back to you soon.</p>}
                            {error && <p className="text-red-500 text-center text-sm font-medium">{error}</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
