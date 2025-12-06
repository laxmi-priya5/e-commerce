import {useContext } from 'react'
import { CartContext } from '../Context/cartContext';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Navbar = ()=>{
    const {cart} = useContext(CartContext);
    const wish = useSelector((store)=>store.wish.item);
    return(
    
        <div className="w-full bg-blue-600 flex item-center p-3 gap-4">
        <h1 className="text-white font-bold">Flipkart</h1>
        <input type="text" placeholder="search..."  className="flex-1 p-2 rounded outline-none"/>

        {/* <button>cart-{`${cart.length} items`}</button> */}
         <div className='flex gap-5'>
        <Link to='/cart'>  
       
        <div className="relative ">
            <span className='text-3xl'>🛒</span>
            <span className="absolute-top-2-right-1 text-xs px-1 bg-red-600 rounded-full text-white">{cart.length}</span>
        </div>
        </Link>
        <Link to='/wish'>
        <div className="relative">
            <span className='text-3xl'>🩷</span>
            <span className="absolute-top-2-right-1 text-xs px-1 bg-red-600 rounded-full text-white">{wish ? wish.length : 0}</span>
        </div>
        </Link>
        
        </div>
       </div>
      
    )
}

export default Navbar;