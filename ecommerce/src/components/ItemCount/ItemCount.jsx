import { Button, Flex, Heading } from '@chakra-ui/react';
import useCounter from '../../../../hooks/UseCounter';

const ItemCount = ({stock, initialValue, onAdd}) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock)

    return (
        <div>
        <Flex>
        <Button onClick={decrementar}>-</Button>
        <Heading>{count}</Heading>
        <Button onClick={incrementar}>+</Button>
        <Button   onClick={() => onAdd(count)} ml={2}>Agregar al carrito</Button>
        </Flex>
    </div>
  )
}

export default ItemCount