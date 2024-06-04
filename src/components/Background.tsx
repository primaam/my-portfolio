"use client";
import React from "react";
import { Container, Box, Button } from "@mui/material";
import "../styles/background.css";
import { COLOR } from "../../public/assets/color";
import { WorkDetailData, EducationDetailData } from "../data/experienceData";

const Background = () => {
    const eduFilteredData = EducationDetailData.filter((item, i) => {
        return item.type === "education";
    });

    const certiFilteredData = EducationDetailData.filter((item, i) => {
        return item.type === "certification";
    });

    return (
        <Container id="background" maxWidth="xl" className="layout">
            <Box className="mainLayout">
                <div className={"section"}>
                    <h1 className="titleFonts titleSection">Education & Certification</h1>
                    <br />
                    <div className="secondarySection">
                        {EducationDetailData.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div className="titleRowContainer">
                                        <h1 className="titleFonts">{item.school}</h1>
                                        <h1 className="titleFonts">{item.year}</h1>
                                    </div>
                                    <div>
                                        <p className="detailFonts">{item.title}</p>
                                        <p className="detailFonts">{item.detail}</p>
                                        <br />
                                    </div>

                                    {item.detail ? (
                                        <div className="eduDivider">
                                            <div />
                                            <br />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="divider" style={{ borderColor: COLOR.color3[3] }}></div>
                <div className={"section"}>
                    <h1 className="titleFonts titleSection">Work Experience</h1>
                    <br />
                    <div className="secondarySection">
                        {WorkDetailData.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div className="titleRowContainer">
                                        <h1 className="titleFonts">{item.role}</h1>
                                        <h1 className="titleFonts">{item.time}</h1>
                                    </div>
                                    <div>
                                        <p className="detailFonts">{item.company}</p>
                                        <p className="detailFonts">{item.location}</p>
                                        <br />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default Background;
