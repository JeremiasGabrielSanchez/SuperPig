import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext'
import { useImageContext } from '../../context/ImageContext';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Tool/firebase";
import {Box, HStack, VStack, Flex, Input, InputGroup, InputRightElement, FormLabel, Heading, Button, Text, Image, Checkbox, Icon } from '@chakra-ui/react';
import imagen from '../../assets/bg-body.png'
import { FaNapster } from "react-icons/fa";
import { WarningIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons'

export const Registrarse = () => {

  const [user, setUser] = useState({
    email: '',
    password:'',
  });
  
  const [display, changeDisplay] = useState('none')
  const [show, setShow] = useState(false)
  const [perfil, setPerfil] = useState()
  const [error, setError] = useState()

  const { signup } = useAuth()
  const navigate = useNavigate()
  const {
    unoFoto,
    dosFoto,
    tresFoto,
    cuatroFoto,
    cincoFoto,
    seisFoto,
    sieteFoto,
    ochoFoto,
    nueveFoto,
    diezFoto,
    onceFoto,
    doceFoto} = useImageContext()

  const handleChange = ({target: {name, value}}) =>    //Tomo los valores importantes del usuario con un OnChange
    setUser({...user, [name]: value})
  
  const registerUser = async(email, password, nombre, apellido, pais, telefono, postal, calle, perfil) =>{  //Con este metodo creo el registro del usuario
    const infoUser = await signup(email, password).then((userFirebase) => {
      return userFirebase
    })
    console.log(infoUser.user.uid)

    const docRef = doc(db,`usuarios/${infoUser.user.uid}`)    // Y aquí lo almaceno en firestore
    setDoc(docRef, {
      email: user.email, 
      name: nombre,
      lastName: apellido,
      country: pais,
      phone: telefono,
      codigoPostal: postal,
      street: calle,
      nroFoto: perfil
    })
  }

    const fotoPerfil = async(e) => { //Logica imagen Perfil
      e.preventDefault()
      const imgPerfil= e.target.value;
      setPerfil(imgPerfil)
    }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')

    try {
      const email = user.email
      const password = user.password

      const nombre = e.target.nombre.value;
      const apellido= e.target.apellido.value;
      const pais = e.target.pais.value;
      const telefono = e.target.telefono.value;
      const postal = e.target.postal.value;
      const calle = e.target.calle.value;
    
      await registerUser(email, password, nombre, apellido, pais, telefono, postal, calle) 
      console.log(email, password, nombre, apellido, pais, telefono, postal, calle)

      navigate('/home')
    } catch (error) {
      console.log(error)
      console.log(error.message)
      console.log(error.code)

      if(error.code === 'auth/invalid-email'){
        setError('Correo Invalido')
      }else if(error.code === 'auth/weak-password'){
        setError('La contraseña debe tener 6 caracteres como minimo')
      }
    }
  }
  
  return (
    <Box bgImage={imagen} p='4rem 0 6rem 0'>

      <Flex 
      flexDirection='column' alignItems='center' justifyContent='center'
      bgColor='blackAlpha.600' border='2px' borderColor='yellow.400' borderRadius='10px'
      w='50%' m='auto' boxShadow='1px 1px 10px 2px white' 
      fontFamily='sans-serif'>

        <Heading p='1.5rem 0 1rem 0' color='white' textShadow='1px 1px black'> Crear Usuario </Heading>

        {error && <Text bgColor='#f130308a' borderBottom='2px' borderTop='2px' w='100%' p='.3rem 0 .3rem 0'
        as='b' color='#cf0101' textShadow='.5px .5px black' display='flex' justifyContent='center'>{error}</Text>} 

        <VStack color='white' textShadow='1px 1px black'>

          <form onSubmit={handleSubmit} className="datosUser" >

            <VStack w='100%' alignItems='flex-start'>
              <FormLabel fontSize='1.5rem'>Email:</FormLabel>
              <Input name='email' type='email' onChange={handleChange}
              placeholder='pepe@hotmail.com' _placeholder={{ textAlign:'center'}} 
              border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400', bgColor:'blackAlpha.400'}}
              textAlign='center' bgColor='blackAlpha.600'/>
            </VStack>
          

            <VStack w='100%' alignItems='flex-start'>
              <FormLabel mt='1rem' fontSize='1.5rem'>Password:</FormLabel>
              <InputGroup>
                <Input name='password' type={show ? 'text' : 'password'} onChange={handleChange}
                placeholder='Minimo 6 caracteres' _placeholder={{ textAlign:'center'}} 
                border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400', bgColor:'blackAlpha.400'}}
                textAlign='center' bgColor='blackAlpha.600'/>
                <InputRightElement w='4rem'>
                <Button h='1.75rem' bgColor='blackAlpha.100' _hover={{bgColor:'blackAlpha.100'}} onClick={()=>setShow(!show)}>
                  {show ? <Icon as={ViewOffIcon}/> : <Icon as={ViewIcon}/>}
                </Button>
                </InputRightElement>
              </InputGroup>
            </VStack>

            <HStack className='entrada'>
              <VStack alignItems='flex-start' >
                <FormLabel>Nombre:</FormLabel>
                <Input name='nombre' type='text' 
                placeholder='Pepe' _placeholder={{ textAlign:'center'}} 
                border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400', bgColor:'blackAlpha.400'}}
                textAlign='center' bgColor='blackAlpha.600'/>
              </VStack>
              <VStack alignItems='flex-start'>
                <FormLabel>Apellido:</FormLabel>
                <Input name='apellido' type='text' 
                placeholder='Sancho' _placeholder={{ textAlign:'center'}} 
                border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400', bgColor:'blackAlpha.400'}}
                textAlign='center' bgColor='blackAlpha.600'/>
              </VStack>
            </HStack>

            <HStack className='entrada'>
              <VStack alignItems='flex-start' >
                <FormLabel>País:</FormLabel>
                <Input name='pais' type='text' 
                placeholder='Argentina' _placeholder={{ textAlign:'center'}} 
                border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400', bgColor:'blackAlpha.400'}}
                textAlign='center' bgColor='blackAlpha.600'/>
              </VStack>
              <VStack alignItems='flex-start'>
                <FormLabel>Telefono:</FormLabel>
                <Input name='telefono' type='tel'  
                placeholder='+54 381 000 0000' _placeholder={{ textAlign:'center'}} 
                border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400', bgColor:'blackAlpha.400'}}
                textAlign='center' bgColor='blackAlpha.600'/>
              </VStack>
            </HStack>

            <HStack className='entrada'>
              <VStack alignItems='flex-start' >
                <FormLabel>Codigo postal:</FormLabel>
                <Input name='postal' type='text'  
                placeholder='****' _placeholder={{ textAlign:'center'}} 
                border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400', bgColor:'blackAlpha.400'}}
                textAlign='center' bgColor='blackAlpha.600'/>
              </VStack>
              <VStack alignItems='flex-start'>
                <FormLabel>Direccion del Hogar:</FormLabel>
                <Input name='calle' type='text'  placeholder='Plaza Sesamo 150' _placeholder={{ textAlign:'center'}} 
                border='2px' _focus={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400', bgColor:'blackAlpha.400'}}
                textAlign='center' bgColor='blackAlpha.600'/>
              </VStack>
            </HStack>   

            <Button 
            onClick={()=>changeDisplay('flex')}
            m='1rem auto 1rem 9.5rem'
            border='2px' borderColor='white'
            bgColor='blackAlpha.600'
            _hover={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400'}}>
              <FaNapster/> 
              <Text pl='5px'>Foto de Perfil</Text> 
            </Button>

            <Flex
            w="40rem"
            bgColor="rgb(5, 2, 49)"
            zIndex={20}
            h="30rem"
            pos='absolute'
            m='auto'
            top="30rem"
            overflowY="auto"
            flexDir="column"
            display={display}
            borderRadius='10px' border='2px' borderColor='yellow.400'
            boxShadow='2px 3px 7px 4px black'
            >  
              <VStack>
                <HStack pt='1.5rem' alignItems='center' justifyContent='center'>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={unoFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                    {
                      perfil === unoFoto
                      ?
                      <Image src={unoFoto} h='100px' alt="" border='2px' p='1px' bgColor='blue.400' boxShadow='1px 1px 7px 4px white'/>
                      :
                      <Image src={unoFoto} h='100px' alt="" border='2px' p='1px' bgColor='blue.400'/>
                    }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={dosFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                  {
                      perfil===dosFoto
                      ?
                      <Image src={dosFoto} h='100px' alt="" border='2px' p='1px' bgColor='red.400' boxShadow='1px 1px 7px 4px white'/>
                      :
                      <Image src={dosFoto} h='100px' alt="" border='2px' p='1px' bgColor='red.400'/>
                    }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={tresFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                  {
                    perfil===tresFoto
                    ?
                    <Image src={tresFoto} h='100px' alt="" border='2px' p='1px' bgColor='yellow.400' boxShadow='1px 1px 7px 4px white'/>
                    :
                    <Image src={tresFoto} h='100px' alt="" border='2px' p='1px' bgColor='yellow.400'/>
                  }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={cuatroFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil} pr='1.1rem'>
                  {
                    perfil===cuatroFoto
                    ?
                    <Image src={cuatroFoto} h='100px' alt="" border='2px' p='1px' bgColor='gray.400' boxShadow='1px 1px 7px 4px white'/>
                    :
                    <Image src={cuatroFoto} h='100px' alt="" border='2px' p='1px' bgColor='gray.400'/>
                  }
                  </Checkbox>
                </HStack>

                <HStack pt='1rem' alignItems='center' justifyContent='center'>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={cincoFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                    {
                      perfil===cincoFoto
                      ?
                      <Image src={cincoFoto} h='100px' alt="" border='2px' p='1px' bgColor='gray.400' boxShadow='1px 1px 7px 4px white'/>
                      :
                      <Image src={cincoFoto} h='100px' alt="" border='2px' p='1px' bgColor='gray.400'/>
                    }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={seisFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                  {
                      perfil===seisFoto
                      ?
                      <Image src={seisFoto} h='100px' alt="" border='2px' p='1px' bgColor='yellow.400' boxShadow='1px 1px 7px 4px white'/>
                      :
                      <Image src={seisFoto} h='100px' alt="" border='2px' p='1px' bgColor='yellow.400'/>
                    }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={sieteFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                  {
                      perfil===sieteFoto
                      ?
                      <Image src={sieteFoto} h='100px' alt="" border='2px' p='1px' bgColor='red.400' boxShadow='1px 1px 7px 4px white'/>
                      :
                      <Image src={sieteFoto} h='100px' alt="" border='2px' p='1px' bgColor='red.400'/>
                    }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={ochoFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil} pr='1.1rem'>
                  {
                      perfil===ochoFoto
                      ?
                      <Image src={ochoFoto} h='100px' alt="" border='2px' p='1px' bgColor='yellow.400' boxShadow='1px 1px 7px 4px white'/>
                      :
                      <Image src={ochoFoto} h='100px' alt="" border='2px' p='1px' bgColor='yellow.400'/>
                    }
                  </Checkbox>
                </HStack>

                <HStack pt='1rem' pb='.4rem' alignItems='center' justifyContent='center'>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={nueveFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                    {
                      perfil===nueveFoto
                      ?
                      <Image src={nueveFoto} h='100px' alt="" border='2px' p='1px' bgColor='red.400' boxShadow='1px 1px 7px 4px white'/>
                      :
                      <Image src={nueveFoto} h='100px' alt="" border='2px' p='1px' bgColor='red.400'/>
                    }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={diezFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                  {
                      perfil===diezFoto
                      ?
                      <Image src={diezFoto} h='100px' alt="" border='2px' p='1px' bgColor='blue.400' boxShadow='1px 1px 7px 4px white'/>
                      :
                      <Image src={diezFoto} h='100px' alt="" border='2px' p='1px' bgColor='blue.400'/>
                    }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={onceFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil}>
                  {
                    perfil===onceFoto
                    ?
                    <Image src={onceFoto} h='100px' alt="" border='2px' p='1px' bgColor='gray.400' boxShadow='1px 1px 7px 4px white'/>
                    :
                    <Image src={onceFoto} h='100px' alt="" border='2px' p='1px' bgColor='gray.400'/>
                  }
                  </Checkbox>
                  <Checkbox borderColor='rgb(5, 2, 49)' value={doceFoto} name='imgPerfil' isChecked={false} onChange={fotoPerfil} pr='1.1rem'>
                  {
                    perfil===doceFoto
                    ?
                    <Image src={doceFoto} h='100px' alt="" border='2px' p='1px' bgColor='blue.400' boxShadow='1px 1px 7px 4px white'/>
                    :
                    <Image src={doceFoto} h='100px' alt="" border='2px' p='1px' bgColor='blue.400'/>
                  }
                  </Checkbox>
                </HStack>

                  <Button w='30%' color='yellow.400' bgColor='blackAlpha.700' border='2px' borderColor='yellow.400' _hover={{boxShadow:'1px 1px 5px 1px white'}} onClick={()=>changeDisplay('none')}> Listo </Button>

              </VStack>

            </Flex> 

            {perfil 
              ? 
            <>
              <Image src={perfil} h='100px' m='auto'/>
              <Input w='50%' type="submit" value='Registrate' display='flex' alignItems='center' justifyContent='center' color='white' bgColor='blackAlpha.600' border='2px' m='1rem auto 0 auto' _hover={{boxShadow:'0px 0px 4px 1px white', borderColor:'yellow.400'}}/>
            </>
              :
            <HStack display='flex' justifyContent='center'>
              <Icon as={WarningIcon} w='1.1rem' boxShadow='1px 1px black' borderRadius='10px'/>
              <Text fontSize='1.1rem' textShadow='1px 1px black'>Llena todos los campos y elige un avatar</Text>
            </HStack>
            }
          </form>

          <NavLink to='/'>
            <Text color='yellow.200' fontSize='1.1rem' textShadow='1px 1px black' mb='1rem' _hover={{color:'yellow.400', fontSize:'1.2rem'}}> Ya tengo una cuenta </Text>
          </NavLink>

        </VStack>
          
      </Flex>
    </Box>
  )
}

  // const navegar = useNavigate();

  //   const [email, setEmail] = useState('')
  //   const [password, setPassword] = useState('');

  //   const onSubmit = async (e) => {
      
  //     e.preventDefault()

  //     await createUserWithEmailAndPassword(auth, email, password)
  //       .then( userCredential => {
  //           // Signed in
  //           const user = userCredential.user;
  //           console.log(user);
  //           navegar("/login")
  //           // ...
  //       })
  //       .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           console.log(errorCode, errorMessage);
  //           // ..
  //       });}

