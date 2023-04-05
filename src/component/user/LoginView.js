import { useEffect, useState } from "react"
import { useAuth } from "../../context/authContext"
import { Grid, VStack, Text, Button, Image, Flex } from "@chakra-ui/react"
import {db} from '../Tool/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Spinner } from '@chakra-ui/react'
import ItemOrden from '../Item/ItemOrden'

function LoginView() {

  const [cliente, setClient] = useState([])
  const [orden, setOrden] = useState([])
  const {user, logout} = useAuth()
  const [loading, setLoading] = useState(true)

  const handleLogout = async()=>{
    await logout()
  }

  useEffect(()=>{

    const usuario = collection(db, "usuarios")
    const consulta = getDocs(usuario)
    consulta
    .then( res =>{
      const clientes = res.docs.map(doc => {
        return {...doc.data()}
      })
      setClient(clientes.find( clie => clie.email === user.email))
      setLoading(false)
    }) //fin del then
    .catch(err => (console.log(err)))


    const compra = collection(db, "orders")
    const ordenCompra = getDocs(compra)
    ordenCompra
    .then(res =>{
      const pedido = res.docs.map(doc =>{
        return {...doc.data(), uid: doc.id }
      })
      const newOrden = pedido.filter(ped => ped.email === user.email)
      setOrden(newOrden)
    })
    .catch(err => (console.log(err)))
    
  }, [user.email])
  
  return (
    <> 
    {
      loading 
      ?
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        ml='49%'
        mt='17%'
      />
      :
      <>
      <Flex justifyContent='center' bg='gray' h='100%' textAlign='center'
      display={['none', 'none', 'flex', 'flex']}>

        <Flex flexDir='column' alignItems='center' h='38.5rem' bg='tomato' boxShadow='0px 3px 4px 1px black' m='4.5rem .5rem 50% 1rem'>

          <VStack m='2rem auto 1rem auto' bgColor='blue.400' w='9.2rem' border='2px' boxShadow='0px 3px 5px 1px black'>
            <Image src={cliente.nroFoto} h='125px' p='.2rem' bgColor='yellow.400' borderBottom='2px'/>
            <Text as='b' fontSize='1rem' p='0 .1rem .5rem .1rem' color='white' textShadow='1px 1px 1px black'> {cliente.name} {cliente.lastName} </Text>
          </VStack>

          <Text color='white' fontSize='1.2rem' as='b' mt='1rem' textShadow='1px 1px 1px black'>Información Personal</Text>

          <Flex flexDir='column' alignItems='flex-start' m='.5rem .5rem 0 .5rem' p='.5rem' fontSize='1rem' as='b' color='white' bgColor='blackAlpha.400'>
            <Text m='0 auto .5rem auto'> {cliente.email}</Text>
            <Text>País: {cliente.country}</Text>
            <Text>Casa: {cliente.street}</Text>
            <Text>Telefono: {cliente.phone}</Text>
          </Flex>
          <Button m='3rem 1rem .5rem 1rem ' w='11rem' bgColor='blue.400' color='white' textShadow='1px 1px 1px black' border='2px' borderColor='black' _hover={{boxShadow:'0px 3px 3px 1px black'}} >Editar Perfil</Button>
          <Button w='11rem' bgColor='blue.400' color='white' textShadow='1px 1px 1px black' border='2px' borderColor='black' _hover={{boxShadow:'0px 3px 3px 1px black'}} >Cambiar Contraseña</Button>
          <Button m='.5rem' mb='1.5rem' w='11rem' bgColor='blue.400' color='white' textShadow='1px 1px 1px black' border='2px' borderColor='black' _hover={{boxShadow:'0px 3px 3px 1px black'}} onClick={handleLogout}>Cerrar Sesion</Button>
        </Flex>
        <VStack>

          <Text mt='1rem' w='1050px' bg='white'fontSize='2rem' borderRadius='10px' boxShadow='0px 2px 3px 1px black' as='b' textShadow='1px 1px 1px green'>Orden de compra</Text>
          <Grid
            m='3rem 1rem 3rem 1rem'
            h='230px'
            templateColumns="repeat(2, 1fr)" 
            gap="3"
            fontFamily='sans-serif'
            textAlign='center'
            >
              {orden.map(ped => <ItemOrden key={ped.uid} producto={ped} calle={cliente.street}/>)}
          </Grid>
              </VStack>
    </Flex>

                      {/* Pantalla pequeña */}

    <Flex justifyContent='center' bg='gray' h='100%' textAlign='center'
      display={['flex', 'flex','none', 'none']}>

        <Flex flexDir='column' alignItems='center' h='38.5rem' bg='tomato' boxShadow='0px 3px 4px 1px black' m='4.5rem .5rem 50% 1rem'>

          <VStack m='2rem auto 1rem auto' bgColor='blue.400' w='9.2rem' border='2px' boxShadow='0px 3px 5px 1px black'>
            <Image src={cliente.nroFoto} h='125px' p='.2rem' bgColor='yellow.400' borderBottom='2px'/>
            <Text as='b' fontSize='1rem' p='0 .1rem .5rem .1rem' color='white' textShadow='1px 1px 1px black'> {cliente.name} {cliente.lastName} </Text>
          </VStack>

          <Text color='white' fontSize='1.2rem' as='b' mt='1rem' textShadow='1px 1px 1px black'>Información Personal</Text>

          <Flex flexDir='column' alignItems='flex-start' m='.5rem .5rem 0 .5rem' p='.5rem' fontSize='1rem' as='b' color='white' bgColor='blackAlpha.400'>
            <Text m='0 auto .5rem auto'> {cliente.email}</Text>
            <Text>País: {cliente.country}</Text>
            <Text>Casa: {cliente.street}</Text>
            <Text>Telefono: {cliente.phone}</Text>
          </Flex>
          <Button m='3rem 1rem .5rem 1rem ' w='11rem' bgColor='blue.400' color='white' textShadow='1px 1px 1px black' border='2px' borderColor='black' _hover={{boxShadow:'0px 3px 3px 1px black'}} >Editar Perfil</Button>
          <Button w='11rem' bgColor='blue.400' color='white' textShadow='1px 1px 1px black' border='2px' borderColor='black' _hover={{boxShadow:'0px 3px 3px 1px black'}} >Cambiar Contraseña</Button>
          <Button m='.5rem' mb='1.5rem' w='11rem' bgColor='blue.400' color='white' textShadow='1px 1px 1px black' border='2px' borderColor='black' _hover={{boxShadow:'0px 3px 3px 1px black'}} onClick={handleLogout}>Cerrar Sesion</Button>
        </Flex>
        <VStack>

          <Text mt='1rem' w='650px' bg='white'fontSize='2rem' borderRadius='10px' boxShadow='0px 2px 3px 1px black' as='b' textShadow='1px 1px 1px green'>Orden de compra</Text>
          <Grid
            m='3rem 1rem 3rem 1rem'
            h='230px'
            templateColumns="repeat(2, 1fr)" 
            gap="3"
            fontFamily='sans-serif'
            textAlign='center'
            >
              {orden.map(ped => <ItemOrden key={ped.uid} producto={ped} calle={cliente.street}/>)}
          </Grid>
              </VStack>
    </Flex>
    </>
    }
    </>
  )
}

export default LoginView