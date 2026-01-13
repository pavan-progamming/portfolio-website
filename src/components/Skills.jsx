import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, Layout, Database, Code, Shield, Terminal, Globe, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
    const [isSystemOn, setIsSystemOn] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const skillCategories = [
        {
            id: 'frontend',
            title: "Frontend",
            icon: <Layout className="w-5 h-5 md:w-6 md:h-6" />,
            skills: [
                { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
                // { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
            ],
            angle: -90, // Top
        },
        {
            id: 'backend',
            title: "Backend",
            icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
            skills: [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                // { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
                { name: "Rest APIs", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" } 
            ],
            angle: -18,
        },
        {
            id: 'database',
            title: "Databases",
            icon: <Database className="w-5 h-5 md:w-6 md:h-6" />,
            skills: [
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                // { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                // { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
            ],
            angle: 54,
        },
        {
            id: 'languages',
            title: "Programming",
            icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
            skills: [
                // { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                // { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
            ],
            angle: 126,
        },
        {
            id: 'tools',
            title: "Tools",
            icon: <Terminal className="w-5 h-5 md:w-6 md:h-6" />,
            skills: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
            ],
            angle: 198,
        }
    ];

    const radius = 250; // Increased radius for better spacing

    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-dark-bg relative overflow-hidden transition-colors duration-500">
            {/* Background enhancement */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Skills & <span className="text-indigo-600">Technologies</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Interactive Power-Hub: Hover to activate the system and explore technical expertise.
                    </p>
                </motion.div>

                {/* Desktop Power-Hub Layout */}
                <div className="hidden lg:flex justify-center items-center h-[600px] relative"
                    onMouseEnter={() => setIsSystemOn(true)}
                    onMouseLeave={() => { setIsSystemOn(false); setHoveredCategory(null); }}>

                    {/* SVG Connector Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="-400 -300 800 600">
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
                                <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {skillCategories.map((cat) => {
                            const rad = (cat.angle * Math.PI) / 180;
                            // Nodes are at x, y relative to center
                            const targetX = radius * Math.cos(rad);
                            const targetY = radius * Math.sin(rad);

                            // Start lines from edge of hub (approx 50px)
                            const startX = 50 * Math.cos(rad);
                            const startY = 50 * Math.sin(rad);

                            return (
                                <g key={`line-${cat.id}`}>
                                    <line
                                        x1={startX} y1={startY}
                                        x2={targetX} y2={targetY}
                                        stroke={isSystemOn ? "#4f46e5" : "#e2e8f0"}
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                        className="transition-all duration-700 opacity-20"
                                    />
                                    {isSystemOn && (
                                        <motion.line
                                            x1={startX} y1={startY}
                                            x2={targetX} y2={targetY}
                                            stroke="#4f46e5"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </svg>

                    {/* Central Power Button */}
                    <motion.div
                        className={`z-30 p-8 rounded-full cursor-pointer transition-all duration-500 shadow-2xl relative ${isSystemOn
                            ? 'bg-indigo-600 text-white scale-110 ring-8 ring-indigo-500/20'
                            : 'bg-white dark:bg-dark-card text-gray-400'
                            }`}
                        animate={isSystemOn ? {
                            boxShadow: ["0 0 20px rgba(79, 70, 229, 0.4)", "0 0 40px rgba(79, 70, 229, 0.6)", "0 0 20px rgba(79, 70, 229, 0.4)"]
                        } : {}}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <Power className={`w-12 h-12 transition-transform duration-500 ${isSystemOn ? 'rotate-0' : '-rotate-12'}`} />
                        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 transition-opacity duration-300"
                            style={{ opacity: isSystemOn ? 1 : 0.4 }}>
                            {isSystemOn ? "System Online" : "System Offline"}
                        </div>
                    </motion.div>

                    {/* Radial Skill Nodes */}
                    {skillCategories.map((cat, index) => {
                        const rad = (cat.angle * Math.PI) / 180;
                        const x = radius * Math.cos(rad);
                        const y = radius * Math.sin(rad);

                        return (
                            <motion.div
                                key={cat.id}
                                className="absolute z-10 group"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isSystemOn ? { opacity: 1, scale: 1, x, y } : { opacity: 0.4, scale: 0.8, x: x * 0.5, y: y * 0.5 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredCategory(cat.id)}
                            >
                                <div className={`relative flex flex-col items-center justify-center p-4 rounded-full w-28 h-28 md:w-36 md:h-36 bg-white dark:bg-dark-card border-2 transition-all duration-300 cursor-help ${hoveredCategory === cat.id
                                    ? 'border-indigo-500 shadow-xl scale-110 text-indigo-600'
                                    : 'border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    <div className={`p-2 rounded-xl mb-1 transition-colors ${hoveredCategory === cat.id ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 dark:bg-gray-800'}`}>
                                        {cat.icon}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-center">{cat.title}</span>

                                    {/* Tooltip/Expand Skills */}
                                    <AnimatePresence>
                                        {(isSystemOn || hoveredCategory === cat.id) && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                                transition={{ duration: 0.3, delay: isSystemOn ? index * 0.1 : 0 }}
                                                className={`absolute top-full mt-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border w-56 z-30 transition-colors ${hoveredCategory === cat.id ? 'border-indigo-500 ring-1 ring-indigo-500/10' : 'border-indigo-100 dark:border-indigo-900/50'
                                                    }`}
                                            >
                                                <div className="flex flex-wrap gap-2">
                                                    {cat.skills.map((skill, idx) => (
                                                        <span key={idx} className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-md border border-indigo-100 dark:border-indigo-800/50">
                                                            {skill.icon && <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain bg-white rounded-sm p-0.5" />}
                                                            {skill.name}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l rotate-45 transition-colors ${hoveredCategory === cat.id ? 'border-indigo-500' : 'border-indigo-100 dark:border-indigo-900/50'
                                                    }`}></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Stacked Layout */}
                <div className="lg:hidden flex flex-col items-center gap-12">
                    <motion.div
                        className={`p-6 rounded-full shadow-lg ${isSystemOn ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-dark-card text-gray-400'}`}
                        onClick={() => setIsSystemOn(!isSystemOn)}
                    >
                        <Power className="w-10 h-10" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {skillCategories.map((cat, index) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl bg-white dark:bg-dark-card border transition-all ${isSystemOn ? 'border-indigo-500 ring-1 ring-indigo-500/10' : 'border-gray-100 dark:border-gray-800'
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-xl ${isSystemOn ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                                        {cat.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, idx) => (
                                        <span key={idx} className="flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700">
                                            {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />}
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
