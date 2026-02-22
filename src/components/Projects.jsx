import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiSpringboot,
    SiSupabase,
    SiPostgresql,
    SiMongodb,
    SiStripe,
    SiNextdotjs,
    SiTailwindcss,
    SiVite,
    SiRadixui,
    SiZod,
    SiAstro,
    SiAdonisjs,
} from 'react-icons/si';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [galleryTheme, setGalleryTheme] = useState('dark'); // 'dark' | 'light'

    const projects = [
        {
            id: 1,
            title: 'JustiTrack',
            description: 'Sistema integral para la consulta y gestión de procesos judiciales.',
            fullDescription: 'El sistema de "Consulta de Procesos Judiciales" es una solución diseñada para facilitar el seguimiento, administración y análisis exhaustivo de procesos legales. Proporciona una plataforma centralizada donde tanto personas naturales como jurídicas y firmas de abogados pueden monitorear el progreso de sus casos, recibir alertas instantáneas sobre cualquier novedad, consultar documentos relacionados e interactuar con analíticas avanzadas, todo de manera segura y multiplataforma.',
            status: 'ESTADO DEL PROYECTO: TERMINADO',
            tags: [
                { name: 'React Native / Expo', icon: SiReact, color: '#61DAFB' },
                { name: 'React', icon: SiReact, color: '#61DAFB' },
                { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
                { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
                { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' }
            ],
            color: '#c4a962', // Luxury gold/champagne tone
            coverImage: '/justitrack/welcomepage.png',
            images: [
                '/justitrack/welcomepage.png',
                '/justitrack/welcomepage2.png',
                '/justitrack/login.png',
                '/justitrack/register.png',
                '/justitrack/profile.png',
                '/justitrack/profile2.png',
                '/justitrack/dashboard.png',
                '/justitrack/dashboard2.png',
                '/justitrack/search.png',
                '/justitrack/searchresults.png',
                '/justitrack/searchwithnumber.png',
                '/justitrack/details.png',
                '/justitrack/details2.png',
                '/justitrack/details3.png',
                '/justitrack/details4.png',
                '/justitrack/favorites.png',
                '/justitrack/reports.png',
                '/justitrack/reports2.png',
                '/justitrack/notifications.png',
                '/justitrack/aboutus.png',
                '/justitrack/aboutus2.png',
                '/justitrack/forgotpass.png',
            ],
            githubLink: 'https://github.com/Santiagodutr/Consulta-Procesos-Judiciales',
            liveLink: 'https://consulta-procesos-judiciales.vercel.app/'
        },
        // We can keep a few dummy ones or just JustiTrack if that's what's needed, but let's keep one other to show the carousel works.
        {
            id: 2,
            title: 'Sistema Contable',
            description: 'Solución moderna para la gestión contable y financiera.',
            fullDescription: 'El "Sistema de Gestión Contable" es una herramienta integral diseñada para optimizar la administración financiera. Ofrece control de cuentas, estados financieros automáticos, inventario (Kardex PEPS), nómina y análisis financiero avanzado con indicadores de liquidez y rentabilidad.',
            status: 'ESTADO DEL PROYECTO: TERMINADO',
            tags: [
                { name: 'React', icon: SiReact, color: '#61DAFB' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                { name: 'Vite', icon: SiVite, color: '#646CFF' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
                { name: 'Radix UI', icon: SiRadixui, color: '#FFFFFF' },
                { name: 'Zod', icon: SiZod, color: '#3E3355' }
            ],
            color: '#10b981', // Emerald
            coverImage: '/sistema-contable/inicio.png',
            images: [
                '/sistema-contable/inicio.png',
                '/sistema-contable/cuentas.png',
                '/sistema-contable/balance.png',
                '/sistema-contable/balance2.png',
                '/sistema-contable/resultados.png',
                '/sistema-contable/resultados1.png',
                '/sistema-contable/resultados2.png',
                '/sistema-contable/kardex.png',
                '/sistema-contable/nomina.png',
                '/sistema-contable/depre.png',
                '/sistema-contable/depre1.png',
                '/sistema-contable/depre2.png',
                '/sistema-contable/analisis.png',
                '/sistema-contable/analisiss1.png'
            ],
            githubLink: 'https://github.com/Santiagodutr/Sistema-contable-para-administracion-financiera',
            liveLink: 'https://sistema-contable-para-administracio.vercel.app/'
        },
        {
            id: 3,
            title: 'Club el Meta',
            description: 'Sistema de gestión de eventos, reservas y socios para la Corporación Club el Meta.',
            fullDescription: 'Plataforma web full-stack para la Corporación Club el Meta de Villavicencio. Permite a clientes solicitar cotizaciones para reservar espacios, mientras el personal administrativo gestiona reservas, controla pagos, administra socios y consulta reportes analíticos en tiempo real.',
            status: 'ESTADO DEL PROYECTO: TERMINADO',
            award: {
                text: '🏆 2° Lugar — Retos de Innovación',
                subtitle: 'Gobernación del Meta'
            },
            tags: [
                { name: 'Astro', icon: SiAstro, color: '#FF5D01' },
                { name: 'AdonisJS', icon: SiAdonisjs, color: '#5A45FF' },
                { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
                { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
            ],
            color: '#c9a84c', // Warm gold
            coverImage: '/club-el-meta/inicio.png',
            darkImages: [
                '/club-el-meta/inicio.png',
                '/club-el-meta/inicio1.png',
                '/club-el-meta/login.png',
                '/club-el-meta/salones.png',
                '/club-el-meta/salones1.png',
                '/club-el-meta/salones2.png',
                '/club-el-meta/versalon.png',
                '/club-el-meta/versalon1.png',
                '/club-el-meta/versalon2.png',
                '/club-el-meta/eventosDark.png',
                '/club-el-meta/eventos.png',
                '/club-el-meta/eventos1.png',
                '/club-el-meta/eventos2.png',
                '/club-el-meta/contacto.png',
                '/club-el-meta/contacto1.png',
                '/club-el-meta/contacto2.png',
                '/club-el-meta/cotizacion.png',
                '/club-el-meta/cotizacion1.png',
                '/club-el-meta/cotizacion2.png',
                '/club-el-meta/cotzacion3.png',
                '/club-el-meta/cotizacion4.png',
                '/club-el-meta/espaciosDark.png',
                '/club-el-meta/reservasDark.png',
                '/club-el-meta/reservas1Dark.png',
                '/club-el-meta/sociosDark.png',
                '/club-el-meta/empresaDark.png',
                '/club-el-meta/serviceDark.png',
                '/club-el-meta/editespacioDark.png',
                '/club-el-meta/reportesDark.png'
            ],
            lightImages: [
                '/club-el-meta/inicio.png',
                '/club-el-meta/inicio1.png',
                '/club-el-meta/login.png',
                '/club-el-meta/salones.png',
                '/club-el-meta/salones1.png',
                '/club-el-meta/salones2.png',
                '/club-el-meta/versalon.png',
                '/club-el-meta/versalon1.png',
                '/club-el-meta/versalon2.png',
                '/club-el-meta/eventosLight.png',
                '/club-el-meta/eventos.png',
                '/club-el-meta/eventos1.png',
                '/club-el-meta/eventos2.png',
                '/club-el-meta/contacto.png',
                '/club-el-meta/contacto1.png',
                '/club-el-meta/contacto2.png',
                '/club-el-meta/cotizacion.png',
                '/club-el-meta/cotizacion1.png',
                '/club-el-meta/cotizacion2.png',
                '/club-el-meta/cotzacion3.png',
                '/club-el-meta/cotizacion4.png',
                '/club-el-meta/espaciosLight.png',
                '/club-el-meta/reservasLight.png',
                '/club-el-meta/reservas1Light.png',
                '/club-el-meta/sociosLight.png',
                '/club-el-meta/empresaLight.png',
                '/club-el-meta/serviceLight.png',
                '/club-el-meta/editespacioLight.png',
                '/club-el-meta/reportesLight.png'
            ],
            githubLink: 'https://github.com/Santiagodutr/Club-Management-System'
        }
    ];

    const openModal = (index) => {
        setActiveIndex(index);
        setIsModalOpen(true);
        setActiveImageIndex(0);
        setGalleryTheme('dark'); // reset theme on modal open
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsFullscreen(false);
    };

    // Handle body scroll lock
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;

            if (e.key === 'Escape') {
                if (isFullscreen) {
                    setIsFullscreen(false);
                } else {
                    closeModal();
                }
            } else if (e.key === 'ArrowRight') {
                setActiveImageIndex((prev) => {
                    const proj = projects[activeIndex];
                    const imgs = proj.darkImages ? (galleryTheme === 'dark' ? proj.darkImages : proj.lightImages) : proj.images;
                    return imgs ? (prev + 1) % imgs.length : prev;
                });
            } else if (e.key === 'ArrowLeft') {
                setActiveImageIndex((prev) => {
                    const proj = projects[activeIndex];
                    const imgs = proj.darkImages ? (galleryTheme === 'dark' ? proj.darkImages : proj.lightImages) : proj.images;
                    return imgs ? (prev - 1 + imgs.length) % imgs.length : prev;
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, isFullscreen, activeIndex, projects, galleryTheme]);

    const activeProject = projects[activeIndex];

    return (
        <section id="projects" className="section" style={{
            background: 'var(--color-bg-secondary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Featured <span className="gradient-text">Projects</span>
                        </motion.h2>
                        <p style={{ marginTop: 'var(--space-2)', color: 'var(--color-text-secondary)' }}>
                            Explore my most recent and impactful work
                        </p>
                    </div>

                    {/* Grid Container */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: 'var(--space-6)',
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-4)',
                                    background: 'rgba(30, 41, 59, 0.3)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    padding: 'var(--space-5)',
                                    borderRadius: 'var(--border-radius-lg)',
                                    overflow: 'hidden',
                                    boxShadow: 'none' // Remove default glow, keep clean
                                }}
                            >
                                {/* Image Placeholder or Cover Image */}
                                <div style={{
                                    aspectRatio: '16/9',
                                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                                    borderRadius: 'var(--border-radius)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `1px solid ${project.color}30`,
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    {project.coverImage ? (
                                        <img
                                            src={project.coverImage}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    ) : (
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={project.color}>
                                            <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
                                            <path d="M8 21h8M12 17v4" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <h3 style={{
                                        fontSize: 'var(--text-2xl)',
                                        marginBottom: 'var(--space-1)',
                                        color: 'var(--color-text-primary)'
                                    }}>
                                        {project.title}
                                    </h3>

                                    {/* Award Badge on Card */}
                                    {project.award && (
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            marginBottom: 'var(--space-3)',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                                            border: `1px solid ${project.color}30`,
                                            width: 'fit-content'
                                        }}>
                                            <span style={{ fontSize: 'var(--text-xs)', color: project.color, fontWeight: 600 }}>
                                                {project.award.text}
                                            </span>
                                        </div>
                                    )}

                                    <p style={{
                                        marginBottom: 'var(--space-4)',
                                        color: 'var(--color-text-secondary)',
                                        fontSize: 'var(--text-base)',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px',
                                        marginBottom: 'var(--space-5)'
                                    }}>
                                        {project.tags.slice(0, 4).map((tech, i) => (
                                            <div key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px',
                                                padding: '4px 10px',
                                                borderRadius: '20px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.06)'
                                            }}>
                                                <div style={{ color: tech.color, display: 'flex', fontSize: '1rem' }}>
                                                    <tech.icon />
                                                </div>
                                                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '4px 10px',
                                                borderRadius: '20px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.06)'
                                            }}>
                                                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                                                    +{project.tags.length - 4}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {project.fullDescription ? (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'auto' }}>
                                            <button onClick={() => openModal(index)} className="btn btn-primary" style={{ background: project.color, borderColor: project.color, color: '#000', flex: 1, padding: '0.5rem 1rem' }}>
                                                Ver más
                                            </button>
                                            {project.liveLink && (
                                                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flex: 1, padding: '0.5rem 1rem' }}>
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                    App
                                                </a>
                                            )}
                                        </div>
                                    ) : (
                                        <button className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '0.5rem 1rem' }}>
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Gallery Modal Overlay */}
            <AnimatePresence>
                {isModalOpen && (activeProject.images || activeProject.darkImages) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(15, 23, 42, 0.85)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 'var(--space-4)'
                        }}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{
                                width: '100%',
                                maxWidth: '1200px',
                                maxHeight: '90vh',
                                background: 'var(--color-bg-primary)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{
                                padding: 'var(--space-4) var(--space-6)',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h2 style={{ fontSize: 'var(--text-2xl)', margin: 0 }}>{activeProject.title} Overview</h2>
                                <button
                                    onClick={closeModal}
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: 'none',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-text-primary)',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Body: Two Columns */}
                            <div style={{
                                display: 'flex',
                                flex: 1,
                                overflow: 'hidden',
                                flexDirection: window.innerWidth < 768 ? 'column' : 'row' // simple responsive fallback
                            }}>
                                {/* Left Column: Gallery */}
                                <div style={{
                                    flex: '1.5',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 'var(--space-6)',
                                    background: 'rgba(0,0,0,0.2)',
                                    overflow: 'hidden'
                                }}>
                                    {/* Dual-Theme Gallery Toggle */}
                                    {activeProject.darkImages && (
                                        <div style={{
                                            display: 'flex',
                                            gap: '8px',
                                            marginBottom: 'var(--space-4)',
                                            padding: '4px',
                                            background: 'rgba(255,255,255,0.04)',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            width: 'fit-content'
                                        }}>
                                            {['dark', 'light'].map((theme) => (
                                                <button
                                                    key={theme}
                                                    onClick={() => { setGalleryTheme(theme); setActiveImageIndex(0); }}
                                                    style={{
                                                        padding: '6px 18px',
                                                        borderRadius: '8px',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        fontSize: 'var(--text-sm)',
                                                        fontWeight: 600,
                                                        letterSpacing: '0.04em',
                                                        textTransform: 'uppercase',
                                                        transition: 'all 0.2s ease',
                                                        background: galleryTheme === theme
                                                            ? `linear-gradient(135deg, ${activeProject.color}cc, ${activeProject.color}88)`
                                                            : 'transparent',
                                                        color: galleryTheme === theme ? '#000' : 'var(--color-text-secondary)',
                                                        boxShadow: galleryTheme === theme ? `0 2px 12px ${activeProject.color}40` : 'none'
                                                    }}
                                                >
                                                    {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {(() => {
                                        const imgs = activeProject.darkImages
                                            ? (galleryTheme === 'dark' ? activeProject.darkImages : activeProject.lightImages)
                                            : activeProject.images;
                                        return (
                                            <>
                                                {/* Main Image Viewer */}
                                                <div
                                                    onClick={() => setIsFullscreen(true)}
                                                    style={{
                                                        flex: 1,
                                                        borderRadius: '16px',
                                                        overflow: 'hidden',
                                                        marginBottom: 'var(--space-4)',
                                                        background: '#000',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        position: 'relative',
                                                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
                                                        cursor: 'zoom-in'
                                                    }}
                                                    title="Click to view fullscreen"
                                                >
                                                    <AnimatePresence mode="wait">
                                                        <motion.img
                                                            key={`${galleryTheme}-${activeImageIndex}`}
                                                            src={imgs[activeImageIndex]}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                            alt={`Screenshot ${activeImageIndex + 1}`}
                                                        />
                                                    </AnimatePresence>
                                                    <div style={{
                                                        position: 'absolute',
                                                        bottom: '16px',
                                                        right: '16px',
                                                        background: 'rgba(0,0,0,0.6)',
                                                        padding: '4px 12px',
                                                        borderRadius: '20px',
                                                        fontSize: 'var(--text-sm)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}>
                                                        <span>{activeImageIndex + 1} / {imgs.length}</span>
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="15 3 21 3 21 9"></polyline>
                                                            <polyline points="9 21 3 21 3 15"></polyline>
                                                            <line x1="21" y1="3" x2="14" y2="10"></line>
                                                            <line x1="3" y1="21" x2="10" y2="14"></line>
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Thumbnail Strip */}
                                                <div style={{
                                                    height: '80px',
                                                    display: 'flex',
                                                    gap: '12px',
                                                    overflowX: 'auto',
                                                    paddingBottom: '8px',
                                                    scrollbarWidth: 'thin',
                                                    scrollbarColor: 'var(--color-border) transparent'
                                                }}>
                                                    {imgs.map((img, idx) => (
                                                        <button
                                                            key={`${galleryTheme}-${idx}`}
                                                            onClick={() => setActiveImageIndex(idx)}
                                                            style={{
                                                                minWidth: '120px',
                                                                height: '100%',
                                                                borderRadius: '8px',
                                                                border: idx === activeImageIndex ? `2px solid ${activeProject.color}` : '2px solid transparent',
                                                                padding: 0,
                                                                overflow: 'hidden',
                                                                cursor: 'pointer',
                                                                opacity: idx === activeImageIndex ? 1 : 0.6,
                                                                transition: 'all 0.2s ease',
                                                                background: '#000'
                                                            }}
                                                            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                                            onMouseOut={(e) => { if (idx !== activeImageIndex) e.currentTarget.style.opacity = '0.6'; }}
                                                        >
                                                            <img src={img} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </button>
                                                    ))}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>

                                {/* Right Column: Details */}
                                <div style={{
                                    flex: '1',
                                    padding: 'var(--space-6)',
                                    overflowY: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-5)',
                                    scrollbarWidth: 'thin'
                                }}>
                                    <div>
                                        <h3 style={{ color: activeProject.color, marginBottom: 'var(--space-2)', fontSize: 'var(--text-xl)' }}>About the Project</h3>
                                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                            {activeProject.fullDescription}
                                        </p>
                                    </div>

                                    {/* Award Badge in modal */}
                                    {activeProject.award && (
                                        <div style={{
                                            padding: '16px',
                                            borderRadius: '12px',
                                            background: `linear-gradient(135deg, ${activeProject.color}18, ${activeProject.color}08)`,
                                            border: `1px solid ${activeProject.color}40`,
                                            boxShadow: `0 0 20px ${activeProject.color}15`
                                        }}>
                                            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: activeProject.color, marginBottom: '4px' }}>
                                                {activeProject.award.text}
                                            </div>
                                            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                                {activeProject.award.subtitle}
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '16px', fontSize: 'var(--text-lg)' }}>Status</h3>
                                        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '8px', borderLeft: `3px solid ${activeProject.color}` }}>
                                            {activeProject.status}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '16px', fontSize: 'var(--text-lg)' }}>Technologies Used</h3>

                                        {/* Technology Carousel */}
                                        <div style={{
                                            overflow: 'hidden',
                                            padding: 'var(--space-2) 0',
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            position: 'relative'
                                        }}>
                                            {/* Gradient Masks */}
                                            <div style={{
                                                position: 'absolute', top: 0, bottom: 0, left: 0, width: '40px',
                                                background: 'linear-gradient(to right, rgb(30, 41, 59), transparent)',
                                                zIndex: 2, pointerEvents: 'none'
                                            }} />
                                            <div style={{
                                                position: 'absolute', top: 0, bottom: 0, right: 0, width: '40px',
                                                background: 'linear-gradient(to left, rgb(30, 41, 59), transparent)',
                                                zIndex: 2, pointerEvents: 'none'
                                            }} />

                                            <div style={{ display: 'flex', width: '100%' }}>
                                                <motion.div
                                                    style={{
                                                        display: 'flex',
                                                        gap: 'var(--space-6)',
                                                        paddingLeft: 'var(--space-4)',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                    animate={{ x: ["0%", "-50%"] }}
                                                    transition={{
                                                        x: {
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            duration: 15, // Medium speed
                                                            ease: "linear",
                                                        },
                                                    }}
                                                >
                                                    {[...activeProject.tags, ...activeProject.tags].map((tech, index) => (
                                                        <div
                                                            key={`${tech.name}-${index}`}
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '8px',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                padding: '8px 16px',
                                                                borderRadius: '20px',
                                                                border: '1px solid rgba(255,255,255,0.1)'
                                                            }}
                                                        >
                                                            <div style={{ color: tech.color, display: 'flex', fontSize: '1.2rem' }}>
                                                                <tech.icon />
                                                            </div>
                                                            <span style={{ fontSize: 'var(--text-sm)', color: '#fff' }}>
                                                                {tech.name}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: 'auto', paddingTop: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                        {activeProject.liveLink && (
                                            <a
                                                href={activeProject.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-primary"
                                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', width: '100%', background: activeProject.color, borderColor: activeProject.color, color: '#000' }}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                View Live App
                                            </a>
                                        )}
                                        {activeProject.githubLink && (
                                            <a
                                                href={activeProject.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-outline"
                                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', width: '100%' }}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                                View Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fullscreen Image Overlay */}
            <AnimatePresence>
                {isFullscreen && isModalOpen && activeProject.images && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0, 0, 0, 0.95)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={() => setIsFullscreen(false)}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsFullscreen(false);
                            }}
                            style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                cursor: 'pointer',
                                zIndex: 2010,
                                transition: 'background 0.2s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
                            }}
                            style={{
                                position: 'absolute',
                                left: '24px',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                cursor: 'pointer',
                                zIndex: 2010,
                                transition: 'background 0.2s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length);
                            }}
                            style={{
                                position: 'absolute',
                                right: '24px',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                cursor: 'pointer',
                                zIndex: 2010,
                                transition: 'background 0.2s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`full-${activeImageIndex}`}
                                src={activeProject.images[activeImageIndex]}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                style={{
                                    maxWidth: '90vw',
                                    maxHeight: '90vh',
                                    objectFit: 'contain',
                                    borderRadius: '8px'
                                }}
                                alt={`Fullscreen Screenshot ${activeImageIndex + 1}`}
                            />
                        </AnimatePresence>

                        <div style={{
                            position: 'absolute',
                            bottom: '24px',
                            background: 'rgba(0,0,0,0.6)',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            color: '#fff',
                            fontSize: 'var(--text-md)'
                        }}>
                            {activeImageIndex + 1} / {activeProject.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
