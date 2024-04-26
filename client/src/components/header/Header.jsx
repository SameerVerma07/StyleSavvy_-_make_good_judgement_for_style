import { useState } from "react";


import reactLogo from "./mylogo.jpeg"; //here we are adding the logo from our computer system
import { AppBar, Toolbar, Box, Typography,IconButton, Drawer,List,ListItem, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';

//components of search is import here
import Search from './Search';
import CustomButtons from "./CustomButtons";

import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
    background: #263238;
    height: 85px;

`
const Component = styled(Link)`
    margin-left: 5%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    margin-left:30%;
`;

const  PlusImage = styled('img')({
    width: 15,
    height: 15,
    marginLeft: 5
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

const MenuButtom = styled (IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}));


    

const Header = () => {

   // const logoURL = 'mylogo.png' // this is used if we add logo from a link
    const subURL = 'https://static.vecteezy.com/system/resources/previews/002/119/201/original/smile-logo-template-design-illustration-vector.jpg'
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const list = () => (
        <Box style={{ width: 200 }} onClick={handleClose} >
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>

    )


    return (
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
            <MenuButtom color='inherit' onClick={handleOpen}>
                <Menu/>
            </MenuButtom>

            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>

                <Component to='/'>
                    <img src={reactLogo} alt="logo" style ={{ width: 150}} />
                    <Box style={{ display: 'flex'}}>
                        <SubHeading>Be
                            <Box component= "span" style={{ color: '#ffff00'}}> Happy</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt='sublogo'/>
                    </Box>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;