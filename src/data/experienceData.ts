export interface WorkRole {
    title: string;
    time: string;
}

export interface WorkDetail {
    company: string;
    location: string;
    /** Overall range shown on the timeline, e.g. "2025" or "Feb 2026 – Present" */
    time: string;
    /** Role progression within the company (newest first) */
    roles: WorkRole[];
    summary?: string;
    highlights?: string[];
}

interface EducationDetail {
    school: string;
    year?: string;
    title: string;
    type?: "education" | "certification",
    detail?: string,
}

export interface Language {
    language: string;
    level: string;
}

export const WorkDetailData: WorkDetail[] = [
    {
        company: "Celerates",
        location: "Jakarta Metropolitan Area",
        time: "Feb 2026 – Present",
        roles: [{ title: "Full Stack Developer", time: "Feb 2026 – Present" }],
        summary: "Full-stack development across frontend and backend systems.",
    },
    {
        company: "PT Mediatama Indo Teknologi",
        location: "Jakarta, Indonesia",
        time: "2025",
        roles: [
            { title: "Lead Frontend Developer", time: "Aug – Dec 2025" },
            { title: "Full Stack Developer", time: "Apr – Dec 2025" },
            { title: "Frontend Developer", time: "Jan – Apr 2025" },
        ],
        summary:
            "Maintenance squad for Ceisa 4.0 (Bea Cukai Indonesia) in a multi-vendor environment.",
        highlights: [
            "Led the frontend team: code reviews, mentoring, and stable delivery with a smaller team",
            "15x faster critical query (>6s → ~400ms) via SQL, CTE, and endpoint restructuring",
            "Built Kafka producers/consumers for real-time data processing",
            "Introduced JSDoc standards and Web Performance API measurement",
        ],
    },
    {
        company: "Daya Inspirasi Bangsa",
        location: "South Tangerang, Indonesia",
        time: "Nov 2024 – Jan 2025",
        roles: [{ title: "Software Engineer", time: "Nov 2024 – Jan 2025" }],
        summary: "Fintech platform funding Indonesian workers in Japan.",
        highlights: [
            "Implemented feature-based architecture inside a monolithic frontend",
            "Built an interactive card-based system with color-coded categories",
        ],
    },
    {
        company: "Outlier",
        location: "Remote (US)",
        time: "Oct 2024 – Feb 2025",
        roles: [{ title: "AI Trainer (Coders)", time: "Oct 2024 – Feb 2025" }],
        summary: "Training AI models for technical accuracy and responsible AI.",
        highlights: [
            "Reviewed AI-generated coding responses for accuracy and relevance",
            "Flagged factual inaccuracies and ethical concerns",
        ],
    },
    {
        company: "PT Guud Logistics Indonesia",
        location: "Jakarta, Indonesia",
        time: "May – Nov 2023",
        roles: [{ title: "Frontend Developer", time: "May – Nov 2023" }],
        summary: "ClicTruck — digital fleet management for the logistics chain.",
        highlights: [
            "Built driver selection and invoicing schemes with React",
            "Developed the React Native mobile app with React Navigation",
        ],
    },
    {
        company: "Landack",
        location: "Jakarta, Indonesia",
        time: "Mar – May 2023",
        roles: [{ title: "React Native Developer", time: "Mar – May 2023" }],
        summary: "Digital legal consultation platform.",
        highlights: [
            "Integrated payments and consultation via WhatsApp (incl. deep links)",
            "Created adaptive components for multiple OS versions and screen sizes",
        ],
    },
    {
        company: "Datacakra",
        location: "Jakarta, Indonesia",
        time: "Jul 2021 – Jul 2022",
        roles: [{ title: "Frontend Developer", time: "Jul 2021 – Jul 2022" }],
        summary: "Industrial IoT and monitoring systems.",
        highlights: [
            "Built QR scanner and 30 cities / 15 languages support for BibToGo",
            "Shipped Rapidsense MVP: machine list, live data, and role-based control",
        ],
    },
];

export const EducationDetailData: EducationDetail[] = [
    {
        school: "Sebelas Maret University",
        year: "2015 – 2020",
        title: "Engineer's degree, Civil Engineering",
        type: "education"
    },
    {
        school: "Glints Academy",
        year: "2020",
        title: "React Native Bootcamp",
        type: "certification"
    },
    {
        school: "Binar Academy",
        year: "2020",
        title: "React Native Mobile Development",
        type: "certification"
    },
    {
        school: "Udemy",
        year: "2022",
        title: "React Js Responsive Portfolio Website",
        type: "certification"
    },
    {
        school: "Certification Course",
        title: "JavaScript Certification",
        type: "certification"
    },
    {
        school: "Certification Course",
        title: "OOP Certification",
        type: "certification"
    },
    {
        school: "Certification Course",
        title: "Python (Basic)",
        type: "certification"
    },
    {
        school: "Certification Course",
        title: "Frontend Developer (React)",
        type: "certification"
    }
]

export const LanguageData: Language[] = [
    { language: "Indonesian", level: "Native" },
    { language: "English", level: "Limited working" },
];
