import React from 'react';
import { Avatar, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useLocation, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { user } = location.state || {};

    if (!user) {
        return <Typography variant='h3'>No user data available</Typography>;
    }

    return (

        <Box sx={{ p: 3 }}>

            
            <Typography variant="h4" gutterBottom>
                Profile
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, marginLeft: 15  }}>
                <Avatar
                    src={user.picture?.large}
                    alt={user.name.first}
                    sx={{ width: 150, height: 150, mr: 3 }}
                />
                <Box>
                    <Typography variant="h4">
                        {user.name.title} {user.name.first} {user.name.last}
                    </Typography>
                    <Typography>Email: {user.email}</Typography>
                    <Typography>Phone: {user.phone}</Typography>
                    <Typography>Location: {user.location.city}, {user.location.state}, {user.location.country}</Typography>
                </Box>
            </Box>
            <IconButton onClick={() => navigate('/')}>
                <ArrowBackIcon />
            </IconButton>
        </Box>
    );
};

export default ProfilePage;
