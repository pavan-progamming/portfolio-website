import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, PlayCircle, Video, Users } from 'lucide-react';

const Content = () => {
    // Video data with links
    const videos = [
        {
            title: "Vs Code Shortcuts",
            views: "3.9k views",
            thumbnail: "bg-red-100",
            url: "https://youtube.com/shorts/UiV4Wgv9Dyw?si=MoO9C0Oau1Whh3hV"
        },
        {
            title: "What is An API?",
            views: "1.9k views",
            thumbnail: "bg-blue-100",
            url: "https://youtube.com/shorts/h_wm5k398Ko?si=ziVQKxi8oqhOmp4a"
        },
        {
            title: "Learn Css",
            views: "149 views",
            thumbnail: "bg-green-100",
            url: "https://youtu.be/ln5NxmJuCrw?si=1_-0yhZbO5Bjt50C"
        }
    ];

    return (
        <section id="content" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium mb-4">
                        <Youtube size={20} />
                        <span>Content Creator</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Sharing Knowledge</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I create video content about Full-Stack Development, AI trends, and coding tutorials.
                        Join my learning community on YouTube.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-red-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <h3 className="text-2xl font-bold mb-2">Subscribe to my Channel</h3>
                        <p className="text-red-100 mb-8 max-w-md">
                            Get the latest tutorials, tips, and insights into the world of software development and artificial intelligence.
                        </p>

                        <div className="flex gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">190+</div>
                                <div className="text-xs text-red-200 uppercase tracking-wider">Subscribers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">40+</div>
                                <div className="text-xs text-red-200 uppercase tracking-wider">Videos</div>
                            </div>
                        </div>

                        <a
                            href="https://www.youtube.com/@BrainToCode"
                            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Visit Channel <PlayCircle size={20} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid gap-4"
                    >
                        {videos.map((video, index) => (
                            <a
                                key={index}
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-gray-50 dark:bg-dark-card p-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group border border-transparent hover:border-red-200 dark:hover:border-red-900/30"
                            >
                                <div className={`w-32 h-20 rounded-lg ${video.thumbnail} flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                    <PlayCircle className="text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{video.title}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{video.views}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Content;
