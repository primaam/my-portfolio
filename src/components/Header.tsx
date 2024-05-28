"use client";
import React from "react";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import "@/styles/header.css";
import "../styles/fonts.css";

const Header = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const menuArr = [
        { title: "About Me" },
        { title: "Education" },
        { title: "Skills" },
        { title: "Work Experience" },
        { title: "Projects" },
    ];

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
            <div className="headerLayout">
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
