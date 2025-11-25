import {useContext} from 'react'
import { CartContext } from '../Context/cartContext';
const Navbar = ()=>{
    const {cart} = useContext(CartContext);
    return(
        <div className="w-full bg-blue-600 flex item-center p-3 gap-4">
        <h1 className="text-white font-bold">Flipkart</h1>
        <input type="text" placeholder="search..."  className="flex-1 p-2 rounded outline-none"/>

        <button>cart-{`${cart.length} items`}</button>
        </div>
    )
}

export default Navbar;