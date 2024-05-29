"use client";
import React from "react";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import "@/styles/header.css";
import "../styles/fonts.css";

const Header = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    // const [scrollPos, setScrollPos] = React.useState(0);
    const [isScrolled, setIsScrolled] = React.useState(false);

    const menuArr = [
        { title: "About Me" },
        { title: "Experience" },
        { title: "Skills" },
        { title: "Projects" },
    ];

    React.useEffect(() => {
        // teknik debounce
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const position = window.scrollY;
                // setScrollPos(position);

                if (position > 180) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }, 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 720);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        console.log("test");
    };
    return (
        <>
            <div className={`headerLayout ${isScrolled ? "scrolled" : ""}`}>
                <Button
                    style={{
                        borderWidth: 0,
                        color: "white",
                    }}
                    variant={isMobile ? "text" : "outlined"}
                    onClick={handleHomeClick}
                >
                    <span className="material-symbols-outlined home-icon">home</span>
                    <h1 className="home-fonts">Home</h1>
                </Button>
                <>
                    <div className="headerMenuLayout">
                        {menuArr.map((item, i) => {
                            return (
                                <Button
                                    key={i}
                                    style={{
                                        borderWidth: 0,
                                        color: "white",
                                        textTransform: "none",
                                    }}
                                >
                                    <span className="menu-fonts">{item.title}</span>
                                </Button>
                            );
                        })}
                    </div>
                    <Button
                        onClick={() => setDrawerOpen(true)}
                        style={{
                            display: isMobile ? "block" : "none",
                            borderWidth: 0,
                            color: "white",
                        }}
                    >
                        <span className="material-symbols-outlined home-icon">menu</span>
                    </Button>
                </>
            </div>
            <Drawer
                SlideProps={{
                    className: "drawer",
                }}
                // className="drawer"
                transitionDuration={1000}
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        paddingTop: "30%",
                    }}
                    onClick={() => setDrawerOpen(false)}
                    role="presentation"
                >
                    <List>
                        {menuArr.map((item, i) => {
                            return (
                                <ListItem key={i}>
                                    <ListItemButton style={{ textAlign: "center" }}>
                                        <ListItemText
                                            style={{ color: "#DCD7C9" }}
                                            primary={item.title}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
