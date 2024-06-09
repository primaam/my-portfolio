"use client";
import React from "react";
import { useRouter } from "next/router";
import { Container, Box, Button } from "@mui/material";
import { projectDetail } from "../data/projectData";
import styles from "../styles/Project.module.css";

const Project = () => {
    const router = useRouter();
    const [sliderIndex, setSliderIndex] = React.useState(0);

    const imageSliderWidthHandle = React.useMemo(() => {
        let width: string = "";

        switch (sliderIndex) {
            case 0:
                width = "700px";
                break;
            case 3:
                width = "600px";
                break;
            default:
                width = "500px";
                break;
        }

        return width;
    }, [sliderIndex]);

    const handleSliderNextClick = () => {
        if (projectDetail.length - 1 === sliderIndex) {
            setSliderIndex(0);
        } else {
            setSliderIndex(sliderIndex + 1);
        }
    };

    const handleSliderBackClick = () => {
        if (sliderIndex === 0) {
            setSliderIndex(projectDetail.length - 1);
        } else {
            setSliderIndex(sliderIndex - 1);
        }
    };

    const handleProjectClick = (projectId: number) => {
        router.push(`/detail/${projectId}`);
        console.log("Navigate to project detail page for project id: ", projectId);
    };

    return (
        <div id="projects" className={styles.projectLayout}>
            <Box className={styles.projectMainLayout}>
                <div style={{ flex: 0.8 }}>
                    <p className={styles.projectTitleFonts}>Projects I've Contributed To...</p>
                    <br />
                    <p className={styles.projectTitleFonts}>{projectDetail[sliderIndex].title}</p>
                    <u className={styles.projectDescFonts}>
                        {projectDetail[sliderIndex].team} - {projectDetail[sliderIndex].role}
                    </u>
                    <p className={`${styles.projectDescFonts} ${styles.description}`}>
                        {projectDetail[sliderIndex].shortDesc}
                    </p>
                </div>
                <div className={styles.projDivider} />

                <div className={styles.slideShowLayout}>
                    <div className={styles.slideShowContainer}>
                        {projectDetail.map((item, i) => {
                            return (
                                <div
                                    className={`${styles.sliderCard} ${styles.fade}`}
                                    key={i}
                                    style={{
                                        display: sliderIndex === i ? "block" : "none",
                                    }}
                                >
                                    <img
                                        src={item.logo}
                                        style={{
                                            maxWidth: imageSliderWidthHandle,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.sliderButtonContainer}>
                        <Button onClick={() => handleSliderBackClick()} className={styles.prev}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </Button>
                        <Button
                            onClick={() => handleProjectClick(sliderIndex)}
                            className={styles.sliderButton}
                        >
                            <p className={`${styles.description}`}>See Detail</p>
                        </Button>
                        <Button onClick={() => handleSliderNextClick()} className={styles.next}>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </Button>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Project;
