import { useState , useContext} from 'react';

import {Box,Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';

//importing the LOgin Dialog 
import LoginDialog from '../login/loginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *':  {
        marginRight: '40px !important',
        fontSize:15,
        alignItems:'center'
    },
    [theme.breakpoints.down('md')]:{
        display : 'block'
    }
}));


const Conatiner = styled(Box)(({theme}) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}));

const LoginButton= styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    padding : 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight:600;
    height:32px;

`
const CustomButtons = () => {

    const [open , setOpen] = useState(false);

    const {account , setAccount}=useContext(DataContext);

    const openDialog =() =>{
        setOpen(true);

    }

    return ( 
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                <LoginButton variant='contained' onClick = { () => openDialog()}>Login</LoginButton>
            }

            <Typography style ={{ marginYop: 3, width:135 }}>Become a Seller</Typography>
            <Typography style ={{ marginYop: 3}}>more</Typography>

            <Conatiner>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Conatiner>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;