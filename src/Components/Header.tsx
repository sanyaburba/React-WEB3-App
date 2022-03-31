import * as React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import metamask from './MetaMask_Fox.svg.webp'
import {FC, useState} from "react";

interface IHeader {
    onLogin: (provider: object) => void
    onLogout: () => void
}

export const Header: FC<IHeader> = ({onLogin, onLogout}) => {


    const [isConnecting, setIsConnecting] = useState<boolean>(false)
    const detectProvider = () => {
        let provider
        // @ts-ignore
        if (window.ethereum) {
            // @ts-ignore
            provider = window.ethereum
        } else { // @ts-ignore
            if (window.web3) {
                // @ts-ignore
                provider = window.web3.currentProvider
            } else {
                alert('no wallet detected')
            }
        }
        return provider
    }

    const onLoginHandler = async () => {
        const provider = detectProvider()
        if(provider) {
            // @ts-ignore
            if(provider !== window.ethereum) {
                alert('not metamask exist')
            }
        }
        setIsConnecting(true)
        await provider.request ({
            method: 'eth_requestAccounts'
        })
        setIsConnecting(false)
        onLogin(provider)
    }


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="static"
                style={{background: 'lightsalmon'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: 'flex', alignItems: 'center'}}>
                        <img
                            src={metamask}
                            alt="metamask"
                            height='60px'
                            width='60px'/>
                        WALLET
                    </Typography>
                    <Button
                        onClick={onLoginHandler}
                        color="inherit">
                        {!isConnecting && 'Get public key'}
                        {isConnecting && 'Loading'}
                    </Button>
                    {/*{isAuth &&<Button*/}
                    {/*    onClick={onLogoutClick}*/}
                    {/*    color="inherit">*/}
                    {/*    DISCONNECT*/}
                    {/*</Button>}*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
