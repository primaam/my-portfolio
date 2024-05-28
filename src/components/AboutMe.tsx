"use clients";
import React from "react";
import "../styles/aboutme.css";
import "../styles/fonts.css";

const AboutMe = () => {
    return (
        <div className="container">
            <div className="mainContainer">
                <div className="imgSection">
                    <img src="/assets/images/1.png" alt="Profile" />
                </div>
                <div className="introSection">
                    <h1 className="introTitleFonts">Hi, I'm Prima</h1>
                    <p className="introDescFonts">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum
                        aliquid eos, aut commodi ab nobis labore cum molestiae, amet nihil neque
                        eligendi, alias incidunt obcaecati explicabo voluptas dolorem ipsum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
