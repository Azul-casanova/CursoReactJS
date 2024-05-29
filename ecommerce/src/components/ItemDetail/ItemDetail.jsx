import React from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Button, Divider, Flex } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({nombre, precio, img, descripcion, stock}) => {
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
          <ItemCount stock={"stock"} initialValue={1}/>

        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
      </CardFooter>
    </Card>
        </Flex>)}


export default ItemDetail