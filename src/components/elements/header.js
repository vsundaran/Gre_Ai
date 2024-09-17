import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import MinimizeIcon from '@mui/icons-material/Minimize';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from "../ui chunks/sideDrawer";

export default function Header() {
    return (
        <Box
            sx={{
                padding: 1,
                // border: "1px solid",
                // borderColor: "black",
                width: "100%",
                minHeight: "40px",
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                    marginRight={1}
                    sx={{
                        width: "30px",
                        height: "30px",
                        background: "linear-gradient(135deg, #00aaff, #a442f1)",
                        borderRadius: "100%",
                    }}
                ></Box>
                <Typography
                    variant="subtitle1"
                    sx={{
                        background: "linear-gradient(135deg, #00aaff, #a442f1)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    GreAI
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton>
                    <MinimizeIcon />
                </IconButton>
                <MenuDrawer />
            </Box>
        </Box>
    );
}
