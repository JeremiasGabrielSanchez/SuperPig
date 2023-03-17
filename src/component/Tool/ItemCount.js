import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Text, Heading, Button, Flex, HStack } from '@chakra-ui/react' 
import {FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import CartWidget from '../AllNavBar/CartWidget';
import { useAuth } from '../../context/authContext';
import { useCartContext } from '../../context/CartContext';
import ItemUser from '../Item/ItemUser';

function ItemCount({stock, precio, onAdd}) {

  const {user} = useAuth()

  const {addToUser, confirmarCompra}  = useCartContext()

  const [confirmar, setConfirmar] = useState(false)
  const onUser = (cantidad) =>{
    addToUser(stock, cantidad, user)
    setConfirmar(true)
  } 
  
  const [count, setCount] = useState(1)

  const suma = () => count < stock.stock && setCount(count + 1)

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
          <Text fontSize='0.8rem' color='green.600' textShadow='0.5px 0.5px #000'> Stock: {stock.stock} </Text>
        </Flex>

      </Flex>
        
        <Heading ml='1rem'> ${precio} </Heading>

    </Flex>
      {user
      ?
      <>
        <Button bgColor="#aaa8a8f8" color="white" border="2px" borderColor="yellow.400" width="6rem"
        _hover={{color:"#535353", bgColor:"#c7c6c6f8", borderColor:"yellow.200"}}
        onClick={()=> onAdd(count)}> 
          <CartWidget/> 
        </Button>
        {!confirmar
          ?
          <ItemUser cantidad={count} onUser={onUser}></ItemUser>
          :
          <NavLink to='/user'>
            <Button bgColor='blue.300' onClick={()=>confirmarCompra()}> Confirmar</Button>
          </NavLink>
        }
      </>
      :
      <Flex flexDir='column' experimental_spaceY={-2} mt='.4rem' alignItems='center' bgColor='blackAlpha.300' border='1px'>
      <HStack spacing={1} m='.5rem 2rem'>
        <Text color='gray.500' textShadow='1px 1px 1px black'>Debes</Text>
        <NavLink to='/user'>
          <Text as='b' color='blue.500' textShadow='1px 1px 1px black' _hover={{textDecoration:'underline'}}>iniciar Sesión</Text>
        </NavLink>
      </HStack>
        <Text color='gray.500' textShadow='1px 1px 1px black' pb='.5rem'>para hacer tu compra</Text>
      </Flex> 
      }
      

    </Flex>
  )
}

export default ItemCount