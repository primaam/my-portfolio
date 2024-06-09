"use client";
import React from "react";
import { Container, Box, Button } from "@mui/material";
import { saveAs } from "file-saver";
import styles from "../styles/Contactme.module.css";
import LinkedinOutlined from "@ant-design/icons/LinkedinOutlined";
import GithubFilled from "@ant-design/icons/GithubFilled";
import InstagramOutlined from "@ant-design/icons/InstagramOutlined";

const ContactMe = () => {
    const [isViewed, setIsViewed] = React.useState(false);

    const handleDownloadResume = () => {
        const pdfUrl = "/resume.pdf";
        saveAs(pdfUrl, "my-resume.pdf");
    };

    const handleMakeCall = () => {
        window.open("tel:+6281393858484");
    };

    return (
        <Container className={styles.layout} id="contactme" maxWidth="xl">
            <Box className={styles.mainLayout}>
                <div className={styles.titleSection}>
                    <p className={styles.connectTitleFonts}>
                        Looking forward to connect with everyone!
                    </p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://mail.google.com/mail/?view=cm&fs=1&to=pmaharyono@gmail.com"}
                        style={{ cursor: "pointer" }}
                    >
                        <p className={`${styles.connectDescFonts} ${styles.primaryConnect}`}>
                            <span className={`material-symbols-outlined ${styles.connectIcons}`}>
                                mail
                            </span>
                            : pmaharyono@gmail.com
                        </p>
                    </a>
                    <br />
                    <a
                        onClick={() => handleMakeCall()}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ cursor: "pointer" }}
                    >
                        <p className={`${styles.connectDescFonts} ${styles.primaryConnect}`}>
                            <span className={`material-symbols-outlined ${styles.connectIcons}`}>
                                call
                            </span>
                            : (+62)813-9385-8484
                        </p>
                    </a>
                    <br />
                </div>
                <div className={styles.divider} />
                <div className={styles.connectSection}>
                    <p className={`${styles.connectTitleFonts} ${styles.socmedConnect}`}>
                        My Social
                    </p>
                    <div className={styles.socmedSection}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={"https://github.com/primaam"}
                        >
                            <GithubFilled className={styles.connectIcons} />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={"https://www.linkedin.com/in/primamaharyono/"}
                        >
                            <LinkedinOutlined className={styles.connectIcons} />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={"https://www.instagram.com/prima.maharyono/"}
                        >
                            <InstagramOutlined className={styles.connectIcons} />
                        </a>
                    </div>
                    <br />
                    <Button
                        onClick={() => handleDownloadResume()}
                        className={styles.downloadButton}
                    >
                        <p className={`${styles.buttonTextFonts}`}>Download My Resume</p>
                    </Button>
                </div>
            </Box>
        </Container>
    );
};

export default ContactMe;
