const cycleSteps = [
    { label: 'Data Intelligence', color: '#3b82f6' },
    { label: 'Automation',        color: '#8b5cf6' },
    { label: 'Optimization',      color: '#ec4899' },
    { label: 'Growth',            color: '#10b981' },
];

// Nodes spread across full 1200px width, Y alternates for wave shape
const NODES = [
    { cx: 150,  cy: 180, label: 'Data',     step: 0 },
    { cx: 450,  cy: 100, label: 'Automate', step: 1 },
    { cx: 750,  cy: 280, label: 'Optimize', step: 2 },
    { cx: 1050, cy: 160, label: 'Grow',     step: 3 },
];

// Wave path threading through all 4 nodes
const MAIN_PATH  = "M 150,180 C 270,100 330,100 450,100 C 570,100 630,280 750,280 C 870,280 930,160 1050,160";
// Return arc looping underneath
const RETURN_PATH = "M 1050,200 C 960,370 780,400 600,400 C 420,400 240,370 150,220";

const FlowChart = () => {
    return (
        <div className="w-full block">
            <svg
                viewBox="0 0 1200 430"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                style={{ display: 'block' }}
            >
                <defs>
                    <path id="curvedPath" d={MAIN_PATH} fill="none" />

                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6">
                            <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#ec4899;#10b981;#3b82f6" dur="8s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="33%" stopColor="#8b5cf6">
                            <animate attributeName="stop-color" values="#8b5cf6;#ec4899;#10b981;#3b82f6;#8b5cf6" dur="8s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="66%" stopColor="#ec4899">
                            <animate attributeName="stop-color" values="#ec4899;#10b981;#3b82f6;#8b5cf6;#ec4899" dur="8s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="100%" stopColor="#10b981">
                            <animate attributeName="stop-color" values="#10b981;#3b82f6;#8b5cf6;#ec4899;#10b981" dur="8s" repeatCount="indefinite"/>
                        </stop>
                    </linearGradient>
                </defs>

                {/* Main wave path */}
                <path
                    d={MAIN_PATH}
                    fill="none"
                    stroke="url(#curveGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="flowing-path"
                />

                {/* Particles */}
                {[0,1,2,3,4,5].map((i) => (
                    <circle
                        key={i}
                        r="6"
                        fill={cycleSteps[i % 4].color}
                        opacity="0"
                    >
                        {/* Motion */}
                        <animateMotion
                            dur="6s"
                            repeatCount="indefinite"
                            begin={`${i * 1}s`}
                        >
                            <mpath href="#curvedPath" />
                        </animateMotion>

                        {/* Fade in exactly when motion starts */}
                        <animate
                            attributeName="opacity"
                            values="0;0.85;0.85"
                            keyTimes="0;0.01;1"
                            dur="6s"
                            begin={`${i * 1}s`}
                            repeatCount="indefinite"
                        />

                        {/* Pulse */}
                        <animate
                            attributeName="r"
                            values="4;7;4"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>
                ))}

                {/* Nodes */}
                {NODES.map(({ cx, cy, label, step }) => (
                    <g key={step} className="step-label" style={{ animationDelay: `${step * 0.3}s` }}>
                        <circle cx={cx} cy={cy} r="74" fill={cycleSteps[step].color} opacity="0.12"/>
                        <circle cx={cx} cy={cy} r="64" fill="white" stroke={cycleSteps[step].color} strokeWidth="3"/>
                        <text x={cx} y={cy + 5} textAnchor="middle" fontWeight="700" fontSize="22" fill={cycleSteps[step].color}>
                            {label}
                        </text>
                    </g>
                ))}

                {/* Return dashed arc */}
                <path
                    d={RETURN_PATH}
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    className="return-path"
                />
                {/* Arrowhead pointing back into first node */}
                <path
                    d="M 140,213 L 148,202 L 159,213"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <style>{`
                .flowing-path {
                    stroke-dasharray: 2200;
                    stroke-dashoffset: 2200;
                    animation: drawFlow 3s ease-out forwards;
                    filter: drop-shadow(0 0 8px rgba(59,130,246,0.3));
                }
                @keyframes drawFlow {
                    to { stroke-dashoffset: 0; }
                }
                .step-label {
                    opacity: 0;
                    animation:
                        stepPop 0.6s ease-out forwards,
                        float 4s ease-in-out infinite 0.6s;
                }
                @keyframes stepPop {
                    from { opacity: 0; transform: scale(0.5); }
                    to   { opacity: 1; transform: scale(1); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-7px); }
                }
                .return-path {
                    animation: returnDash 2s linear infinite;
                }
                @keyframes returnDash {
                    to { stroke-dashoffset: -12; }
                }
            `}</style>
        </div>
    );
};

export default FlowChart;