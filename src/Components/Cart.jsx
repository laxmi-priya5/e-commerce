import {useContext} from 'react'
import { CartContext } from '../Context/cartContext'

const Cart = ()=>{
    const {cart} = useContext(CartContext);

    return(
        <div className='p-4'>
         <h1 className='text-2xl font-bold'>Your cart </h1>
         {cart.length === 0 ? (<h1 className="text-2xl mt-4 text-gray-500">:Your cart is empty</h1>)
         :(<div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">{cart.map((item,index)=>(
            <div  key={index} >
                  <img src={item.images[0]}className='w-32 h-32 h-40 object-contain rounded '/>
                  <h2 className='font-semibold text-gray-800 mt-3 text-lg truncate'>{item.title}</h2>
                   <p className='mt-1 font-bold text-blue-600 text-md'>{item.price}</p>
            </div>
         ))}</div>)}
        </div>
    )
}

export default Cart ;