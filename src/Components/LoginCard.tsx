import React from 'react';
import {Paper, Typography} from "@mui/material";

const LoginCard = () => {
    return (
        <Paper
            elevation={10}
            sx={{maxWidth: '100%', borderRadius: '2rem', padding: '1rem', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
                variant='h4'
                sx={{textAlign:'center'}}
            >Please Log IN via MetaMask to check your wallet</Typography>
        </Paper>
    );
};

export default LoginCard;
