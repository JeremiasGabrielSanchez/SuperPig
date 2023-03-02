import React from 'react'
import { Flex, Text, Heading } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

function Item({producto}) {

  return (   
    <NavLink to={producto.id}>

      <Flex flexDir="column" alignItems="center" textAlign="center"  m="1rem 1.3rem 0rem 1.3rem" width="90%" height='98%'
      border="2px" borderRadius="5px" borderColor="yellow.300" bgColor="#666666d2"
      color="white" textShadow='2px 2px #000'>

        <Heading p="0.7rem 0 0.5rem 0" mb='0.7rem' borderBottom='2px' borderColor="yellow.300">{producto.product}</Heading>
        
        <img src={producto.image} alt="Imagen del Producto" width="90%"/>
        
        <Text p="5px 10px 5px 10px" bgColor="#5555557a" borderRadius="5px" m="0.7rem 1rem 0.7rem 1rem" fontWeight="black" fontSize="1.2rem"> {producto.description} </Text>
        
        <Text p="0.7rem" m="5px" fontSize="1.5rem" border="2px" borderRadius="5px" borderColor="yellow.300"> ${producto.price} </Text>

      </Flex>
    
    </NavLink>
  )
}

export default Item