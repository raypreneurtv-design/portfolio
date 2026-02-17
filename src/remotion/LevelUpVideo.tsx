import React from 'react';
import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
    spring,
    Sequence,
    Easing,
    random,
} from 'remotion';

// Color scheme matching the website
const colors = {
    primary: '#00a8ff',
    secondary: '#6366f1',
    accent: '#f59e0b',
    green: '#10b981',
    background: '#000000',
    backgroundAlt: '#000810',
    text: '#ffffff',
    textMuted: 'rgba(255, 255, 255, 0.5)',
};

// Floating particles component
const FloatingParticles: React.FC<{ count?: number; seed?: string }> = ({ count = 30, seed = 'particles' }) => {
    const frame = useCurrentFrame();

    const particles = React.useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            x: random(`${seed}-x-${i}`) * 100,
            y: random(`${seed}-y-${i}`) * 100,
            size: random(`${seed}-size-${i}`) * 4 + 2,
            speed: random(`${seed}-speed-${i}`) * 0.5 + 0.2,
            opacity: random(`${seed}-opacity-${i}`) * 0.3 + 0.1,
            color: random(`${seed}-color-${i}`) > 0.5 ? colors.primary : colors.secondary,
        }));
    }, [count, seed]);

    return (
        <>
            {particles.map((particle, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${particle.x}%`,
                        top: `${(particle.y + frame * particle.speed * 0.1) % 120 - 10}%`,
                        width: particle.size,
                        height: particle.size,
                        borderRadius: '50%',
                        background: particle.color,
                        opacity: particle.opacity,
                        filter: 'blur(1px)',
                    }}
                />
            ))}
        </>
    );
};

// Animated circuit lines
const CircuitLines: React.FC = () => {
    const frame = useCurrentFrame();

    const lines = [
        { x1: 0, y1: 200, x2: 300, y2: 200, delay: 0 },
        { x1: 300, y1: 200, x2: 300, y2: 400, delay: 15 },
        { x1: 300, y1: 400, x2: 600, y2: 400, delay: 30 },
        { x1: 1620, y1: 300, x2: 1920, y2: 300, delay: 10 },
        { x1: 1620, y1: 300, x2: 1620, y2: 600, delay: 25 },
        { x1: 1400, y1: 600, x2: 1620, y2: 600, delay: 40 },
    ];

    return (
        <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            viewBox="0 0 1920 1080"
        >
            <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={colors.primary} stopOpacity="0" />
                    <stop offset="50%" stopColor={colors.primary} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={colors.secondary} stopOpacity="0" />
                </linearGradient>
            </defs>
            {lines.map((line, i) => {
                const progress = interpolate(frame - line.delay, [0, 40], [0, 1], {
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',
                    easing: Easing.out(Easing.cubic),
                });
                const length = Math.sqrt(Math.pow(line.x2 - line.x1, 2) + Math.pow(line.y2 - line.y1, 2));

                return (
                    <line
                        key={i}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x1 + (line.x2 - line.x1) * progress}
                        y2={line.y1 + (line.y2 - line.y1) * progress}
                        stroke="url(#lineGradient)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        opacity={0.3}
                    />
                );
            })}
        </svg>
    );
};

// Animated background with gradient orbs
const AnimatedBackground: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill style={{ background: colors.background }}>
            {/* Gradient overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 50%, ${colors.background} 100%)`,
                }}
            />

            {/* Animated glow orbs */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '-15%',
                    width: 800,
                    height: 800,
                    background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
                    opacity: 0.1,
                    filter: 'blur(100px)',
                    transform: `translate(${Math.sin(frame / 60) * 50}px, ${Math.cos(frame / 40) * 30}px)`,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-15%',
                    width: 800,
                    height: 800,
                    background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
                    opacity: 0.1,
                    filter: 'blur(100px)',
                    transform: `translate(${Math.cos(frame / 50) * 50}px, ${Math.sin(frame / 35) * 30}px)`,
                }}
            />

            {/* Center glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 600,
                    height: 600,
                    background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
                    opacity: 0.05 + Math.sin(frame / 30) * 0.02,
                    filter: 'blur(80px)',
                    transform: 'translate(-50%, -50%)',
                }}
            />

            {/* Grid pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    opacity: interpolate(frame, [0, 30], [0, 0.8], { extrapolateRight: 'clamp' }),
                }}
            />

            {/* Floating particles */}
            <FloatingParticles count={40} seed="bg-particles" />

            {/* Circuit lines */}
            <CircuitLines />
        </AbsoluteFill>
    );
};

// Glowing text component
const GlowText: React.FC<{ children: React.ReactNode; color?: string; size?: number; weight?: number }> = ({
    children,
    color = colors.primary,
    size = 48,
    weight = 700,
}) => {
    return (
        <span
            style={{
                fontSize: size,
                fontWeight: weight,
                background: `linear-gradient(135deg, ${color}, ${colors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 20px ${color}40)`,
            }}
        >
            {children}
        </span>
    );
};

// Intro scene with "FREE RESOURCES" badge and main title
const IntroScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const badgeScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
    const titleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    const titleY = interpolate(frame, [15, 35], [60, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.back(1.5)) });
    const subtitleOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    const subtitleY = interpolate(frame, [35, 55], [30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

    // Shimmer effect on badge
    const shimmerX = interpolate(frame, [20, 80], [-100, 200], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                {/* FREE RESOURCES Badge */}
                <div
                    style={{
                        display: 'inline-block',
                        padding: '12px 32px',
                        borderRadius: 50,
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        marginBottom: 40,
                        transform: `scale(${badgeScale})`,
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: `0 0 40px ${colors.primary}40`,
                    }}
                >
                    {/* Shimmer effect */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: `${shimmerX}%`,
                            width: '50%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            transform: 'skewX(-20deg)',
                        }}
                    />
                    <span
                        style={{
                            color: colors.text,
                            fontSize: 20,
                            fontWeight: 'bold',
                            letterSpacing: 3,
                            position: 'relative',
                        }}
                    >
                        FREE RESOURCES
                    </span>
                </div>

                {/* Main Title */}
                <h1
                    style={{
                        fontSize: 100,
                        fontWeight: 300,
                        color: colors.text,
                        margin: 0,
                        opacity: titleOpacity,
                        transform: `translateY(${titleY}px)`,
                        lineHeight: 1.1,
                    }}
                >
                    Level Up{' '}
                    <GlowText size={100} weight={700}>For Free</GlowText>
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontSize: 32,
                        color: colors.textMuted,
                        maxWidth: 800,
                        margin: '40px auto 0',
                        opacity: subtitleOpacity,
                        transform: `translateY(${subtitleY}px)`,
                        lineHeight: 1.5,
                    }}
                >
                    Join our community and master AI automation workflows
                </p>

                {/* Animated underline */}
                <div
                    style={{
                        width: interpolate(frame, [50, 80], [0, 200], { extrapolateRight: 'clamp' }),
                        height: 3,
                        background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                        margin: '30px auto 0',
                        borderRadius: 2,
                        boxShadow: `0 0 20px ${colors.primary}`,
                    }}
                />
            </div>
        </AbsoluteFill>
    );
};

// Workflow node component
const WorkflowNode: React.FC<{
    x: number;
    y: number;
    label: string;
    icon: string;
    color: string;
    delay: number;
    isActive: boolean;
}> = ({ x, y, label, icon, color, delay, isActive }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const nodeScale = spring({
        frame: frame - delay,
        fps,
        config: { damping: 10, stiffness: 80 },
    });

    const pulseOpacity = isActive ? interpolate(Math.sin((frame + delay) / 12), [-1, 1], [0.4, 1]) : 0.5;
    const glowIntensity = isActive ? 30 : 15;

    return (
        <g transform={`translate(${x}, ${y}) scale(${Math.max(0, nodeScale)})`}>
            {/* Outer glow */}
            <circle r={60} fill={color} opacity={pulseOpacity * 0.2} filter="url(#nodeBlur)" />

            {/* Background ring */}
            <circle
                r={55}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeDasharray={isActive ? 'none' : '8 4'}
                opacity={0.5}
            />

            {/* Node background */}
            <rect
                x={-50}
                y={-50}
                width={100}
                height={100}
                rx={24}
                fill="rgba(0,0,0,0.8)"
                stroke={color}
                strokeWidth={2}
                style={{ filter: `drop-shadow(0 0 ${glowIntensity}px ${color}60)` }}
            />

            {/* Inner gradient */}
            <rect
                x={-48}
                y={-48}
                width={96}
                height={96}
                rx={22}
                fill={`url(#nodeGradient-${label})`}
                opacity={0.1}
            />

            {/* Icon */}
            <text x={0} y={8} textAnchor="middle" fontSize={40}>
                {icon}
            </text>

            {/* Label */}
            <text x={0} y={80} textAnchor="middle" fill={colors.text} fontSize={18} fontWeight={600}>
                {label}
            </text>

            {/* Active indicator */}
            {isActive && (
                <circle
                    cx={40}
                    cy={-40}
                    r={8}
                    fill={colors.green}
                    style={{ filter: `drop-shadow(0 0 10px ${colors.green})` }}
                />
            )}
        </g>
    );
};

// Workflow animation scene showing connected nodes
const WorkflowScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const nodes = [
        { x: 250, y: 350, label: 'Trigger', icon: '⚡', color: colors.primary, delay: 0 },
        { x: 580, y: 200, label: 'AI Agent', icon: '🤖', color: colors.secondary, delay: 12 },
        { x: 580, y: 500, label: 'Database', icon: '💾', color: colors.accent, delay: 18 },
        { x: 910, y: 350, label: 'Process', icon: '⚙️', color: '#8b5cf6', delay: 24 },
        { x: 1240, y: 200, label: 'Notify', icon: '🔔', color: '#ec4899', delay: 30 },
        { x: 1240, y: 500, label: 'Output', icon: '📤', color: colors.green, delay: 36 },
    ];

    const connections = [
        { from: 0, to: 1, delay: 40 },
        { from: 0, to: 2, delay: 45 },
        { from: 1, to: 3, delay: 55 },
        { from: 2, to: 3, delay: 60 },
        { from: 3, to: 4, delay: 70 },
        { from: 3, to: 5, delay: 75 },
    ];

    const titleOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
    const titleY = interpolate(frame, [0, 25], [40, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });

    // Determine which node is currently "active" based on frame
    const activeNodeIndex = Math.floor((frame - 80) / 20) % nodes.length;

    return (
        <AbsoluteFill style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: 60 }}>
            <div style={{ textAlign: 'center', marginBottom: 40, opacity: titleOpacity, transform: `translateY(${titleY}px)` }}>
                <h2 style={{ fontSize: 56, fontWeight: 600, color: colors.text, margin: 0 }}>
                    Build Powerful <GlowText size={56}>AI Workflows</GlowText>
                </h2>
                <p style={{ fontSize: 24, color: colors.textMuted, marginTop: 16 }}>
                    Automate any process with visual workflow builders
                </p>
            </div>

            <svg width={1500} height={650} style={{ overflow: 'visible' }}>
                <defs>
                    {/* Blur filter for glow */}
                    <filter id="nodeBlur">
                        <feGaussianBlur stdDeviation="20" />
                    </filter>

                    {/* Gradients for each node */}
                    {nodes.map((node, i) => (
                        <linearGradient key={i} id={`nodeGradient-${node.label}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={node.color} />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    ))}

                    {/* Connection gradient */}
                    <linearGradient id="connGradient">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>

                    {/* Animated dash */}
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill={colors.primary} />
                    </marker>
                </defs>

                {/* Connection lines with data flow animation */}
                {connections.map((conn, i) => {
                    const fromNode = nodes[conn.from];
                    const toNode = nodes[conn.to];
                    const progress = interpolate(frame - conn.delay, [0, 30], [0, 1], {
                        extrapolateLeft: 'clamp',
                        extrapolateRight: 'clamp',
                        easing: Easing.out(Easing.cubic),
                    });

                    // Calculate control points for curved lines
                    const midX = (fromNode.x + toNode.x) / 2;
                    const midY = (fromNode.y + toNode.y) / 2;

                    return (
                        <g key={i}>
                            {/* Main connection line */}
                            <path
                                d={`M ${fromNode.x} ${fromNode.y} Q ${midX} ${midY} ${fromNode.x + (toNode.x - fromNode.x) * progress} ${fromNode.y + (toNode.y - fromNode.y) * progress}`}
                                fill="none"
                                stroke="url(#connGradient)"
                                strokeWidth={3}
                                strokeLinecap="round"
                                opacity={0.8}
                            />

                            {/* Data packet animation */}
                            {progress === 1 && (
                                <circle
                                    cx={fromNode.x + (toNode.x - fromNode.x) * ((frame - conn.delay - 30) % 60) / 60}
                                    cy={fromNode.y + (toNode.y - fromNode.y) * ((frame - conn.delay - 30) % 60) / 60}
                                    r={6}
                                    fill={colors.primary}
                                    style={{ filter: `drop-shadow(0 0 8px ${colors.primary})` }}
                                />
                            )}
                        </g>
                    );
                })}

                {/* Workflow nodes */}
                {nodes.map((node, i) => (
                    <WorkflowNode
                        key={i}
                        {...node}
                        isActive={frame > 80 && i === activeNodeIndex}
                    />
                ))}
            </svg>
        </AbsoluteFill>
    );
};

// Resource card component
const ResourceCard: React.FC<{
    title: string;
    description: string;
    tag: string;
    icon: string;
    color: string;
    delay: number;
    index: number;
}> = ({ title, description, tag, icon, color, delay, index }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const cardScale = spring({
        frame: frame - delay,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const hoverOffset = Math.sin((frame + index * 25) / 25) * 6;
    const glowPulse = Math.sin((frame + index * 15) / 20) * 0.3 + 0.7;

    return (
        <div
            style={{
                width: 320,
                padding: 32,
                borderRadius: 28,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                transform: `scale(${Math.max(0, cardScale)}) translateY(${hoverOffset}px)`,
                opacity: Math.max(0, cardScale),
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Gradient border glow */}
            <div
                style={{
                    position: 'absolute',
                    inset: -1,
                    borderRadius: 28,
                    background: color,
                    opacity: glowPulse * 0.15,
                    filter: 'blur(20px)',
                }}
            />

            {/* Content */}
            <div style={{ position: 'relative' }}>
                {/* Tag */}
                <div
                    style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        borderRadius: 8,
                        background: color,
                        marginBottom: 24,
                        boxShadow: `0 0 20px ${color.replace('linear-gradient', '')}40`,
                    }}
                >
                    <span style={{ color: colors.text, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
                        {tag}
                    </span>
                </div>

                {/* Icon */}
                <div style={{ fontSize: 56, marginBottom: 24, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>
                    {icon}
                </div>

                {/* Title */}
                <h3
                    style={{
                        fontSize: 26,
                        fontWeight: 700,
                        color: colors.text,
                        marginBottom: 16,
                        lineHeight: 1.3,
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: 16, color: colors.textMuted, lineHeight: 1.6, margin: 0 }}>
                    {description}
                </p>

                {/* Download indicator */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginTop: 24,
                        color: colors.primary,
                        fontSize: 14,
                        fontWeight: 600,
                    }}
                >
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Download Free</span>
                </div>
            </div>
        </div>
    );
};

// Resource cards scene
const ResourcesScene: React.FC = () => {
    const frame = useCurrentFrame();

    const resources = [
        {
            title: 'AI Automation Starter Kit',
            description: 'Complete guide to building your first AI workflow with templates',
            tag: 'FREE GUIDE',
            icon: '📚',
            color: `linear-gradient(135deg, ${colors.primary}, #0077cc)`,
        },
        {
            title: 'n8n Workflow Templates',
            description: 'Pre-built automations for lead gen, support & data processing',
            tag: 'TEMPLATES',
            icon: '⚙️',
            color: `linear-gradient(135deg, ${colors.secondary}, #4f46e5)`,
        },
        {
            title: 'AI Voice Agent Scripts',
            description: 'Phone scripts for AI receptionists & customer support',
            tag: 'SCRIPTS',
            icon: '📞',
            color: `linear-gradient(135deg, ${colors.accent}, #d97706)`,
        },
    ];

    const titleOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
    const titleY = interpolate(frame, [0, 25], [40, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 80 }}>
            <div style={{ textAlign: 'center', marginBottom: 60, opacity: titleOpacity, transform: `translateY(${titleY}px)` }}>
                <h2 style={{ fontSize: 56, fontWeight: 600, color: colors.text, margin: 0 }}>
                    Get <GlowText size={56}>Instant Access</GlowText>
                </h2>
                <p style={{ fontSize: 24, color: colors.textMuted, marginTop: 16 }}>
                    Everything you need to start automating today
                </p>
            </div>

            <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
                {resources.map((resource, i) => (
                    <ResourceCard
                        key={i}
                        {...resource}
                        delay={i * 15 + 25}
                        index={i}
                    />
                ))}
            </div>
        </AbsoluteFill>
    );
};

// Community perks scene
const CommunityScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const perks = [
        { icon: '🎓', text: 'Weekly live workshops & Q&A', color: colors.primary },
        { icon: '🤝', text: 'Network with 500+ AI builders', color: colors.secondary },
        { icon: '🔧', text: 'Early access to new tools', color: colors.accent },
        { icon: '💬', text: 'Direct help from the team', color: colors.green },
    ];

    const titleOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
    const titleY = interpolate(frame, [0, 25], [40, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });

    // Counter animation for member count
    const memberCount = Math.floor(interpolate(frame, [40, 80], [0, 547], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }));

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 1100 }}>
                <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)` }}>
                    <h2 style={{ fontSize: 60, fontWeight: 700, color: colors.text, marginBottom: 20, lineHeight: 1.2 }}>
                        Join <GlowText size={60}>{memberCount}+ AI Builders</GlowText>
                    </h2>
                    <p style={{ fontSize: 26, color: colors.textMuted, marginBottom: 60 }}>
                        Get instant access to all resources and direct support from our team
                    </p>
                </div>

                {/* Perks grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 28,
                        maxWidth: 900,
                        margin: '0 auto 60px',
                    }}
                >
                    {perks.map((perk, i) => {
                        const perkScale = spring({
                            frame: frame - i * 10 - 35,
                            fps,
                            config: { damping: 12, stiffness: 100 },
                        });

                        const glowPulse = Math.sin((frame + i * 20) / 25) * 0.2 + 0.8;

                        return (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 20,
                                    padding: '24px 32px',
                                    borderRadius: 20,
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transform: `scale(${Math.max(0, perkScale)})`,
                                    opacity: Math.max(0, perkScale),
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Subtle glow */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        width: 100,
                                        height: '100%',
                                        background: `linear-gradient(90deg, ${perk.color}20, transparent)`,
                                        opacity: glowPulse,
                                    }}
                                />
                                <span style={{ fontSize: 40, position: 'relative' }}>{perk.icon}</span>
                                <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.9)', fontWeight: 600, position: 'relative' }}>
                                    {perk.text}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Member avatars */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 16,
                        opacity: interpolate(frame, [70, 90], [0, 1], { extrapolateRight: 'clamp' }),
                    }}
                >
                    <div style={{ display: 'flex' }}>
                        {['A', 'B', 'C', 'D', 'E', 'F'].map((letter, i) => {
                            const avatarScale = spring({
                                frame: frame - i * 4 - 75,
                                fps,
                                config: { damping: 12, stiffness: 100 },
                            });

                            return (
                                <div
                                    key={i}
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                                        border: `4px solid ${colors.background}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginLeft: i > 0 ? -16 : 0,
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: colors.text,
                                        transform: `scale(${Math.max(0, avatarScale)})`,
                                        boxShadow: `0 0 15px ${colors.primary}40`,
                                    }}
                                >
                                    {letter}
                                </div>
                            );
                        })}
                    </div>
                    <span style={{ fontSize: 20, color: colors.textMuted, marginLeft: 12 }}>
                        and hundreds more...
                    </span>
                </div>
            </div>
        </AbsoluteFill>
    );
};

// Call to action scene
const CTAScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
    const discordScale = spring({ frame: frame - 35, fps, config: { damping: 10, stiffness: 100 } });
    const skoolScale = spring({ frame: frame - 45, fps, config: { damping: 10, stiffness: 100 } });

    const pulseScale = 1 + Math.sin(frame / 12) * 0.015;

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            {/* Animated gradient background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 100,
                    borderRadius: 50,
                    background: `linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}30)`,
                    opacity: interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' }),
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            />

            {/* Radial glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 800,
                    height: 800,
                    background: `radial-gradient(circle, ${colors.primary}20, transparent 70%)`,
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.5 + Math.sin(frame / 30) * 0.2,
                }}
            />

            <div style={{ textAlign: 'center', transform: `scale(${scale})`, position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: 72, fontWeight: 700, color: colors.text, marginBottom: 24, lineHeight: 1.2 }}>
                    Start Learning <GlowText size={72}>Today</GlowText>
                </h2>

                <p style={{ fontSize: 28, color: colors.textMuted, marginBottom: 60, maxWidth: 700 }}>
                    Transform your business with AI automation - completely free
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: 28, justifyContent: 'center' }}>
                    {/* Discord button */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            padding: '24px 48px',
                            borderRadius: 20,
                            background: '#5865F2',
                            transform: `scale(${Math.max(0, discordScale) * pulseScale})`,
                            opacity: Math.max(0, discordScale),
                            boxShadow: '0 0 40px #5865F260',
                        }}
                    >
                        <svg width={32} height={32} viewBox="0 0 24 24" fill="white">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                        <span style={{ color: colors.text, fontSize: 24, fontWeight: 700 }}>
                            Join Discord
                        </span>
                    </div>

                    {/* Skool button */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            padding: '24px 48px',
                            borderRadius: 20,
                            background: 'rgba(255,255,255,0.1)',
                            border: '2px solid rgba(255,255,255,0.2)',
                            transform: `scale(${Math.max(0, skoolScale) * pulseScale})`,
                            opacity: Math.max(0, skoolScale),
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <div
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: 8,
                                background: colors.primary,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 16,
                                fontWeight: 700,
                                color: colors.text,
                            }}
                        >
                            sk
                        </div>
                        <span style={{ color: colors.text, fontSize: 24, fontWeight: 700 }}>
                            Join Skool
                        </span>
                    </div>
                </div>

                {/* Free tag */}
                <div
                    style={{
                        marginTop: 40,
                        opacity: interpolate(frame, [55, 75], [0, 1], { extrapolateRight: 'clamp' }),
                    }}
                >
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10,
                            padding: '12px 24px',
                            borderRadius: 30,
                            background: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                        }}
                    >
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={colors.green} strokeWidth={2}>
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ color: colors.green, fontSize: 18, fontWeight: 600 }}>
                            100% Free - No Credit Card Required
                        </span>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};

// Transition component for smooth scene changes
const SlideTransition: React.FC<{
    direction?: 'left' | 'right' | 'up' | 'down';
    children: React.ReactNode;
}> = ({ direction = 'up', children }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const fadeInDuration = 25;
    const fadeOutDuration = 20;

    const fadeIn = interpolate(frame, [0, fadeInDuration], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.cubic),
    });

    const fadeOut = interpolate(frame, [durationInFrames - fadeOutDuration, durationInFrames], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.in(Easing.cubic),
    });

    const translateDistance = 80;
    const translateMap = {
        up: {
            x: 0,
            yIn: interpolate(frame, [0, fadeInDuration], [translateDistance, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) }),
            yOut: interpolate(frame, [durationInFrames - fadeOutDuration, durationInFrames], [0, -translateDistance], { extrapolateLeft: 'clamp', easing: Easing.in(Easing.cubic) }),
        },
        down: {
            x: 0,
            yIn: interpolate(frame, [0, fadeInDuration], [-translateDistance, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) }),
            yOut: interpolate(frame, [durationInFrames - fadeOutDuration, durationInFrames], [0, translateDistance], { extrapolateLeft: 'clamp', easing: Easing.in(Easing.cubic) }),
        },
        left: {
            xIn: interpolate(frame, [0, fadeInDuration], [translateDistance, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) }),
            xOut: interpolate(frame, [durationInFrames - fadeOutDuration, durationInFrames], [0, -translateDistance], { extrapolateLeft: 'clamp', easing: Easing.in(Easing.cubic) }),
            y: 0,
        },
        right: {
            xIn: interpolate(frame, [0, fadeInDuration], [-translateDistance, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) }),
            xOut: interpolate(frame, [durationInFrames - fadeOutDuration, durationInFrames], [0, translateDistance], { extrapolateLeft: 'clamp', easing: Easing.in(Easing.cubic) }),
            y: 0,
        },
    };

    const t = translateMap[direction];
    const translateX = 'xIn' in t ? t.xIn + t.xOut : t.x;
    const translateY = 'yIn' in t ? t.yIn + t.yOut : t.y;

    return (
        <AbsoluteFill
            style={{
                opacity: fadeIn * fadeOut,
                transform: `translate(${translateX}px, ${translateY}px)`,
            }}
        >
            {children}
        </AbsoluteFill>
    );
};

// Main composition
export const LevelUpVideo: React.FC = () => {
    return (
        <AbsoluteFill style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            <AnimatedBackground />

            {/* Scene 1: Intro (0-100 frames / 0-3.3s) */}
            <Sequence from={0} durationInFrames={100}>
                <SlideTransition direction="up">
                    <IntroScene />
                </SlideTransition>
            </Sequence>

            {/* Scene 2: Workflow Animation (100-230 frames / 3.3-7.7s) */}
            <Sequence from={100} durationInFrames={130}>
                <SlideTransition direction="right">
                    <WorkflowScene />
                </SlideTransition>
            </Sequence>

            {/* Scene 3: Resources (230-360 frames / 7.7-12s) */}
            <Sequence from={230} durationInFrames={130}>
                <SlideTransition direction="left">
                    <ResourcesScene />
                </SlideTransition>
            </Sequence>

            {/* Scene 4: Community (360-490 frames / 12-16.3s) */}
            <Sequence from={360} durationInFrames={130}>
                <SlideTransition direction="up">
                    <CommunityScene />
                </SlideTransition>
            </Sequence>

            {/* Scene 5: CTA (490-600 frames / 16.3-20s) */}
            <Sequence from={490} durationInFrames={110}>
                <SlideTransition direction="up">
                    <CTAScene />
                </SlideTransition>
            </Sequence>
        </AbsoluteFill>
    );
};
