import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

export default function ImageUpload({ isImageUploaded, getImageUploaded, uploadImageText }) {
    return (
        <Grid item xs={12}>
            <input
                accept="image/*"
                style={{ opacity: 0 }}
                id="upload-profile-image"
                type="file"
                onChange={getImageUploaded}
                name='image'
                required
            />
            {
                isImageUploaded ?
                    <Alert severity="success">Успешно прикачена снимка</Alert> :
                    null
            }
            <label htmlFor="upload-profile-image" style={{ width: '100%' }}>
                <Button variant="outlined" component="span" fullWidth>
                    {uploadImageText}
                </Button>
            </label>
        </Grid>
    )
};