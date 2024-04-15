import React from "react";

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
    return <div style={{ margin: "0 auto", maxWidth: "960px", padding: "20px" }}>{children}</div>;
};

export default SimpleLayout;
