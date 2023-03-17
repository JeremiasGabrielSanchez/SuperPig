import { useEffect, useState } from "react"
import { useAuth } from "../../context/authContext"
import { Grid, GridItem, VStack, Text, Button, Image, Flex, Spacer } from "@chakra-ui/react"
import {db} from '../Tool/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Spinner } from '@chakra-ui/react'

function LoginView() {

  const [cliente, setClient] = useState([])
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
        return{
          ...doc.data(),
          id: doc.id
        }
      })
      setClient(clientes.find( clie => clie.email === user.email))
      setLoading(false)
      console.log(clientes.find( clie => clie.email === user.email))
    }) //fin del then
    .catch(err => (console.log(err)))

  }, [])
  console.log(cliente.id)
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
      <Grid
        m='3rem 1rem 3rem 1rem'
        h='475px'
        gridTemplateRows={'235px 1fr 0px'}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={2}
        fontFamily='sans-serif'
        textAlign='center'
      >
        <GridItem rowSpan={2} colSpan={1} bg='tomato' boxShadow='0px 3px 4px 1px black'>
          <VStack m='2rem auto 1rem auto' bgColor='blue.400' w='9.2rem' border='2px' boxShadow='0px 3px 5px 1px black'>
            <Image src={cliente.nroFoto} h='125px' p='0.2rem' bgColor='yellow.400' borderBottom='2px'/>
            <Text as='b' fontSize='1rem' p='0.2rem' color='white' textShadow='1px 1px 1px black'> {cliente.name} {cliente.lastName} </Text>
          </VStack> 

          <Text color='white' fontSize='1.2rem' as='b' textShadow='1px 1px 1px black'>Información Personal</Text>

          <Flex flexDir='column' alignItems='flex-start' m='.5rem .5rem 0 .5rem' p='.5rem' fontSize='1rem' as='b' color='white' bgColor='blackAlpha.400'>
            <Text m='0 auto .5rem auto'> {cliente.email}</Text>
            <Text>País: {cliente.country}</Text>
            <Text>Casa: {cliente.street}</Text>
            <Text>Telefono: {cliente.phone}</Text>
          </Flex>
          <Button m='1rem' bgColor='blue.400' color='white' textShadow='1px 1px 1px black' border='2px' borderColor='black' _hover={{boxShadow:'0px 3px 3px 1px black'}} onClick={handleLogout}>Cerrar Sesion</Button>
        </GridItem>

        <GridItem colSpan={2} bg='papayawhip' boxShadow='0px 3px 3px 1px black'></GridItem>
    </Grid>
    }
    </>
  )
}

export default LoginView