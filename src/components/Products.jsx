
const Products = ({products}) => {
    

    return ( 
        <>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-4 px-4'>
                {products.map(product => (
                    <div key={product.id} className='bg-white shadow-md rounded-2xl p-4'>
                    <img src={product.thumbnail} alt={product.title} className='rounded-md h-48' />
                    <div className='mt-4'>
                        <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                        <p className='mt-2 text-cyan-600 text-sm'>{product.description.slice(0, 40)}...</p>
                        <p className='mt-2 text-cyan-600'>Ksh {product.price * 100}</p>
                    </div>
                    <div className='mt-6 flex justify-between items-center'>
                        <button className='px-4 md:py-3 py-2 bg-cyan-800 text-white text-xs font-bold uppercase rounded-md hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700'>Add to cart</button>
                    </div>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Products;