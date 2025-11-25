import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
const ProductCard = ({product})=>{

    const {addToCart} = useContext(CartContext);
    return(
      
        <div className='border rounded p-4  overflow-hidden  hover:shadow-lg hover:scale-105 transition-transform duration-300'>
           <img src={product.images[0]}className='w-full h-40 object-contain rounded '/>
           <h2 className='font-semibold text-gray-800 mt-3 text-lg truncate'>{product.title}</h2>
           <p className='mt-1 font-bold text-blue-600 text-md'>{product.price}</p>
           <button className='border rounded-lg p-1 bg-gray-200 font-bold cursor-pointer' onClick={()=>addToCart(product)}>Add to Cart</button>
       </div>
  
    )
}

export default ProductCard;