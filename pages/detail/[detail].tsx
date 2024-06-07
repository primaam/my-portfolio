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
                        <img src={data.logo} style={{ maxWidth: "300px" }} />
                        <div className={styles.divider} />
                        <div style={{ flex: 0.6 }}>
                            <h1 className={`${styles.detailFontsTitle} ${styles.firstSection}`}>
                                {data.title}
                            </h1>
                            <p className={`${styles.detailFontsDesc}`}>{data.longDesc}</p>
                        </div>
                    </div>
                </Container>
                {/* team, role, techstack, roleJobDetail */}
                <Container className={styles.detailLayout} maxWidth="xl">
                    <p className={`${styles.detailFontsTitle} ${styles.secondSection}`}>
                        Role Summary
                    </p>
                    <div className={styles.detailSection}>
                        <div>
                            <p>{data.role}</p>
                            <p>{data.team}</p>
                        </div>
                        <div className={styles.divider} />
                        <div>
                            <p>Job Detail</p>
                            {data.roleJobDetail.map((item, i) => {
                                return (
                                    <>
                                        <p>- {item}</p>
                                    </>
                                );
                            })}
                            <br />
                            <p>Tech Stack</p>
                            {data.techStack.map((item, i) => {
                                return <span>{item} | </span>;
                            })}
                        </div>
                    </div>
                </Container>

                {/* achievement */}
                <Container className={styles.detailLayout} maxWidth="xl">
                    <p className={`${styles.detailFontsTitle} ${styles.secondSection}`}>Result</p>
                    <div className={styles.detailSection}>
                        <div>
                            <p>Achievement</p>
                            {data.achievement.map((item, i) => {
                                return <p>- {item}</p>;
                            })}
                        </div>
                        <div className={styles.divider} />
                        <div>
                            <p>Links</p>
                            <p>{data.link.web}</p>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Detail;
