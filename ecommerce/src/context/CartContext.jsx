import React, { createContext, useState } from 'react'


const context = createContext()

export const ContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    
    const ItemAdd = (detalleProducto, quantity)=> {
      const newProduct = { 
        ...detalleProducto,
        quantity}
    if(productoRepetido(newProduct.id)) {
      const mapeoCart = cart.map((el)=>{
        if(el.id === newProduct.id){
          return {...el, quantity: el.quantity + newProduct.quantity}
        }
        return el
      })
      setCart(mapeoCart)
    }else{
      setCart([...cart, newProduct])
    }
  }
  

    const productoRepetido = (id)=>{
      return cart.some((prod)=>
        prod.id === id
      )
    }

    const removeItem = (id)=>{
      const itemDelete = cart.filter((prod)=> prod.id !== id)
    
    setCart([...itemDelete]) }

    const VaciarCart = ()=> {
      setCart([])
    }


const getTotal = ()=> {
  const total= cart.reduce((acc, item)=>
    acc + item.precio * item.quantity, 0)
  return total
}

  return (
    <context.Provider value={{
        cart,
        ItemAdd,
        removeItem,
        getTotal,
        VaciarCart
    }}>
    {children}

    </context.Provider>
  )
}


export default context