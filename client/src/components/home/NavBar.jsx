

import { Box,styled, Typography } from "@mui/material";

import { navData } from "../../constants/data";

const Component = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '55px 130px 0px 130px',
    justifyContent: 'space-between',
    overflow:'hidden',
    [theme.breakpoints.down('lg')]:{
        margin:0
    }
}));
const Conatiner = styled(Box)`
    padding:12px 8px;
    text-align: center;
`

const Text =styled(Typography)`
    font-size: 15px;
    font-weight: 600;
    font-family: inherit;
`

const NavBar =() => {
    return(
        <Component>
            {
                navData.map(data=>(
                    <Conatiner>
                        <img src={data.url} alt="nav" style = {{width: 64}}/>
                        <Text>{data.text}</Text>
                    </Conatiner>
                ))
                
            }
        </Component>
    )
}

export default NavBar;