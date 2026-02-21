import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: 'Tech Company Inc.',
            role: 'Senior Frontend Developer',
            period: '2022 - Present',
            achievements: [
                'Led development of new component library used across 5+ products',
                'Improved application performance by 40% through optimization',
                'Mentored junior developers and conducted code reviews',
            ],
            technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
        },
        {
            id: 2,
            company: 'Digital Agency',
            role: 'Full Stack Developer',
            period: '2020 - 2022',
            achievements: [
                'Built and deployed 15+ client websites and web applications',
                'Implemented CI/CD pipelines reducing deployment time by 60%',
                'Collaborated with design team to create seamless user experiences',
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
        },
        {
            id: 3,
            company: 'Startup Ventures',
            role: 'Junior Developer',
            period: '2018 - 2020',
            achievements: [
                'Developed features for SaaS platform with 10k+ active users',
                'Participated in agile development process and sprint planning',
                'Wrote comprehensive unit and integration tests',
            ],
            technologies: ['JavaScript', 'Vue.js', 'Python', 'PostgreSQL'],
        },
    ];

    return (
        <section id="experience" className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Work <span className="gradient-text">Experience</span>
                        </motion.h2>
                    </div>

                    {/* Timeline */}
                    <div style={{ position: 'relative' }}>
                        {/* Timeline Line (Cleaner) */}
                        <div style={{
                            position: 'absolute',
                            left: '24px',
                            top: '20px',
                            bottom: '20px',
                            width: '2px',
                            background: 'var(--color-border)',
                            borderRadius: '2px'
                        }} />

                        {/* Experience Cards */}
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                style={{
                                    position: 'relative',
                                    paddingLeft: 'var(--space-7)',
                                    marginBottom: 'var(--space-6)',
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Timeline Dot (Cleaner) */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '19px',
                                        top: '24px',
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        background: index === 0 ? 'var(--color-accent-primary)' : 'var(--color-bg-tertiary)',
                                        border: `2px solid var(--color-bg-primary)`,
                                        zIndex: 2,
                                    }}
                                />

                                {/* Experience Card */}
                                <div className="card" style={{
                                    background: 'transparent',
                                    border: 'none',
                                    padding: 0,
                                    boxShadow: 'none'
                                }}>
                                    {/* Header */}
                                    <div style={{
                                        marginBottom: 'var(--space-3)',
                                        padding: 'var(--space-4)',
                                        background: 'var(--color-bg-tertiary)',
                                        borderRadius: 'var(--border-radius)',
                                        border: '1px solid var(--color-border)'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'baseline',
                                            flexWrap: 'wrap',
                                            gap: 'var(--space-2)',
                                        }}>
                                            <h3 style={{
                                                fontSize: 'var(--text-xl)',
                                                fontWeight: 600,
                                                color: 'var(--color-text-primary)'
                                            }}>
                                                {exp.role}
                                            </h3>
                                            <span style={{
                                                fontSize: 'var(--text-sm)',
                                                fontFamily: 'var(--font-mono)',
                                                color: 'var(--color-text-tertiary)',
                                            }}>
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p style={{
                                            fontSize: 'var(--text-base)',
                                            color: 'var(--color-accent-primary)',
                                            fontWeight: 500,
                                        }}>
                                            {exp.company}
                                        </p>
                                    </div>

                                    {/* Achievements */}
                                    <ul style={{
                                        listStyle: 'none',
                                        marginBottom: 'var(--space-4)',
                                        paddingLeft: 'var(--space-2)'
                                    }}>
                                        {exp.achievements.map((achievement, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 'var(--space-2)',
                                                    marginBottom: 'var(--space-2)',
                                                    fontSize: 'var(--text-sm)',
                                                    color: 'var(--color-text-secondary)',
                                                }}
                                            >
                                                <span style={{ color: 'var(--color-accent-primary)', marginTop: '2px' }}>•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 'var(--space-2)',
                                    }}>
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="tag"
                                                style={{ fontSize: 'var(--text-xs)' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
