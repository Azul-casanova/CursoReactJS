import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Flex background={'white'}>
      <Link to={'/cart'}> <TiShoppingCart />
</Link>
    </Flex>
  )
}

export default CartWidget