import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Center, VStack, Text, Image, Button, Heading, Flex, Grid, GridItem, Spacer, HStack } from '@chakra-ui/react'
import carrito from '../../assets/carrito.png'
import compras from '../../assets/compra1.png';
import { useAuth } from "../../context/authContext"
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const [confirmar, setConfirmar] = useState(true)
  const { cartList, totalPrice, removeProduct, clean, addToUserOfCart, confirmarCompra } = useCartContext()

  const compra = (product, cantidad, precio) =>{
    addToUserOfCart(product, cantidad, precio, user)
    setConfirmar(false)
  }
  const {user} = useAuth()

  return (
    <Center bgImage={carrito}>
      <VStack>
        {cartList.map(prod => 
        <>
          <Grid
          key={prod.id}
          templateAreas={`"header header"
                          "nav main"`}
          gridTemplateRows={'65px 1fr 0px'}
          gridTemplateColumns={'160px 1fr'}       
          color='blackAlpha.700'
          fontWeight='bold'
          borderRadius='10px'
          border='2px'
          mt='1rem'
          w='100%'
          spacing={20}
          shadow='3px 3px 7px black'
        >
          <GridItem area={'header'} p='.5rem .5rem .5rem 1.5rem' justifyContent='flex-end' display='flex' alignItems='center' bg='whitesmoke' borderTopRadius='10px' borderBottom='2px'>
            <Heading as='b' textDecoration='underline'>{prod.product}</Heading>
            <Button onClick={()=>removeProduct(prod.id)} ml='7rem'
            color='red' bgColor='red.200' w='1rem' fontSize='1.5rem' fontFamily='sans-serif' textShadow='1px 1px black' _hover={{bgColor:'red.300'}}> X </Button>
          </GridItem>

          <GridItem area={'nav'} p='.5rem 0 .5rem 0' display='flex' justifyContent='center' bg='white' borderBottomLeftRadius='10px' borderRight='2px'>
            <Image src={prod.image} w='100px'></Image>
          </GridItem>

          <GridItem area={'main'} pl='2' bg='whiteAlpha.900' color='black' borderBottomRightRadius='10px'>
            <Flex flexDir='column' mt='5.8rem'>
              <Text as='b' fontSize='1.2rem'>cantidad: {prod.quantity}</Text>
              <HStack>
                <Text as='b' fontSize='1.2rem'>Sub-Total: ${prod.price * prod.quantity} </Text>
                {
                  !confirmar 
                  ?
                  <NavLink to='/user'>
                    <Button onClick={()=>confirmarCompra()}> Confirmar </Button>
                  </NavLink>
                  :
                  <Button onClick={()=>compra( prod, prod.quantity, prod.price)} bgColor='green.300'> Comprar </Button>
                }
                
              </HStack>
            </Flex>
          </GridItem>
        </Grid>
        <Spacer p='0.5rem'/>
      </>
        )}
        {cartList.length === 0 
          ? 
          <>
            <Text  mt='1rem' p='0 15px 0 15px' fontFamily='sans-serif' fontSize='3.5rem' as='b' 
            textShadow='3px 3px 5px black' color='gray.500' bgColor='whiteAlpha.800' 
            borderRadius='10px' border='2px' borderColor='blackAlpha.300' boxShadow='3px 3px 10px black'> Carrito Vacío </Text>
            <Image src={compras} w='500px'></Image>
          </>
          :
          <>

          <VStack p='6' mt='1rem' bgColor='whitesmoke' borderRadius='10px' border='2px' borderColor='blackAlpha.700' w='80%' shadow='3px 3px 7px black'>
            <Text as='b' fontSize='1.5rem'>Total: ${totalPrice()}</Text>
            <Button onClick={() => clean()} 
            bgColor='red.200' _hover={{bgColor:'red.300'}}
            fontFamily='sans-serif' textShadow='0.5px 0.5px white'> Vaciar Carrito </Button>
          </VStack>

          <Spacer p='1rem'/>
          </>  
        }
      </VStack>
    </Center>
    
  )
}

export default Cart