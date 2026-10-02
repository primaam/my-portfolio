
interface ProjectDetail {
    id: number;
    title: string;
    time: string;
    logo: string;
    images: string;
    longDesc: string;
    shortDesc: string;
    team: string;
    role: string;
    roleJobDetail: string[];
    achievement: string[];
    feature: string[];
    techStack: string[];
    link: {
        web: string;
        appStore: string;
        playStore: string;
    };
}

export const projectDetail: ProjectDetail[] = [
    {
        id: 0,
        title: "Ceisa 4.0",
        time: "2025",
        logo: "/assets/images/ceisa-cover.svg",
        images: "/assets/images/ceisa-cover.svg",
        longDesc: `Ceisa 4.0 is the customs and excise system of Bea Cukai Indonesia. As part of PT Mediatama Indo Teknologi's maintenance squad in a multi-vendor environment, I progressed from Frontend Developer to Full Stack Developer and Lead Frontend Developer — driving backend performance optimization while leading frontend quality: formal code reviews, mentoring juniors, JSDoc documentation standards, and Web Performance API measurement.`,
        shortDesc: "Customs & excise system of Bea Cukai Indonesia. Led frontend quality while driving backend performance — including a 15x faster critical query (6s → 400ms) with SQL, CTE, Kafka, and paginated endpoints.",
        team: "Mediatama Maintenance Squad",
        role: "Lead Frontend Developer & Full Stack Developer",
        roleJobDetail: [
            "Led the frontend team: code review process, mentoring juniors, and task distribution",
            "Developed Kafka producers and consumers for real-time data processing",
            "Introduced Common Table Expressions (CTE) for complex data operations",
            "Restructured inefficient backend endpoints with pagination and memory optimization",
            "Pioneered JSDoc documentation standards and Web Performance API measurement"
        ],
        achievement: [
            "15x speed increase on a critical query (from >6 seconds to ~400ms)",
            "Higher code quality and knowledge sharing through formal code reviews",
            "Consistent delivery despite a reduction in team size",
        ],
        feature: [
            "Real-time data processing with Kafka",
            "Paginated, memory-efficient endpoints",
            "Performance measurement with Web Performance API"
        ],
        techStack: ["React", "TypeScript", "SQL", "Kafka", "JSDoc", "Git", "Jira"],
        link: {
            web: "",
            appStore: "",
            playStore: ""
        },
    },
    {
        id: 1,
        title: "Daya Fintech",
        time: "Nov 2024 - Jan 2025",
        logo: "/assets/images/daya-cover.svg",
        images: "/assets/images/daya-cover.svg",
        longDesc: `Fintech platform by Daya Inspirasi Bangsa providing funds for Indonesian workers in Japan. I focused on frontend feature development and codebase improvements: implementing feature-based architecture within a monolithic frontend to create clear boundaries between new and existing products, and enhancing UX with an interactive card-based system with hover effects and color-coded categories.`,
        shortDesc: "Fintech funding Indonesian workers in Japan. Implemented feature-based architecture in a monolithic frontend and built an interactive card-based UX with color-coded categories.",
        team: "Daya Inspirasi Bangsa",
        role: "Software Engineer",
        roleJobDetail: [
            "Implemented feature-based architecture within a monolithic frontend",
            "Built new features and updated existing ones for evolving product requirements",
            "Enhanced UX with an interactive card-based system and color-coded categories"
        ],
        achievement: [
            "Clear boundaries between new and existing products",
            "More engaging product browsing experience",
        ],
        feature: [
            "Funding flows for overseas workers",
            "Card-based category system"
        ],
        techStack: ["React", "TypeScript", "Redux", "Axios", "Git"],
        link: {
            web: "",
            appStore: "",
            playStore: ""
        },
    },
    {
        id: 3,
        title: "ClicTruck",
        time: "May 2023 - November 2023",
        logo: "/assets/images/clictruck-logo.png",
        images: "/assets/images/clictruck.png",
        longDesc: `ClicTruck, a vital component of the Clickargo project, is a product developed by Guud Logistics Company. The primary objective of this project is to offer comprehensive, centralized services that seamlessly connect all stakeholders involved in the logistics chain, including customs, terminal operators, cargo owners, freight forwarders, trucking companies, and container depots.\n ClicTruck serves as a streamlined digital vendor fleet management system designed to simplify the process of assigning jobs to truck drivers, providing real-time digital proofs of delivery, and facilitating instant payments to drivers through a digital wallet service. By enabling digital job assignment, GPS tracking of cargo, and digital management of delivery proofs, ClicTruck empowers truck drivers to effectively manage their delivery schedules and orders, ensuring timely payments and smoother operations.`,
        shortDesc: "ClicTruck, part of Clickargo by Guud Logistics, streamlines vendor fleet management, simplifying job assignments, offering real-time proof of delivery, and facilitating instant payments to drivers. With digital job assignment and GPS tracking, it empowers drivers for smoother operations and timely payments.",
        team: "ClicTruck Development Team",
        role: "Frontend Developer",
        roleJobDetail: [
            "Developed an interactive web application with a modern frontend framework and an intuitive user interface using React Js",
            "Developed UI for mobile app version using React Native and linked the navigation feature with React Navigation",
            "Work with the Product Team to make sure the app and website are running well",
            "Refactored existing code to improve readability and adjust it with a new feature"
        ],
        achievement: [
            "Implemented a new driver selection scheme to enhance the driver selection feature.",
            "Implemented a new invoicing scheme based on existing rules to streamline invoicing processes.",
            "Engineered a reusable modal component for mobile versions, ensuring consistent functionality and enhancing user experience.",
            "Revamped UI for the mobile app version, improving visual aesthetics and usability.",
        ],
        feature: [
            "Driver selection and management",
            "Trucking operator management",
            "Job Assignment",
            "Delivery Tracking",
            "Create invoices according to customs",
            "Financing management "
        ],
        techStack: ["React Js", "React Native", "Javascript", "Git", "Jira", "Axios", "Redux", "HTML", "CSS", "Typescript"],
        link: {
            web: "https://id2.clickargo.com/clictruck/session/signin",
            appStore: "",
            playStore: "https://play.google.com/store/apps/details?id=com.clickargo.clicktruck&hl=en&gl=US"
        },
    },
    {
        id: 4,
        title: "Landack",
        time: "March 2023 - May 2023",
        logo: "/assets/images/landack-logo.png",
        images: "/assets/images/landack.png",
        longDesc: `Landack is a digital platform that offers legal consultation services and legal assistance for both individuals and businesses. By merging digital technology with legal expertise, Landack aims to provide users with easy and convenient access to addressing various legal issues they encounter.\nThrough this platform, users can quickly seek solutions to their legal questions, receive advice from trusted legal experts, and obtain legal services tailored to their needs, whether for personal or business purposes. Landack serves as a reliable partner in delivering precise and high-quality legal solutions, assisting users in carrying out their activities smoothly and ensuring legal compliance.`,
        shortDesc: "Landack: Digital platform for legal consultation and assistance. Users get quick access to legal solutions and advice, tailored for personal or business needs. Reliable partner for smooth operations and legal compliance.",
        team: "Landack Development Team",
        role: "React Native Developer",
        roleJobDetail: [
            "Configure components settings and styles based on mobile device platform",
            "Create reusable components that can be used multiple times in the code",
            "Design a clear and user-friendly way for people to move around the app, matching what the Product Team wants, and using React Navigation framework to do it.",
            "Build a feature that lets users easily switch between our app and WhatsApp for payments and consultation"
        ],
        achievement: [
            "Developed separate navigation schemes for new and existing users, ensuring intuitive navigation.",
            "Created adaptable components for diverse operating systems and screen sizes.",
            "Successfully integrated payment gateway via WhatsApp.",
            "Implemented deep link for consultation feature via WhatsApp."
        ],
        feature: [
            "Consultation services and payment schemes via WhatsApp",
            "Consultation subscription package"
        ],
        techStack: ["React Native", "Git", "CSS", "Javascript", "Typescript", "Redux", "Axios", "React Navigation", "Async Storage"],
        link: {
            web: "https://landack.id/",
            appStore: "https://apps.apple.com/id/app/landack/id6466232103",
            playStore: "https://play.google.com/store/apps/details?id=com.landackapp"
        }, 
    },
    {
        id: 5,
        title: "BibToGo",
        time: "July 2021 - July 2022",
        logo: "/assets/images/bibtogo-logo.png",
        images: "/assets/images/bibtogo.jpg",
        longDesc: `Goethe-Institut is a German cultural institution that focuses on promoting the German language and understanding of German culture worldwide. The institute offers a wide range of programs and services, including German language courses, German language certification exams, cultural seminars, arts and cultural programs, as well as support for cultural exchange and international cooperation between Germany and other countries
        \nGoethe-Institut is a leading institution in promoting the German language and culture, and serves as a resource center for learning the German language and gaining knowledge of German culture worldwide. It also plays a role in strengthening cultural ties between Germany and other countries, facilitating cultural exchange and international cooperation.
        \nAs a part of introduce and help people to learn and understand German language and culture, Goethe-Institut works with Datacakra to develop and maintain their apps called BibToGo. BibToGo is the Goethe-Institut library app, it is used for user to make digital memberships to Goethe-Institut library and tools for user to help learning Germany language also it gives access to their media and services.
        \nBibToGo has been equipped with various features to help users from all over the world, one of which is the choice of language based on the user's city selection. Content and appearance adjustments are also applied in the BibToGo application to make users feel more comfortable using this application. Another feature that has been added in this application is the QR Scanner. This feature has also been adapted to the content contained in the QR, making it easier for users to learn German and its culture`,
        shortDesc: "Goethe-Institut promotes German language and culture globally through language courses, cultural programs, and exchange initiatives. As part of this mission, it developed BibToGo, an app facilitating digital library memberships, language learning, and access to media. BibToGo offers user-friendly features like language selection based on location, enhancing the learning experience of German language and culture.",
        team: "BibToGo Development Team",
        role: "Mobile Apps Engineer",
        roleJobDetail: [
            "Built a QR scanner function that allows users to scan from the application and adapt its function to the contents of the QR on different platforms",
            "Adding new language options according to the country and city chosen by the user and adjusting the existing components regarding the addition of the language",
            "Create new components as part of a redesign plan according to the design that has been made by the UI/UX team",
            "Configure existing feature into new components and also add animation in the new component transitions",
            "Work closely with the product team from the client to deliver the features",
            "Fix bugs that have been found by the QA team"
        ],
        achievement: [
            "Add new 30 cities and 15 new languages options and adjust the existing content in the apps",
            "Built QR scanner function and adjust the function based on QR content",
            "Add animation transitions to a new component as a part of redesign plan"
        ],
        feature: [
            "QR Code Scanner",
            "Library member registration",
            "Deeplink to other Goethe-Institute apps"
        ],
        techStack: ["React Native", "Git", "CSS", "Javascript", "Typescript", "Redux", "Axios", "React Navigation"],
        link: {
            web: "https://www.goethe.de/ins/id/en/sta/jak/bib/btg.html",
            appStore: "https://apps.apple.com/id/app/bibtogo/id1540752696",
            playStore: "https://play.google.com/store/apps/details?id=com.goethe&hl=en&gl=US"
        }, 
    },
    {
        id: 6,
        title: "Rapidsense",
        time: "May 2022 - July 2022",
        logo: "/assets/images/rapidsense-logo.png",
        images: "/assets/images/rapidsense.png",
        longDesc: `Datacakra is industry 4.0 specialist working for enterprises and corporates across Indonesia with focus on industrial IoT and monitoring system. As a service provider for IoT users, Datacakra build a product called Rapidsense. It's an advanced IoT platform designed specifically to handle heavy-duty enteprise-grade IoT solutions. It supports wide-range of industrial sensors, various business purposes, and cloud scalability.
        \nOne of the features of Rapidsense is displaying live-data of the machines and adjust it according to the services that users has subscribed. It helps the user to observe machine usage and get data reference to make an analysis. Also it can turn the machine on and off through the app`,
        shortDesc: "Datacakra specializes in Industry 4.0 solutions for Indonesian enterprises, offering Rapidsense, an advanced IoT platform. Rapidsense displays live machine data for analysis and enables remote machine control through the app",
        team: "Mobile Development Team",
        role: "React Native Engineer",
        roleJobDetail: [
            "Build a navigation template on the application using React-Navigation",
            "Plan and create the component structure of the application with Team Leader to create reusable component",
            "Create a list of all machines and machine details so that users can monitor all existing machines and display data related to these machines",
            "Build a machine control function based on role of the users that allow user to turn on and off the machine and count the failed product that produced by the machine",
            "Work closely with the product team to deliver the features, especially in user application flow."
        ],
        achievement: [
            "Successfully to build MVP feature of the product",
            "Build a function based on different role of the users",
            "Build ready-to-use mobile application while support website development team"
        ],
        feature: [
            "Machine control function based on role of the users",
            "List of all machines and machine details"
        ],
        techStack: ["React Native", "Git", "CSS", "Javascript", "Typescript", "Redux", "Axios", "React Navigation", "Async Storage"],
        link: {
            web: "https://datacakra.com/product-dc/",
            appStore: "",
            playStore: ""
        }, 
    }
]
