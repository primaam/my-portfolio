"use client";
import React from "react";
import { useRouter } from "next/router";
import { Container, Box, Button } from "@mui/material";
import { projectDetail } from "../data/projectData";
import "../styles/project.css";

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
        // Handle click event to navigate to project detail page
        router.push(`/detail/${projectId}`);
        console.log("Navigate to project detail page for project id: ", projectId);
    };

    return (
        <div className="projectLayout">
            <Box className="projectMainLayout">
                <div
                    style={{
                        flex: 0.8,
                    }}
                >
                    <p className="projectTitleFonts">Projects I've Contributed To...</p>
                    <p className="projectTitleFonts">{projectDetail[sliderIndex].title}</p>
                    <u className="projectDescFonts">
                        {projectDetail[sliderIndex].team} - {projectDetail[sliderIndex].role}
                    </u>
                    <p className="projectDescFonts description">
                        {projectDetail[sliderIndex].shortDesc}
                    </p>
                </div>
                <div className="projDivider" />

                <div className="slideShowLayout">
                    <div className="slideShowContainer">
                        {projectDetail.map((item, i) => {
                            return (
                                <div
                                    className="sliderCard fade"
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
                    <div className="sliderButtonContainer">
                        <Button onClick={() => handleSliderBackClick()} className="prev">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </Button>
                        <Button
                            onClick={() => handleProjectClick(sliderIndex)}
                            className="sliderButton"
                        >
                            <p
                                style={{ color: "#2C3639" }}
                                className="projectDescFonts description"
                            >
                                See Detail
                            </p>
                        </Button>
                        <Button onClick={() => handleSliderNextClick()} className="next">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </Button>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Project;
