import React, { useContext } from 'react'
import context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Cart = () => {
const {cart, ItemAdd, removeItem, getTotal, VacialCart } = useContext(context)

  return (

        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Nombre</Th>
        <Th>Precio</Th>
        <Th>Cantidad</Th>
        <Th>Subtotal</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
            cart.map((prod)=>{
      <Tr key={prod.id}>
        <Td>{prod.nombre}</Td>
        <Td>{prod.precio}</Td>
        <Td>{prod.quantity}</Td>
        <Td>{prod.precio * prod.quantity}</Td>
        <Td>
        <button onClick={() => removeItem(prod.id)}>Eliminar</button>
        </Td>
      </Tr>
    })}
    </Tbody>

    <Tfoot>
    </Tfoot>
  </Table>
</TableContainer>

  )
}

export default Cart