import React from 'react'
import { Flex, Text, Heading } from '@chakra-ui/react'
// import '../Style/vistaPrincipalProducto.css'

function Item({producto}) {

  console.log(producto)

  return (   

      <Flex flexDir="column" alignItems="center" textAlign="center" m="1.3rem" width="90%"
      border="2px" borderRadius="5px" borderColor="yellow.300" bgColor="#666666d2"
      color="white" textShadow='2px 2px #000'>

        <Heading padding="0.7rem">{producto.product}</Heading>
        
        <img src={producto.image} alt="Imagen del Producto" width="60%"/>
        
        <Text p="5px" bgColor="#5555557a" borderRadius="5px" mt="0.7rem" fontWeight="black" fontSize="1.2rem"> {producto.description} </Text>
        
        <Text p="0.7rem" m="5px" fontSize="1.5rem" border="2px" borderRadius="5px" borderColor="yellow.300"> ${producto.price} </Text>

      </Flex>
    
  )
}

export default Item