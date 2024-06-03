import React, { useContext } from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Button, Divider, Flex } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import context from '../../context/CartContext'



const ItemDetail = ({id, nombre, precio, img, descripcion, stock}) => {
  const onAdd = ((quantity)=>{
    const item = {
      id,
      nombre,
      precio,
      img,
      stock
    }
    ItemAdd(item, quantity)
  })

  const { ItemAdd } = useContext(context)
  return (
    <Flex backgroundColor={'green'} justify={'center'}>
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={img}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text> {descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
          {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
      <ItemCount stock={stock} initialValue={1} onAdd={ItemAdd}/>
      </CardFooter>
    </Card>
        </Flex>)}


export default ItemDetail