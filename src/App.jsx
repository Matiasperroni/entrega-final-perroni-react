import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import axios from "axios"




function App() {
  
const [productos, setProductos] = useState([]);
const getProductos = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  setProductos(res.data);

}
useEffect(() => {
  getProductos()
}, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer productos={productos} />} />
        <Route path='/category/:id' element={<ItemListContainer productos={productos} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </div>
  )
}

export default App

