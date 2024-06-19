"use client";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../src/styles/Details.module.css";
import Layout from "@/components/Layout";
import { Container } from "@mui/material";
import { projectDetail } from "../../src/data/projectData";

const Detail = () => {
    const router = useRouter();
    const detailIndex: number = parseInt(router.query.detail as string, 10) || 0;
    const data = projectDetail[detailIndex];
    return (
        <>
            <Head>
                <title>Detail Project: {data.title}</title>
            </Head>
            <Layout>
                {/* title, logo, longDesc */}
                <Container className={styles.detailLayout} maxWidth="xl">
                    <div className={styles.detailSection}>
                        <div className={styles.logoContainer}>
                            <img src={data.logo} />
                        </div>
                        <div className={styles.divider} />
                        <div style={{ flex: 0.6 }}>
                            <h1 className={`${styles.detailFontsTitle} ${styles.firstSection}`}>
                                {data.title}
                            </h1>
                            <p className={`${styles.detailFontsDesc}`}>
                                {detailIndex === 2 ? data.shortDesc : data.longDesc}
                            </p>
                        </div>
                    </div>
                </Container>
                {/* team, role, techstack, roleJobDetail */}
                <Container className={styles.detailLayout} maxWidth="xl">
                    <p className={`${styles.detailFontsTitle} ${styles.titleSection}`}>
                        Role Summary
                    </p>
                    <div className={styles.detailSection}>
                        <div>
                            <p className={`${styles.detailFontsTitle}`}>{data.role}</p>
                            <p className={`${styles.detailFontsTitle}`}>{data.team}</p>
                        </div>
                        <div className={styles.divider} />
                        <div style={{ flex: 0.7 }}>
                            <p className={`${styles.detailFontsTitle}`}>Job Detail</p>
                            {data.roleJobDetail.map((item, i) => {
                                return (
                                    <>
                                        <p className={`${styles.detailFontsDesc}`}>- {item}</p>
                                    </>
                                );
                            })}
                            <br />
                            <p className={`${styles.detailFontsTitle}`}>Tech Stack</p>
                            {data.techStack.map((item, i) => {
                                return (
                                    <span key={i} className={`${styles.detailFontsDesc}`}>
                                        {item} |{" "}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </Container>

                {/* achievement */}
                <Container className={styles.detailLayout} maxWidth="xl">
                    <p className={`${styles.detailFontsTitle} ${styles.titleSection}`}>Result</p>
                    <div className={styles.detailSection}>
                        <div style={{ flex: 0.5 }}>
                            <p className={`${styles.detailFontsTitle}`}>Achievement</p>
                            {data.achievement.map((item, i) => {
                                return <p className={`${styles.detailFontsDesc}`}>- {item}</p>;
                            })}
                        </div>
                        <div className={styles.divider} />
                        <div style={{ flex: 0.4 }}>
                            <p className={`${styles.detailFontsTitle}`}>Links</p>
                            <span className={`${styles.detailFontsDesc}`}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={data.link.web}
                                    style={{
                                        display: data.link.web.length === 0 ? "none" : "inline",
                                    }}
                                >
                                    {/* <img
                                        className={styles.linksLogo}
                                        src="/assets/images/web-logo.png"
                                    /> */}
                                    Website{" | "}
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={data.link.appStore}
                                    style={{
                                        display:
                                            data.link.appStore.length === 0 ? "none" : "inline",
                                    }}
                                >
                                    {/* <img
                                        className={styles.linksLogo}
                                        src="/assets/images/appstore-logo.png"
                                    /> */}
                                    App Store{" | "}
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={data.link.playStore}
                                    style={{
                                        display:
                                            data.link.playStore.length === 0 ? "none" : "inline",
                                    }}
                                >
                                    {/* <img
                                        className={styles.linksLogo}
                                        src="/assets/images/playstore-logo.png"
                                    /> */}
                                    Play Store{" | "}
                                </a>
                            </span>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Detail;
