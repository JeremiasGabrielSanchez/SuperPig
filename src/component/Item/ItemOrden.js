import { HStack, VStack, Flex, Text, Image, Heading, Spacer, Button } from "@chakra-ui/react"
import { useAuth } from "../../context/authContext"

function ItemOrden({producto, calle}) {
  const { eliminar } = useAuth()

  const handleEliminar = (id) =>{
    eliminar(id)
  } 

  return (
    <>
      <Flex flexDir='row' alignItems='center' justifyContent='center'
      w='520px' bg='papayawhip' boxShadow='0px 3px 3px 1px black' fontFamily='sans-serif'
      display={['none', 'none', 'flex', 'flex']}
      >
        <VStack alignItems='center' p='10px'>
          <Flex justifyContent='flex-end' w='500px'>
            <Button onClick={handleEliminar(producto.uid)}
            color='red' bgColor='red.200' h='1.2rem' fontSize='1rem' fontFamily='sans-serif' textShadow='1px 1px black' _hover={{bgColor:'red.300'}}> X </Button>
          </Flex>
          <HStack textShadow='1px 1px 2px black' >
            <Heading color='green.400' fontSize='1.7rem'>Compraste:</Heading>
            <Heading color='gray.300' fontSize='1.3rem'>{producto.product}</Heading>
          </HStack>
          <HStack w='400px' pt='1rem' borderTop='1px' as='b'>
            <Image src={producto.image} mr='15px' w='100px' shadow='1px 1px 3px black'/>
            <Text bg='gray.200' p='10px' textShadow='1px 1px 1px white' shadow='1px 1px 3px black'>{producto.description}</Text>
          </HStack>

          <HStack  bg='blackAlpha.400' as='b' color='white' textShadow='1px 1px 1px black' shadow='1px 1px 3px black'>
            <Text p='5px'> Precio: ${producto.price}</Text>
            <Text p='5px' borderLeft='2px'>Cantidad: {producto.quantity}</Text>
            <Text p='5px' borderLeft='2px'>Total: ${producto.priceTotal}</Text>
          </HStack>

          <HStack pt='15px'>
            <Text as='b' textDecoration='underline'>Llega a:</Text>
            <Text>{calle}</Text>
            <Spacer spacing={2}/>
            <Text as='b' textDecoration='underline'> Orden de Compra:</Text>
            <Text>{producto.uid}</Text>
          </HStack>
          <Text></Text>
        </VStack>
      </Flex >

                        {/* Pantalla pequeña */}

      <Flex flexDir='row' alignItems='center' justifyContent='center'
      w='320px' bg='papayawhip' boxShadow='0px 3px 3px 1px black' fontFamily='sans-serif'
      display={['flex', 'flex','none', 'none']}
      >
        <VStack alignItems='center' justifyContent='center' p='5px' w='320px'>
          <Flex justifyContent='flex-end' w='300px'>
            <Button onClick={()=>eliminar(producto.uid)}
            color='red' bgColor='red.200' h='1.2rem' fontSize='1rem' fontFamily='sans-serif' textShadow='1px 1px black' _hover={{bgColor:'red.300'}}> X </Button>
          </Flex>
          <HStack textShadow='1px 1px 2px black'>
            <Heading color='green.400' fontSize='1.3rem'>Compraste:</Heading>
            <Heading color='gray.300' fontSize='1.1rem'>{producto.product}</Heading>
          </HStack>

          <HStack w='300px' pt='1rem' borderTop='1px' as='b'>
            <Image src={producto.image} mr='5px' w='70px' shadow='1px 1px 3px black'/>
            <Text fontSize='.8rem' bg='gray.200' p='5px' textShadow='1px 1px 1px white' shadow='1px 1px 3px black'>{producto.description}</Text>
          </HStack>

          <HStack fontSize='.8rem' bg='blackAlpha.400' as='b' color='white' textShadow='1px 1px 1px black' shadow='1px 1px 3px black'>
            <Text p='5px'> Precio: ${producto.price}</Text>
            <Text p='5px' borderLeft='2px'>Cantidad: {producto.quantity}</Text>
            <Text p='5px' borderLeft='2px'>Total: ${producto.priceTotal}</Text>
          </HStack>

          <HStack fontSize='.6rem' pt='10px'>
            <Text as='b' textDecoration='underline'>Llega a:</Text>
            <Text>{calle}</Text>
            <Spacer spacing={2}/>
              <Text as='b' textDecoration='underline'> Orden de Compra:</Text>
              <Text>{producto.uid}</Text>
          </HStack>
        </VStack>
      </Flex >
      
    </>
  )
}

export default ItemOrden