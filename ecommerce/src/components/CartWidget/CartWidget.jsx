import { Box } from '@chakra-ui/react';
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {
  return (
    <Box background={'white'}>
        <TiShoppingCart />
    </Box>
  )
}

export default CartWidget