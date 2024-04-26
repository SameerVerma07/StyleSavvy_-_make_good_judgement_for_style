import { Typography,Box,styled, Table, TableRow, TableBody, TableCell} from "@mui/material";
import SuperCoin from './SuperCoin.png';

import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-Size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right:10px;
    color: #00CC00;
    font-size: 15px;
`;

const ColumnText = styled(TableRow)`
    font-size:14px;
    vertical-align: baseline;
    & > td {
        font-size:14px;
        margin-top:10px;
        border: none;
    }
`



const ProductDetail = ({product}) => {
    const fassured = 'https://cdn-icons-png.flaticon.com/512/477/477469.png?w=740&t=st=1685302924~exp=1685303524~hmac=539b55dd48ac66a2d306829d7396a5f980f258933c0282407bdf809309d3604b'
    // const adURl='E:/Flipkart-clone/client/src/SuperCoin.png';
    
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    return(
        <>
        <Typography style={{ marginTop: 5,fontSize:25}}>{product.title.longTitle}</Typography>
        <Typography style={{ marginTop: 5, color: '#878787', fontSize:14}}>
            8 rating and 1 review
            <Box component='span'><img src={fassured}  style={{width: 40, marginLeft:20}} alt='productlogo'/></Box>
        </Typography>
        <Typography>
            <Box component='span' style={{ fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: '#878787'}} ><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: '#388E3C'}}>{product.price.discount}</Box>&nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography>Avilable Offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>10% off on Bank of Baroda Credit Card Transactions, up to ₹1,500 on orders of ₹8,000 and above T&C</Typography>
            <Typography><StyledBadge/>Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above T&C</Typography>
            <Typography><StyledBadge/>10% off on Bank of Baroda Credit Card EMI Transactions, up to ₹2,000 on orders of ₹8,000 and above T&C</Typography>
            <Typography><StyledBadge/>Extra ₹4,999 Off on Hero Bikes & Scooters on purchase of ₹80,000 or more T&C</Typography>
            <Typography><StyledBadge/>Sign up for StyleSavvy Pay Later and get StyleSavvy Gift Card worth up to ₹500* T&C</Typography>
            <Typography><StyledBadge/>No cost EMI ₹1,417/month. Standard EMI also available T&C</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40 </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Warrnty</TableCell>
                    <TableCell style={{fontWeight: 600 }}>6 Months</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Return Poilcy</TableCell>
                    <TableCell>
                        <Box component='span' style={{fontWeight: 600 }}>14 Days Return </Box>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Seller & Other Detilas</TableCell>
                    <TableCell >
                        <Box component='span' style={{fontWeight: 600 , color: '#2874f0'}} > DesignSight</Box>
                        <Typography>GST Invoice Avilable</Typography>
                        <Typography>View more Sellers starting from ₹{product.price.cost}</Typography>  
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colspan={1}>
                        <img src={SuperCoin} style={{ width: 150 }} alt="Supercoin"/>
                    </TableCell>
                    <TableCell>
                        <Box component='span' style={{color: '#878787',textAlign: 'center' }}>For Every ₹100 spend you get 3 supercoin Max 51 SuperCoin you can Get</Box>
                    </TableCell> 
                </ColumnText>

                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Description</TableCell>
                    <TableCell >{product.description} </TableCell>
                </ColumnText>
            </TableBody>
        </Table>
        </>
    )
};

export default ProductDetail;