import * as React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export default function DeleteJob(props) {
    return (
        <Tooltip title="Изтрий обява">
            <IconButton sx={{ marginLeft: 'auto' }}>
                <DeleteForeverOutlinedIcon sx={{ color: 'red' }} />
            </IconButton>
        </Tooltip>
    )
};