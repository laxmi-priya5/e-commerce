import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Context/cartContext';
const Productpage = () => {

    // now using useParams try to get id from url 
  const {id} = useParams();

  const { addToCart } = useContext(CartContext);

  const [product , setProduct]=useState(null);
  const [loading , setloading] = useState(true);
  const [currentImageIndex , setCurrentImageIndex] = useState(0);
  
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data => {
        setProduct(data)
        setloading(false)
    });
  },[id])
  
  if(loading)  return <h1>Loading...</h1>

  return (
    <div className='mx-auto p-4 max-w-5xl'>
        <div className='flex flex-col md:flex-row gap-8 '>
        <div className='md:w-1/2 flex flex-col gap-2'>
           <img  className='border rounded p-2 h-80 w-full object-contain'src={product.images[currentImageIndex]} alt={product.title}/>

           <div className='flex gap-2 object-contain overflow-x-auto'>
             {product.images.map((img , ind)=>(
                <img className='h-20 w-20 border rounded cursor-pointer hover:border-blue-600 transform hover:shadow-lg hover:scale-90  transition-transform duration-300 ' key={ind} src={img} alt='thumbnail'
                onClick={()=>setCurrentImageIndex(ind)}
                />
             ))}
           </div>
        </div>
        <div className='md:w-1/2 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>{product.title}</h2>
            <p className='text-gray-700 text-lg'>{product.description}</p>
            <p className='text-blue-500 font-semibold'>Price: ₹{product.price}</p>
            <p className='text-gray-600 font-semibold'>Rating: ⭐{product.rating}</p>
            <p className='text-gray-600 '>Brand:<span className='font-semibold'> {product.brand}</span></p>
            <p className='text-gray-600 '>Category:<span className='font-semibold'> {product.category}</span></p>
            <p className='text-gray-600 '>Discount:<span className='font-semibold'>  {product.discountPercentage}%</span></p>
            <p className='text-gray-600 '>stock left:<span className='font-semibold'>{product.stock}</span> </p>
            <button onClick={()=>{addToCart(product)}} className='bg-blue-600 py-2 px-4  text-white rounded w-fit cursor-pointer hover:bg-blue-700'>Add to Cart</button> 
        </div>
        
      </div>
    </div>
    
    
  )
}

export default Productpage