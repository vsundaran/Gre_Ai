import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Emotion from "../../images/emotion.jpg"

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const WhiteTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme }) => ({
    [`& .MuiTooltip-tooltip`]: {
        backgroundColor: "#fff",
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: 14,
        border: "1px solid #ddd",
        maxWidth: '800px', // Sets the max width of the tooltip
        width: '800px',    // Ensures the tooltip will be exactly 1000px wide
    },
    [`& .MuiTooltip-arrow`]: {
        color: "#fff", // This makes the arrow white
    },
}));

function UI_Tooltip() {

    let [show, setShow] = React.useState(false);

    const handleClick = () => {
        setShow(prev => !prev)
    }

    return (
        <Box sx={{ maxHeight: "50vh", overflowY: "scroll" }}>
            <Box padding={2}>
                <Typography variant="body1" fontWeight={"600"}>
                    Resume of transacription:
                </Typography>
                <Typography variant="body1">
                    The customer said his and request an support though technical visit. He
                    confirmed that but the problem keep happening. Was suggest to wait some
                    couple hours to restore the signal into the area, but the customer was
                    impatient.
                </Typography>

                <Box display={"flex"} alignItems={"center"} gap={1}>
                    <Box sx={{ width: "10px", height: "10px", background: "blue" }}></Box>
                    <Typography variant="caption">Click to shift to</Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} marginTop={3} gap={1} onClick={handleClick}>
                    <Typography variant="body1" fontWeight={"600"} >
                        Transacription Detailed
                    </Typography>

                    {
                        show ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />
                    }

                </Box>
                <Typography variant="body2" color="color.secondary" onClick={handleClick}>Click to {!show ? "show" : "close"} </Typography>

                <Box marginTop={1} sx={{ display: show ? "flex" : "none", alignItems: "center", gap: 2 }}>
                    <Box width={"100%"}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Avatar>B</Avatar>
                            <Box sx={{ background: "lightgray", padding: 1, borderRadius: 2 }}>Hello, I am Good Robi choose your option so we can help you</Box>
                        </Box>
                        <Box marginTop={1} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Avatar>B</Avatar>
                            <Box sx={{ background: "lightgray", padding: 1, borderRadius: 2 }}>Option 1</Box>
                        </Box>
                    </Box>
                    <Box width={"100%"}>
                        <Box>
                            <Stack spacing={1}>
                                <Chip label="1. Technical Problem" variant="outlined" sx={{ border: "2px solid", borderColor: "#00b0f0", color: "#00b0f0" }} />
                                <Chip label="2. Change your plan" variant="outlined" sx={{ border: "2px solid", borderColor: "#00b0f0", color: "#00b0f0" }} />
                                <Chip label="2. Change your plan" variant="outlined" sx={{ border: "2px solid", borderColor: "#00b0f0", color: "#00b0f0" }} />
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={5} sx={{ display: "flex", alignItems: "center" }}>
                <Box padding={1} sx={{ background: "#ebfaff", width: "100%" }}>
                    <Typography variant="body2" color="color.secondary">Client's Emotion</Typography>
                    <center>
                        <img src={Emotion} style={{ maxWidth: "200px" }} />
                    </center>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
                        <Typography variant="body2">Augusto Coimbra</Typography>
                    </Box>
                </Box>
                <Box padding={1} sx={{ background: "#f3fbff", width: "100%", height: "100%" }}>
                    <Typography variant="body2" color="color.secondary" marginBottom={1}>Tips from GreAi</Typography>

                    <Box>
                        <Typography variant="body2">Show confidence;</Typography>
                        <Typography variant="body2">May be telling him that you will resolve the issue soon whould be good</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} marginTop={4}>
                            <ThumbUpIcon sx={{ color: "#379bdd" }} />
                            <ThumbDownAltIcon sx={{ color: "gray" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box >
    );
}

export default function AITooltips({ children }) {
    return (
        <WhiteTooltip
            color="white"
            title={
                <React.Fragment>
                    <UI_Tooltip />
                </React.Fragment>
            }
            arrow
        >
            {children}
        </WhiteTooltip>
    );
}
