import React from 'react';
import { Grid, Avatar, Typography, Box } from '@mui/material';

const ChatMsg = ({ side, messages }) => {
    const gridAlign = side === 'right' ? 'flex-end' : 'flex-start';
    const messageAlign = side === 'right' ? 'right' : 'left';
    const backgroundColor = side === 'right' ? '#176ab4' : '#ffffff'; //#3f51b5
    const lettersColor = side === 'right' ? 'white' : 'black';

    return (
        <Grid container
            sx={{ justifyContent: gridAlign }}
            columnSpacing={2}
        >
            {
                side === 'left'
                    ? (
                        <Grid item><Avatar alt='profile-pic' /></Grid>
                    )
                    : null
            }
            <Grid item xs={8} sx={{ textAlign: messageAlign, }}>
                {
                    messages.map((msg, i) => {
                        return (
                            <Box key={`${i} ${msg}`}>
                                <Typography
                                    sx={{
                                        color: lettersColor,
                                        backgroundColor: backgroundColor,
                                        marginBottom: 1,
                                        marginRight: 1,
                                        padding: 1,
                                        borderRadius: 4,
                                        fontSize: '14px',
                                        display: 'inline-block',
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    {msg}
                                </Typography>
                                <Typography></Typography>
                            </Box>
                        );
                    })
                }
            </Grid>
        </Grid >
    );
};

export default ChatMsg;