import * as React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Button, IconButton } from "@mui/material";
import useScreenResolution from "../hooks/useScreenResolution";

export default function EditButton(props) {
    const isMobile = useScreenResolution('md');

    return (
        <>
            {
                isMobile
                    ? <IconButton sx={{
                        ...props.editStyle,
                        backgroundColor: 'primary.main',
                        color: 'inherit'
                    }}
                        disableFocusRipple
                        disableRipple
                    >
                        <EditOutlinedIcon sx={{ color: 'white' }} />
                    </IconButton>
                    : <Button
                        variant="contained"
                        sx={{ ...props.editStyle }}
                        startIcon={<EditOutlinedIcon />}
                    >
                        Редактирай
                    </Button>

            }
        </>
    )
};