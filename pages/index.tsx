"use client";
import React from "react";
import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Background from "@/components/Background";
import Project from "@/components/Project";
import ContactMe from "@/components/ContactMe";

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
