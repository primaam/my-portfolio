import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";

export const metadata = {
    title: "prima",
    description: "Generated by create next app",
};

const Home = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <div>index</div>
        </>
    );
};

Home.propTypes = {};

export default Home;
