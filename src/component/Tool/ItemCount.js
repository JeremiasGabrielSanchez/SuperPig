import { useState } from 'react'
import { Text, Heading, Button, Flex } from '@chakra-ui/react' 
import {FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import CartWidget from '../AllNavBar/CartWidget';

function ItemCount({stock, precio, onAdd}) {

    const [count, setCount] = useState(1)

    // const handelClick = () => onAdd(count) 

    const suma = () => count < stock && setCount(count + 1)

    const resta = () => count > 1 && setCount(count - 1)

  return (
    <Flex alignItems='flex-end' flexDir='column'>

    <Flex  alignItems="center" mb='0.5rem'>

      <Flex flexDir='column' alignItems="center">

        <Flex alignItems="center" ml='1rem'>
          <Button bg='#f1efeff8' _hover={{backgroundColor:'#f1efeff8', color:'red', fontSize:'1.1rem'}} onClick={resta}> <FaRegMinusSquare/> </Button>
          <Text> {count} </Text>
          <Button  bg='#f1efeff8' _hover={{backgroundColor:'#f1efeff8', color:'green', fontSize:'1.1rem'}} onClick={suma}> <FaRegPlusSquare/> </Button>
        </Flex>

        <Flex borderTop='1px'>
          <Text fontSize='0.8rem' color='green.600' textShadow='0.5px 0.5px #000'> Stock: {stock} </Text>
        </Flex>

      </Flex>
        
        <Heading ml='1rem'> ${precio} </Heading>

    </Flex>

      <Button bgColor="#aaa8a8f8" color="white" border="2px" borderColor="yellow.400" width="6rem"
      _hover={{color:"#535353", bgColor:"#c7c6c6f8", borderColor:"yellow.200"}}
      onClick={()=> onAdd(count)}> 
        <CartWidget/> 
      </Button>

    </Flex>
  )
}

export default ItemCount