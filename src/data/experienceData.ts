interface WorkDetail{
    role: string,
    time: string,
    company: string,
    location: string
}

interface EducationDetail{
    school: string,
    year: string,
    title: string,
    type?: "education" | "certification",
    detail?: string,
}

export const WorkDetailData: WorkDetail[]=[
    {
        company: "PT. Guud Logistics Indonesia",
        role: "Frontend Developer",
        location: "Jakarta, Indonesia",
        time: "2023"
    },
    {
        company: "PT. Inspirasi Teknologi Bangsa",
        role: "React Native Developer",
        location: "Jakarta, Indonesia",
        time: "2023"
    },
    {
        company: "Datacakra",
        role: "Frontend Developer",
        location: "Jakarta, Indonesia",
        time: "2021 - 2022"
    },
]

export const EducationDetailData: EducationDetail[]=[
    {
        school: "Sebelas Maret University",
        year: "2020",
        title: "Bachelor of Engineer, Major in Civil Engineer",
        detail: "GPA: 3,17 of 4",
        type: "education"
    },
    {
        school: "Udemy",
        year: "2022",
        title: "React Js Responsive Portfolio Website",
        type: "certification"
    },
    {
        school: "Binar Academy",
        year: "2020",
        title: "React Native Mobile Development",
        type: "certification"
    }
]