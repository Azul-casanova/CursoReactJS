import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Heading,
  Flex,
  Center,
  Box,
  } from '@chakra-ui/react'
import Logo from '../../assets/logo/logo.jpg'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <Flex justify={'space-between'} align={'center'} className='NavBar'>
          
        <Heading >
          <Link to={'/'}>
        <img src={Logo}/></Link>
        </Heading>
<Menu>
  <MenuButton as={Button} colorScheme='pink'>
    Productos
  </MenuButton>
  <MenuList>
    <MenuGroup title='Mujer'>
      <MenuItem><Link to='/categoria/remera'>Remeras</Link></MenuItem>
      <MenuItem><Link to='/categoria/pantalon'>Pantalones</Link></MenuItem>
      <MenuItem><Link to='/categoria/abrigo'>Abrigos</Link></MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Quienes somos</MenuItem>
      <MenuItem>Preguntas frecuentes</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
        <CartWidget/>
    </Flex>

  )
}

export default NavBar