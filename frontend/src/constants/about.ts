// VISION & MISSION
import VissionMissionImg from '../assets/team/group/whoAreWe.png';
import WhoAreWeImg from '../assets/team/group/visionMission.png';

export const vision = {
    whoAreWe: {
        eyebrow: 'who are we',
        headline: 'Turning Customer',
        highlightedText: 'Signals Into Growth',
        description: [
            "Attributics is a customer lifecycle–focused growth partner for enterprise brands.",
            "We help organizations transform scattered customer data, fragmented journeys, and complex Martech stacks into cohesive, intelligence-led lifecycle systems , built to drive measurable business impact.",
        ],
        image: WhoAreWeImg
    },

    statement: {
        normal: "Sustainable growth is engineered at the intersection of data, automation, and lifecycle intelligence.",
        highlighted: "",
    },

    vissionMission: {
        eyebrow: 'mission & vision',
        vision: {
            headline: 'Vision',
            description: 'To empower leading brands to turn data, technology, and marketing into lasting customer lifetime value — through intelligence, automation, and operational clarity.',
        },
        mission: {
            headline: 'Mission',
            description: [
                "We embed lifecycle intelligence into existing Martech ecosystems, without requiring brands to rebuild from scratch.",
                "We help enterprises:",
            ],
            points: [
                "Unify customer data into a 360° view",
                "Optimize lifecycle journeys across channels",
                "Enable real-time segmentation and personalization",
                "Improve retention, conversion, and LTV",
                "Drive measurable ROI from existing technology investments",
            ],
        },
        image: VissionMissionImg
    },
}

// METRICS CARDS
export const metricCards = [
    { metric: 20, unit: "%", postive: true, subheadline: "Peak Revenue Growth" },
    { metric: 50, unit: "%", postive: true, subheadline: "CRM-Driven Uplift" },
    { metric: 15, unit: "%", postive: true, subheadline: "Customer Lifetime Value" },
    { metric: 3, unit: "X", postive: true, subheadline: "Faster Execution" }
]

// TEAM MEMBERS
import VishalA from '../assets/team/VishalA.png';
import ShreyaM from '../assets/team/ShreyaM.png';
import VakeshS from '../assets/team/VakeshS.png';
import ShashankK from '../assets/team/ShashankK.png';
import MudarB from '../assets/team/MudarB.png';
import NeelS from '../assets/team/NeelS.png';
import MadhuriK from '../assets/team/MadhuriK.png';
import SaumyaS from '../assets/team/SaumyaS.png';
import AniketP from '../assets/team/AniketP.png';
import PoonamA from '../assets/team/PoonamA.png';
import PrathamS from '../assets/team/PrathamS.png';

import PlaceHolder from '../assets/team/placeholder.png';

export const team = {
    eyebrow: 'Our Team',
    headline: 'Meet Our',
    highlighted: 'Team',
    members: [
        {
            id: 1,
            name: 'Vishal Agarwal',
            role: 'Growth',
            img: VishalA,
        },
        {
            id: 2,
            name: 'Shreya Mehta',
            role: 'Operations',
            img: ShreyaM,
        },
        {
            id: 3,
            name: 'Shashank Kumar',
            role: 'Strategy',
            img: ShashankK,
        },
        {
            id: 4,
            name: 'Vakesh Singh',
            role: 'Delivery',
            img: VakeshS,
        },
        {
            id: 5,
            name: 'Prasad Parvatkar',
            role: 'Technology',
            img: PlaceHolder,
        },
        {
            id: 6,
            name: 'Mudar Bharmal',
            role: 'Growth',
            img: MudarB,
        },
        {
            id: 7,
            name: 'Neel Shah',
            role: 'Operations',
            img: NeelS,
        },
        {
            id: 8,
            name: 'Madhuri Kurhade',
            role: 'Strategy',
            img: MadhuriK,
        },
        {
            id: 9,
            name: 'Saumya Sharma',
            role: 'Marketing',
            img: SaumyaS,
        },
        {
            id: 10,
            name: 'Aniket Pholane',
            role: 'Operations',
            img: AniketP,
        },
        {
            id: 11,
            name: 'Poonam Adak',
            role: 'Operations',
            img: PoonamA,
        },
        {
            id: 12,
            name: 'Akash Sahu',
            role: 'Technology',
            img: PlaceHolder,
        },
        {
            id: 13,
            name: 'Pratham Sharma',
            role: 'Technology',
            img: PrathamS,
        },
        {
            id: 14,
            name: 'Aniya Kulkarni',
            role: 'Operations',
            img: PlaceHolder,
        },
        {
            id: 15,
            name: 'Sai Reddy',
            role: 'Operations',
            img: PlaceHolder,
        },
        {
            id: 16,
            name: 'Kaniska Deshmukh',
            role: 'Operations',
            img: PlaceHolder,
        },
        {
            id: 17,
            name: 'Vaishnavi Raut',
            role: 'Operations',
            img: PlaceHolder,
        },
    ],
}

// GET STARTED CTA
export const getstarted = {
    eyebrow: 'Ready to Transform Your Growth?',
    headline: [
        'Add Intelligence.',
        'Unlock',
    ],
    highlighted: [
        'Retention',
        'Revenue',
        'Engagement',
        'Conversion'
    ],
    description: "Book a personalized demo with our experts and see how Attributics can revolutionize your customer lifecycle marketing.",
    ctaText: 'Schedule Your Demo',
}