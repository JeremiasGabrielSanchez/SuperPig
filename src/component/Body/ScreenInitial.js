import React from 'react'
import { NavLink } from 'react-router-dom';
import { Heading, Text, Flex, VStack, Input } from '@chakra-ui/react'
import BgGraund from '../../assets/bg-principal1.png'

function ScreenInitial() {
  return (
    <Flex> 
      <img src={BgGraund} width="100%" alt="" />   
      <Flex 
      position="absolute" 
      bgColor="blackAlpha.400" 
      width='35%' 
      alignItems="center" 
      justifyContent="center" 
      m='7rem 0 0 5rem'
      border="2px" borderColor='blackAlpha.500' borderRadius='7px'
      >
        <VStack>
          <Heading color="white" m='1rem'> Usuario </Heading>
          <Input></Input>

          <NavLink to='/home'> 
            <Text color="yellow.600" fontSize='1rem' m='1rem' _hover={{fontSize:"1.05rem", color:'yellow.500'}}>Ir a la tienda</Text>
          </NavLink>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default ScreenInitial