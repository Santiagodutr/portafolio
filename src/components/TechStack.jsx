import { motion } from 'framer-motion';
import {
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiGraphql,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiAmazon,
    SiGit,
    SiJavascript
} from 'react-icons/si';

const TechStack = () => {
    const technologies = [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' }, // White for dark mode
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ];

    // Duplicate the array to ensure seamless looping
    const duplicatedTechnologies = [...technologies, ...technologies];

    return (
        <section style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            padding: 'var(--space-4) 0',
            background: 'var(--color-bg-primary)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            minHeight: '120px'
        }}>
            {/* Gradient Masks for Fade Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: '100px',
                background: 'linear-gradient(to right, var(--color-bg-primary), transparent)',
                zIndex: 2,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                width: '100px',
                background: 'linear-gradient(to left, var(--color-bg-primary), transparent)',
                zIndex: 2,
                pointerEvents: 'none'
            }} />

            <div style={{ display: 'flex', width: '100%' }}>
                <motion.div
                    style={{
                        display: 'flex',
                        gap: 'var(--space-8)',
                        paddingLeft: 'var(--space-4)',
                        whiteSpace: 'nowrap'
                    }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25, // Adjust speed here
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedTechnologies.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-2)',
                                flexDirection: 'column',
                                minWidth: '80px'
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                color: tech.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '60px',
                                width: '60px',
                                marginBottom: 'var(--space-2)',
                                filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))'
                            }}>
                                <tech.icon />
                            </div>
                            <span style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-text-secondary)',
                                fontWeight: 500
                            }}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
