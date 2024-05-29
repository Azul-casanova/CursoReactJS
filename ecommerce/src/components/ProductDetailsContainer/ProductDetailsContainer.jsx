import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductId } from '../../data/asyncMock'
import { useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ProductDetailsContainer = () => {
  const [producto, setProducto] = useState({})
  const {productId} = useParams()
  
  useEffect(()=>{
    getProductId(productId)
    .then((prod)=>setProducto(prod))
    .catch((error)=> console.log(error)) 
  })
  
  
  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ProductDetailsContainer