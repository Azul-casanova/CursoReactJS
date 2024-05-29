import React, { useEffect, useState } from 'react'
import { getProductCategory, getProducts } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { Flex } from '@chakra-ui/react';

const ItemListContainer = () => {
 const [products, setProducts] = useState([]);
 const [ loading, setLoading ] = useState(true)

 const {categoryId} = useParams()

 useEffect(()=> {
  setLoading(true)
  const dataProductos = categoryId ? getProductCategory(categoryId) : getProducts()


  dataProductos
  .then((el)=>{setProducts(el)})
  .catch((error)=> console.log(error)) 
  .finally(() => setLoading(false))
 },[categoryId])


  return (
    <div>
      { loading ?  <Flex justify={'center'} align={'center'} h={'50vh'}>
      <BounceLoader/> </Flex> :
      <Flex ><ItemList products={products}/></Flex>
      }
    </div>
  )
}
export default ItemListContainer