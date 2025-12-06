import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar'
import Catagory from './Components/Catagory'
import Product from './Components/Product'
import { Store } from './utils/store'
import {Provider} from 'react-redux'

function App() {


  return (
    <>
     
      <Provider store={Store}>
       <Navbar/>
       <Catagory/>
       <Product/>
      </Provider>
    
    </>
  )
}

export default App
