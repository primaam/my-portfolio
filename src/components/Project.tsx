"use client";
import React from "react";
import { Container, Box, Button } from "@mui/material";
import { projectDetail } from "../data/projectData";
import "../styles/project.css";
import { COLOR } from "../../public/assets/color";

const Project = () => {
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
                width = "300px";
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
        console.log("Navigate to project detail page for project id: ", projectId);
    };

    return (
        <Container maxWidth="xl" className="projectLayout">
            <Box className="projectMainLayout">
                <div
                    style={{
                        flex: 0.3,
                    }}
                >
                    <p className="projectTitleFonts">Projects I've Contributed To...</p>
                    <h1>{projectDetail[sliderIndex].title}</h1>
                    <p>{projectDetail[sliderIndex].team}</p>
                    <p>{projectDetail[sliderIndex].role}</p>

                    <p>{projectDetail[sliderIndex].team}</p>
                    <p>{projectDetail[sliderIndex].role}</p>
                </div>
                <div className="projDivider" />

                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
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
                                        src={item.images}
                                        style={{ maxWidth: imageSliderWidthHandle }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Button onClick={() => handleSliderBackClick()} className="prev">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </Button>

                        <Button onClick={() => handleSliderNextClick()} className="next">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </Button>
                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default Project;
