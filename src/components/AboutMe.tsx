"use clients";
import React from "react";
import { Box, Container, LinearProgress } from "@mui/material";
import styles from "../styles/Aboutme.module.css";

const AboutMe = () => {
    return (
        <div>
            <Container id={"aboutme"} className={styles.layout} maxWidth="xl">
                <Box className={styles.mainLayout}>
                    <div className={styles.introImg}>
                        <img src="/assets/images/1.png" alt="Profile" />
                    </div>
                    <div className={styles.introSection}>
                        <h1 className={styles.introTitleFonts}>Prima Anugerah Maharyono</h1>
                        <p className={styles.introDescFonts}>
                            Frontend Developer | React Native Developer | Web Developer
                        </p>
                    </div>
                </Box>
                {/* coming soon */}
                {/* <Box className="moreLayout"></Box> */}
            </Container>

            <Container className={`${styles.layout} ${styles.descLayout}`} maxWidth="xl">
                <Box className={`${styles.mainLayout} ${styles.descMainLayout}`}>
                    <div className={`${styles.introImg} ${styles.descImg}`}>
                        <img src="/assets/images/2.jpg" alt="Profile" />
                    </div>
                    <div className={styles.introSection}>
                        <h1 className={styles.introTitleFonts}>Hi, I'm Prima</h1>
                        <p className={styles.introDescFonts}>
                            has expertise as a Frontend Developer, focusing on mobile app
                            development with React Native and web development using React Js. My
                            expertise includes JavaScript and state management using Redux.
                            Passionate about exploring my capabilities and eager to take on new
                            opportunities to further develop my career.
                        </p>
                    </div>
                </Box>
            </Container>
        </div>
    );
};

export default AboutMe;
