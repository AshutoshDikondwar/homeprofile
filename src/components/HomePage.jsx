import React, { useState, useEffect } from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, Avatar, Drawer, Box, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const HomePage = () => {
    const [user, setUser] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://randomuser.me/api')
            .then((response) => response.json())
            .then((data) => {
                setUser(data.results[0]);
            })
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const goToProfile = () => {
        navigate('/profile', { state: { user } });
    };

    if (!user) {
        return <Loading />;
    }

    return (
        <>
            <AppBar position="static" className="bg-[#2873ee]">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <div className="flex-grow" />
                    <IconButton color="inherit" onClick={goToProfile}>
                        {user.picture?.large ? (
                            <Avatar src={user.picture.large} />
                        ) : (
                            <Avatar>{user.name.first.charAt(0)}</Avatar>
                        )}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        top: '64px',
                        height: 'calc(100% - 64px)',
                        backgroundColor: '#5994f3',
                    },
                }}
            >
                <Box sx={{ width: 250, p: 2 }}>
                    <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign:'center' }}>
                        Home
                    </Typography>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <Accordion
                            key={index}
                            disableGutters
                            sx={{
                                backgroundColor: 'transparent',
                                outline: 'none',
                                color: 'white',
                                boxShadow: 'none',
                                borderBottom: 'none',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            >
                                <Typography>Item {item}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Content for Item {item}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Drawer>
        </>
    );
};

export default HomePage;
