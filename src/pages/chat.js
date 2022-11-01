import React from 'react';
import Navigation from '../components/NavigationBar/Navigation';
import ChatMsg from '../components/Chat/ChatMsg';
import { Box, IconButton, TextField, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const DefaultChatMsg = () => {
    const [textMessages, setMessages] = React.useState([
        'кво става, брат?',
    ]);

    const handleNewMessageAdd = (newTextMessage, event = null) => {
        if (event !== null && event.key !== 'Enter') { return };
        if (newTextMessage.trim() === '') { return };
        setMessages([...textMessages, newTextMessage]);
        setNewMessage('');
    };

    const [newMessage, setNewMessage] = React.useState('');
    const handleNewMessageChange = (event) => { setNewMessage(event.target.value) };

    const boxRef = React.useRef();
    React.useEffect(() => {
        boxRef.current.scrollIntoView({ behavior: "smooth" });
    }, [textMessages]);

    return (
        <Navigation>
            <Box sx={{
                maxWidth: 1000,
                margin: '24px auto',
                maxHeight: '60vh',
                overflowY: 'scroll',
            }}>
                <ChatMsg
                    side={'left'}
                    messages={[
                        'Hi Jenny, How r u today?',
                        'Did you train yesterday',
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Volutpat lacus laoreet non curabitur gravida.`,
                    ]}
                />
                <ChatMsg
                    side={'right'}
                    messages={[
                        "Great! What's about you?",
                        'Of course I did. Speaking of which check this out asfasdg dasf asdfa dsf',
                    ]}
                />
                <ChatMsg side={'left'} messages={['Im good.', 'See u later.']} />

                <ChatMsg side={'right'} messages={textMessages} />
                <Box ref={boxRef}></Box>
            </Box>
            <Stack sx={{ flexDirection: 'row', maxWidth: 1000, margin: '24px auto', }}>
                <TextField id="standard-basic"
                    onChange={handleNewMessageChange} value={newMessage}
                    onKeyDown={(event) => handleNewMessageAdd(newMessage, event)}
                    label="Съобщение" variant="standard" fullWidth />

                <IconButton onClick={() => handleNewMessageAdd(newMessage)}>
                    <SendIcon sx={{ color: '#f37327' }} />
                </IconButton>
            </Stack>
        </Navigation>
    )
};

export default DefaultChatMsg;