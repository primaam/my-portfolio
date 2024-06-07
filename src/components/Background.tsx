"use client";
import React from "react";
import { Container, Box, Button } from "@mui/material";
import styles from "../styles/Background.module.css";
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
        <Container id="background" maxWidth="xl" className={styles.layout}>
            <Box className={styles.mainLayout}>
                <div className={styles.section}>
                    <h1 className={`${styles.titleFonts} ${styles.titleSection}`}>
                        Education & Certification
                    </h1>
                    <br />
                    <div className={styles.secondarySection}>
                        {EducationDetailData.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div className={styles.titleRowContainer}>
                                        <h1 className={styles.titleFonts}>{item.school}</h1>
                                        <h1 className={styles.titleFonts}>{item.year}</h1>
                                    </div>
                                    <div>
                                        <p className={styles.detailFonts}>{item.title}</p>
                                        <p className={styles.detailFonts}>{item.detail}</p>
                                        <br />
                                    </div>

                                    {item.detail ? (
                                        <div className={styles.eduDivider}>
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
                <div className={styles.divider} style={{ borderColor: COLOR.color3[3] }}></div>
                <div className={styles.section}>
                    <h1 className={`${styles.titleFonts} ${styles.titleSection}`}>
                        Work Experience
                    </h1>
                    <br />
                    <div className={styles.secondarySection}>
                        {WorkDetailData.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div className={styles.titleRowContainer}>
                                        <h1 className={styles.titleFonts}>{item.role}</h1>
                                        <h1 className={styles.titleFonts}>{item.time}</h1>
                                    </div>
                                    <div>
                                        <p className={styles.detailFonts}>{item.company}</p>
                                        <p className={styles.detailFonts}>{item.location}</p>
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
