"use clients";
import React from "react";
import { Box, Container, LinearProgress } from "@mui/material";
import "../styles/aboutme.css";
import "../styles/fonts.css";

const AboutMe = () => {
    return (
        <>
            <Container className="layout" maxWidth="xl">
                <Box className="mainLayout">
                    <div className="introImg">
                        <img src="/assets/images/1.png" alt="Profile" />
                    </div>
                    <div className="introSection">
                        <h1 className="introTitleFonts">Prima Anugerah Maharyono</h1>
                        <p className="introDescFonts">
                            Frontend Developer | React Native Developer | Web Developer
                        </p>
                    </div>
                </Box>
                {/* coming soon */}
                {/* <Box className="moreLayout"></Box> */}
            </Container>

            <Container className="layout descLayout" maxWidth="xl">
                <Box className="mainLayout descMainLayout">
                    <div className="introImg descImg">
                        <img src="/assets/images/2.jpg" alt="Profile" />
                    </div>
                    <div className="introSection">
                        <h1 className="introTitleFonts">Hi, I'm Prima</h1>
                        <p className="introDescFonts">
                            has expertise as a Frontend Developer, focusing on mobile app
                            development with React Native and web development using React Js. My
                            expertise includes JavaScript and state management using Redux.
                            Passionate about exploring my capabilities and eager to take on new
                            opportunities to further develop my career.
                        </p>
                    </div>
                </Box>
            </Container>
        </>
    );
};

export default AboutMe;
