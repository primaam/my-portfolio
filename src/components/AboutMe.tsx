"use clients";
import React, { useEffect, useState } from "react";
import { Box, Container, LinearProgress } from "@mui/material";
import styles from "../styles/Aboutme.module.css";

const AboutMe = () => {
    const words = ["Frontend Developer", "React Native Developer", "Web Developer"];
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 2000;

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (typing) {
            if (isDeleting) {
                if (text.length > 0) {
                    timer = setTimeout(() => {
                        setText(text.substring(0, text.length - 1));
                    }, erasingSpeed);
                } else {
                    setIsDeleting(false);
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                    setTyping(false);
                }
            } else {
                if (text.length < words[wordIndex].length) {
                    timer = setTimeout(() => {
                        setText(words[wordIndex].substring(0, text.length + 1));
                    }, typingSpeed);
                } else {
                    timer = setTimeout(() => {
                        setIsDeleting(true);
                        setTyping(false);
                    }, delayBetweenWords);
                }
            }
        } else {
            timer = setTimeout(() => {
                setTyping(true);
            }, 500); // Short delay to avoid immediate re-typing
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, typing]);
    return (
        <div className={styles.responsiveLayout}>
            <Container id={"aboutme"} className={styles.layout} maxWidth="xl">
                <Box className={styles.mainLayout}>
                    <div className={styles.introImg}>
                        <img src="/assets/images/1.png" alt="Profile" />
                    </div>
                    <div className={styles.introSection}>
                        <h1 className={styles.introTitleFonts}>Hi,</h1>
                        <h1 className={styles.introTitleFonts}>Prima Anugerah Maharyono</h1>
                        <div className={styles.typingContainer}>
                            <span className={isDeleting ? styles.erasing : styles.typing}>
                                {text}
                            </span>
                            <span className={styles.cursor}>|</span>
                        </div>
                        <p className={styles.introDescFonts}>
                            Frontend Developer | React Native Developer | Web Developer
                        </p>
                    </div>
                </Box>
                {/* coming soon */}
                {/* <Box className="moreLayout"></Box> */}
            </Container>

            <Container className={`${styles.layout}`} maxWidth="xl">
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
