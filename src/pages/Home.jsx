import Products from "../components/Products";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    async function getProducts() {
        try {
            let res = await axios.get('https://dummyjson.com/products') 
            let productList = res.data
            setIsLoading(true)
            setProducts(productList.products)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    return ( 
        <>
            <div className='flex flex-col justify-center'>
                <div className='flex justify-between items-center md:px-12 px-4 py-4'>
                    <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
                </div>
                <p className="md:px-12 px-4 text-red-500 md:text-2xl font-medium">{!isLoading ? "Products are loading..." : isLoading}</p>
                
                <Products products={products} />
            </div>
        </>
    );
}
 
export default Home;