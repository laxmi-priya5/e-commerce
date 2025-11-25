import {useState , useEffect} from 'react'
import ProductCard from './ProductCard';
const Product = ()=>{
    const [products , setProducts] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])           

    const fetchData = async ()=>{
        const data =await  fetch("https://dummyjson.com/products");
        const json = await data.json();
        console.log(json)
        setProducts(json.products);
    }
    return(
    <>
       {/* <div className='flex flex-wrap gap-8 mx-auto w-3/4' > */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {products.map((product , index)=>(
            
           <ProductCard  key={index} product={product}/>
        ))}
       </div>

       
    </>
    )
}
export default Product;
