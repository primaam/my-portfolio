"use client";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../src/styles/Details.module.css";
import Layout from "@/components/Layout";
import { Container } from "@mui/material";

const Detail = () => {
    const router = useRouter();
    const detailIndex = router.query.detail;
    return (
        <>
            <Head>
                <title>Welc to Prima's Website</title>
            </Head>
            <Layout>
                <div className={styles.detailLayout}>
                    <p className={styles.detailFonts}>Detaildjhasjkhdajs Page {detailIndex}</p>
                    Detaildjhasjkhdajs Page {detailIndex}
                    <Container maxWidth="xl"></Container>
                </div>
            </Layout>
        </>
    );
};

export default Detail;
