import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Input from "./input";
import AiStepper from "./stepper";


export default function GrayBox() {

    let [visible, setVisible] = useState(false);
    return (
        <Box sx={{ padding: 4, background: "#e6e6f3", height: "calc(70vh - 40px)", }}>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
                <IconButton onClick={() => setVisible(prev => !prev)}>
                    {
                        !visible ? <VisibilityIcon /> : <VisibilityOffIcon />
                    }
                </IconButton>
            </Box>
            <Box display={!visible ? "block" : 'none'}>
                <Input />
                <Box sx={{ width: "100%", marginTop: 5 }}>
                    <AiStepper />
                </Box>
            </Box>
        </Box>
    )
}