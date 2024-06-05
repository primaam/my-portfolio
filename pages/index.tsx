"use client";
import React from "react";
import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Background from "@/components/Background";
import Project from "@/components/Project";
import { Container } from "@mui/material";

const Home = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const handleLoading = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        };

        handleLoading();

        return () => handleLoading();
    }, []);
    return (
        <Layout>
            <Header />
            <AboutMe />
            <Background />
            <Project />
        </Layout>
    );
};

Home.propTypes = {};

export default Home;
