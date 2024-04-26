import { useEffect } from "react";

//components import from NavBar
import NavBar  from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSections";

import {Box, styled } from '@mui/material';

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector} from "react-redux";

const Component = styled(Box)`
    padding:  10px;
    background: #F2F2F2;
`
const Home = () => {

    const {products} = useSelector(state => state.getProducts);

    console.log(products);
    const dispatch  = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/> 
                <Slide products={products} title="Discount for You" timer={false}/>
                <Slide products={products} title="Suggested Items" timer={false}/>
                <Slide products={products} title="Top Selection"timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trendding Offer" timer={false}/>
                <Slide products={products} title="Season's Top Picks" timer={false}/>
                <Slide products={products} title="Top Deals for Accessories" timer={false}/>
                <Slide products={products} title="Others" timer={false}/>
            </Component>
            
        </>
        
    )
}

export default Home;