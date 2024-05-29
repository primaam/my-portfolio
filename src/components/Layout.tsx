"use client";
import React from "react";
import "../styles/layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div className="layoutContainer">{children}</div>;
};

export default Layout;
