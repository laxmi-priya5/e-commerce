import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar'
import Catagory from './Components/Catagory'
import Product from './Components/Product'
import { Store } from './utils/Store'
import {Provider} from 'react-redux'
import Footer from './Components/Footer'

function App() {


  return (
    <>
     
      <Provider store={Store}>
       <Navbar/>
       <Catagory/>
       <Product/>
       <Footer/>
      </Provider>
      
    
    </>
  )
}

export default App
