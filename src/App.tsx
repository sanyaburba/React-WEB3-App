import React, {useState} from 'react';
import {WalletCard} from "./Components/WalletCard";
import {Header} from "./Components/Header";
import LoginCard from "./Components/LoginCard";
import Web3 from "web3";

const App = () => {
    const [isConnected, setIsConnected] = useState<boolean>(false);

    const [account, setAccount] = useState<any>(null)


    const onLogin = async (provider: any) => {
        const web3 = new Web3(provider)
        const accounts = await web3.eth.getAccounts()
        if (accounts.length === 0) {
            alert('connect to metamask')
        } else if (accounts[0] !== account) {
            setAccount(accounts[0])
            setIsConnected(true)
        }
    }

    const onLogout = () => {
        setIsConnected(false)
    }

    return (
        <div>
            <Header
                onLogin={onLogin}
                onLogout={onLogout}
            />
            <div style={{margin: '2rem auto', width: '40%', height: '30%'}}>
                {!isConnected && <LoginCard/>}
                {isConnected && <WalletCard currAcc={account}/>}
            </div>
        </div>
    );
};

export default App;
