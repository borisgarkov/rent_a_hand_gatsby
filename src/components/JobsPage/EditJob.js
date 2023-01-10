import * as React from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddJobModal from "./AddJobModal";

export default function EditJob({ currentJob }) {
    const [openJobModal, setOpenJobModal] = React.useState(false);
    const handleClickOnJobModal = () => { setOpenJobModal(true); };
    const handleCloseJobModal = () => { setOpenJobModal(false); };

    return (
        <>
            <Tooltip title="Редактирай обява">
                <IconButton sx={{ marginLeft: 'auto' }} onClick={handleClickOnJobModal}>
                    <EditOutlinedIcon sx={{ color: '#176ab4' }} />
                </IconButton>
            </Tooltip>
            <AddJobModal
                id="job-section"
                keepMounted
                open={openJobModal}
                onClose={handleCloseJobModal}
                modaltitle='Редактирай обява'
                currentJob={currentJob}
            />
        </>
    )
};