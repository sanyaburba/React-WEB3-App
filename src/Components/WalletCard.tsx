import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import metamaskCard from './metamaskCard.webp';
import {FC, useState} from "react";

interface iWalletCard {
    currAcc?: string
}

export const WalletCard: FC<iWalletCard> = ({currAcc}) => {


    return (
        <Card
            sx={{maxWidth: '100%', borderRadius: '2rem'}}
            elevation={10}>
            <CardMedia
                component="img"
                height="250"
                image={metamaskCard}
                alt="cardbg"
            />
            <CardContent style={{background: '#f3f1ec'}}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{color: '#b3aca9'}}>
                    Wallet ID:
                </Typography>
                <Typography
                    variant="body2"
                    style={{
                        color: 'black',
                        fontSize: '1.3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    {currAcc}
                </Typography>
            </CardContent>
        </Card>
    );
}
