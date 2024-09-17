import { Box } from "@mui/material";
import React from "react";
import Header from "../elements/header";
import GrayBox from "../elements/ai_graybody";

export default function Home() {
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            sx={{ display: "flex", justifyContent: "center" }}
        >
            <Box
                sx={{
                    height: "100vh",
                    maxHeight: "70vh",
                    width: "100% ",
                    maxWidth: "700px",
                    border: "1px solid",
                    borderColor: "lightgray",
                    boxShadow: 1,
                    marginTop: 4,
                    overflow: "hidden"
                }}
            >
                <Header />
                <GrayBox />

            </Box>
        </Box>
    );
}
