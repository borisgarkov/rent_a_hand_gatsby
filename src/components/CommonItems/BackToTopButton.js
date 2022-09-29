import { Box, Fab, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as React from "react";

function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({ disableHysteresis: true });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#navbar"
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

export default function BackToTopButton(props) {
    return (
        <>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
}
