"use client";
import React from "react";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import styles from "@/styles/Header.module.css";

const Header = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [scrollPos, setScrollPos] = React.useState("aboutme");
    const [isScrolled, setIsScrolled] = React.useState(false);

    const menuArr = [
        { title: "About Me", id: "aboutme" },
        { title: "Background", id: "background" },
        { title: "Projects", id: "projects" },
        { title: "Contact Me", id: "contactme" },
    ];

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth",
        });
    }, []);

    React.useEffect(() => {
        // teknik debounce
        let timeoutId: NodeJS.Timeout;

        let height = screen.height;

        const handleScroll = () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const position = window.scrollY;

                if (position < 180) {
                    setIsScrolled(false);
                } else {
                    setIsScrolled(true);
                }
            }, 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    React.useEffect(() => {
        let height = screen.height;

        let timeoutId: NodeJS.Timeout;

        const handleScrollPosition = () => {
            clearTimeout(timeoutId);
            const positionY = window.scrollY;

            timeoutId = setTimeout(() => {
                if (positionY < 2 * height) {
                    setScrollPos("aboutme");
                } else if (positionY < 3 * height) {
                    setScrollPos("background");
                } else if (positionY < 4 * height) {
                    setScrollPos("projects");
                } else {
                    setScrollPos("contactme");
                }
            }, 200);
        };
        window.addEventListener("scroll", handleScrollPosition);

        return () => {
            window.removeEventListener("scroll", handleScrollPosition);
        };
    }, []);

    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToHash = (param: string) => {
        const element = document.getElementById(`${param}`);
        if (param != undefined) {
            setScrollPos(param);
            element?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    return (
        <>
            <div className={`${styles.headerLayout} ${isScrolled ? styles.scrolled : ""}`}>
                <Button
                    style={{
                        borderWidth: 0,
                        color: "white",
                    }}
                    variant={isMobile ? "text" : "outlined"}
                    onClick={handleHomeClick}
                >
                    <span className={`material-symbols-outlined ${styles.homeIcon}`}>home</span>
                    <h1 className={styles.homeFonts}>Home</h1>
                </Button>
                <>
                    <div className={styles.headerMenuLayout}>
                        {menuArr.map((item, i) => {
                            return (
                                <Button
                                    onClick={() => scrollToHash(item.id)}
                                    variant="outlined"
                                    key={i}
                                    sx={{
                                        "&.MuiButton-outlined:focus": {
                                            border: "inherit",

                                            borderBottomWidth: scrollPos === item.id ? 1 : 0,
                                            borderBottomColor: "wheat",
                                            outline: "none", // Contoh: Menghilangkan outline
                                        },
                                        borderTopWidth: 0,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderRadius: 0,
                                        borderBottomWidth: scrollPos === item.id ? 1 : 0,
                                        borderBottomColor: "wheat",
                                        // border: "none",
                                        color: "white",
                                        textTransform: "none",
                                    }}
                                >
                                    <span className={styles.menuFonts}>{item.title}</span>
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
                        <span className={`material-symbols-outlined ${styles.homeIcon}`}>menu</span>
                    </Button>
                </>
            </div>
            <Drawer
                SlideProps={{
                    className: `${styles.drawer}`,
                }}
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
