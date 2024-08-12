"use client";
import React from "react";
import { AboutMe, Header, ContactMe, Project } from "@/components/";
import Layout from "@/components/Layout";
import Background from "@/components/Background";

const Home = () => {
    return (
        <Layout>
            <Header />
            <AboutMe />
            <Background />
            <Project />
            <ContactMe />
        </Layout>
    );
};

Home.propTypes = {};

export default Home;
