import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Flex } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({nombre, categoria, img, precio, id,stock}) => {
  return (
    <Flex margin={50}>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={img}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
      <Text> {categoria}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      {precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup>
      <Button><Link to={`/producto/${id}`}>
      Ver detalle</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
  <ItemCount stock={stock} initialValue={1}/>
</Card>
    </Flex>
  )
}

export default Item