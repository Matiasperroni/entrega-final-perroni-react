import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProducto(data))
  }, [])
  
  
  return (
    <div>
    <h1>{producto.title}</h1>
    <h2>{producto.description}</h2>
    <h3>{producto.category}</h3>
    <img src={producto.image} alt="" />
    </div>
  )
}

export default ItemDetailContainer