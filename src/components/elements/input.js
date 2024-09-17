import { Typography } from "@mui/material";
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Input() {
    return (
        <Box sx={{ width: "100%" }}>
            <Typography variant="body1">Ask Me - e.g: GreAI/ What is the best way to looks like symphatic?</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
                borderRadius: '8px',
                padding: "0px",
                width: '100%',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
            }}>
                <TextField

                    variant="outlined"
                    placeholder="GreAI"
                    InputProps={{
                        sx: {
                            padding: "0px",
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
                        },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    fullWidth
                />
            </Box>

        </Box>
    )
}