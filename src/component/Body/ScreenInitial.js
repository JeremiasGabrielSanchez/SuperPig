import React from 'react'
import {Login} from '../user/Login'
import { NavLink } from 'react-router-dom';
import { Text, Flex, VStack } from '@chakra-ui/react'
import BgGraund from '../../assets/bg-principal2.png'

function ScreenInitial() {

  console.log('MamaHuevo')

  return (
    <Flex>
      <Flex> 
        <img src={BgGraund} width="100%" alt="" />   
        <Flex 
        position="absolute" 
        width='36%'
        height='25rem' 
        alignItems="center" 
        justifyContent="center" 
        pt='2rem'
        m='8rem 0 0 5rem'
        >
          <VStack>
            <Login/>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ScreenInitial