"use client";
import React from "react";
// import "@/styles/header.css";

const Header = () => {
    return (
        <div className="flex justify-between items-center h-[60px] pl-[20px] pr-[20px] pt-[40px]">
            <div>
                <span
                    style={{ color: "#DCD7C9", fontSize: "30px" }}
                    className="material-symbols-outlined"
                >
                    home
                </span>
                <a>Home</a>
            </div>
            <div>test</div>
        </div>
    );
};

export default Header;
