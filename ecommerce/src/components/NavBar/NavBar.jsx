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
  } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div>
        <Heading as='h2' size='xl'>
        Esto es muy feo
        </Heading>
<Menu>
  <MenuButton as={Button} colorScheme='pink'>
    Home
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
        <CartWidget/>
    </div>
  )
}

export default NavBar