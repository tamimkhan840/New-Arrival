/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";




export const ShopContext = createContext();


export const ContextProvider = ({ children }) => {


    const [flashData, setFlashData] = useState([])
    const [bestSelling, setBestSelling] = useState([])
    const [ourProduct, setOurProduct] = useState([])
    const [product, setProduct] = useState([])
    const [addToCart,setAddToCart] = useState([])
    const [favorite, setFavorite] = useState([])
    const [onOpen,setOnOpen] = useState(false)

    console.log(favorite);
    



    useEffect(() => {
        async function fetchAllData() {
            try {
                const flashResponse = await axios.get('https://fakestoreapi.com/products?limit=7');
                const bestSellingResponse = await axios.get('https://fakestoreapi.com/products?limit=4');
                const ourProductResponse = await axios.get('https://fakestoreapi.com/products?limit=8');

                setFlashData(flashResponse.data);
                setBestSelling(bestSellingResponse.data);
                setOurProduct(ourProductResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchAllData();
    }, []);


    const value = {
        flashData,
        setFlashData,
        addToCart,
        setAddToCart,
        favorite,
        setFavorite,
        onOpen,
        setOnOpen,
        bestSelling,
        ourProduct,
        setProduct,
        product
    }



    return (
        <ShopContext.Provider value={value}>
         {children}
        </ShopContext.Provider>
    )
}