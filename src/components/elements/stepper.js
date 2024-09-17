import React from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Avatar,
    Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PauseIcon from "@mui/icons-material/Pause";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AITooltips from "./tooltip";

const steps = [
    { icon: <HomeIcon />, time: "", isActive: false },
    { icon: <LocalPhoneOutlinedIcon />, time: "8 mins" },
    { icon: <PhonePausedIcon />, time: "12 mins", isActive: true },
    { icon: <PersonOutlineOutlinedIcon />, time: "" },
];

const AiStepper = () => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Stepper activeStep={1} alternativeLabel sx={{ width: "100%" }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            icon={
                                <AITooltips>
                                    <Avatar
                                        sx={{
                                            bgcolor: label.isActive ? "#379bdd" : "white",
                                            color: label.isActive ? "white" : "#379bdd",
                                            border: label.isActive ? "none" : "2px solid #359add",
                                            overflow: "visible",
                                            marginTop: "-7px",
                                        }}
                                    >
                                        {label.isActive && (
                                            <CheckCircleIcon
                                                sx={{
                                                    color: "#3ecc03",
                                                    zIndex: "1000",
                                                    position: "absolute",
                                                    bottom: "-18%",
                                                    right: "-16%",
                                                    fontSize: "22px",
                                                }}
                                            />
                                        )}
                                        {label.icon}
                                    </Avatar>
                                </AITooltips>
                            }
                        >
                            {/* {label.time} */}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default AiStepper;
