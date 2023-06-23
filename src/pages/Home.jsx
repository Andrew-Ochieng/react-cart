import Products from "../components/Products";

const Home = () => {
    return ( 
        <>
            <div className='flex flex-col justify-center bg-gray-100'>
                <div className='flex justify-between items-center md:px-12 px-4 py-5'>
                    <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
                </div>
                <Products />
            </div>
        </>
    );
}
 
export default Home;