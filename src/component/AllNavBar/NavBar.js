import { React, useState } from 'react'
import { Heading, HStack, Spacer, Link, Flex, Text, IconButton} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { GiIfrit, GiBatMask, GiAura, GiAmbulance, GiVibratingSmartphone } from "react-icons/gi";
import CartWidget from './CartWidget';
import Logo from "../../assets/Logo-SuperPig.png";
import BgMini from "../../assets/bg-mini.png";

function NavBar() {

  const [display, changeDisplay] = useState('none')

  return (
      <HStack bg="#222" padding="1rem" border="4px" borderColor="black" > 
          <Heading color="white" ml="0.7rem">Super PIG</Heading>
          <img src={Logo} alt="Cerdito" width={"70px"} />
          
          <Spacer/>
          
          <Flex
            pos="fidex"
            top="1rem"
            right="1rem"
            alig="center"
          >
            <Flex
              display={['none', 'none', 'flex', 'flex']}
            >
              <HStack>
                <Link href='/' display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1.2rem"} mr="10px" 
                      bgColor={"#444"} padding="7px" border="2px" borderColor="#111" borderRadius="5px"> 
                  <GiBatMask/>
                  <Text ml="5px"> Comics </Text> 
                </Link>

                <Link href='/' display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1.2rem"} mr="10px"
                bgColor={"#444"} padding="7px" border="2px" borderColor="#111" borderRadius="5px"> 
                  <GiIfrit/> 
                  <Text ml="5px"> Figuras </Text> 
                </Link>

                <Link href='/' display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1.2rem"} mr="10px"
                bgColor={"#444"} padding="7px" border="2px" borderColor="#111" borderRadius="5px">
                  <GiAmbulance/> 
                  <Text ml="5px"> Juguetes </Text>
                </Link>

                <Link href='/' display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1.2rem"} mr="10px"
                bgColor={"#444"} padding="7px" border="2px" borderColor="#111" borderRadius="5px">
                  <GiAura/>
                  <Text ml="5px"> Mangas </Text>
                  </Link>
                
                <Flex flexDir="column" bgColor={"#444"} padding="7px" border="2px" borderColor="yellow.500" borderRadius="5px" >
                  <Link href='/' display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1rem"} > 
                    <GiVibratingSmartphone/> 
                    <Text ml="5px"> Usuario </Text>
                  </Link>

                  <Link href='/' display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1rem"} ml="3px"> 
                    <CartWidget/>
                    <Text ml="5px"> Carrito </Text>
                  </Link>
                </Flex>
              </HStack>
            </Flex>

            <IconButton
              aria-label='Open Menu'
              size="lg"
              mr={"1rem"}
              bg={"#999"} border="2px" borderColor="#111" borderRadius="5px"
              icon={<HamburgerIcon/>}
              display={['flex', 'flex', 'none', 'none']}
              onClick={()=>changeDisplay('flex')}
            />
            
            <Flex
              display={['flex', 'flex','none', 'none']}
            >
              <Flex
              w="100vw"
              bgColor="gray.50"
              zIndex={20}
              h="100vh"
              pos="fixed"
              top="0"
              left="0"
              overflowY="auto"
              flexDir="column"
              display={display} 
              >            

                <Flex justify="center" alignItems="center" p="1rem" bg="#222" border="4px" borderColor="black">                
                  <Heading color="white" m="0 0.7rem 0 40%" fontSize="2.5rem">Super PIG</Heading>
                  <img src={Logo} alt="Cerdito" width={"90px"} /> 

                  <Spacer/>

                  <Flex>   
                    <IconButton
                      mt="0.3rem"
                      mr="2.3rem"
                      aria-label="Close Menu"
                      bg={"#999"} border="2px" borderColor="#111" borderRadius="5px"
                      icon={<CloseIcon/>}
                      onClick={()=>changeDisplay('none')}
                    />              
                  </Flex> 
                </Flex>          

                <Flex 
                  flexDir="column"
                  alignItems="center" 
                  height="100%" 
                  bgImage={BgMini} 
                  bgRepeat="no-repeat"
                  fontSize="2rem"
                  textShadow='2px 2px #000'
                >
                  <Link display="flex" alignItems="center" href='/' 
                  color="white" mt="2rem" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"> 
                    <GiBatMask/> 
                    <Text ml="5px"  textDecoration="none" > 
                      Comics 
                    </Text> 
                  </Link>

                  <Link href='/' display="flex" alignItems="center"
                  color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"> 
                    <GiIfrit/> 
                    <Text ml="5px" textDecoration="none"> 
                      Figuras
                    </Text>
                  </Link>

                  <Link href='/' display="flex" alignItems="center"
                  color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px">
                    <GiAmbulance/> 
                    <Text ml="5px" textDecoration="none"> 
                      Juguetes 
                    </Text>
                  </Link>

                  <Link href='/' display="flex" alignItems="center"
                  color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px">
                    <GiAura/> 
                    <Text ml="5px" textDecoration="none"> 
                      Mangas 
                    </Text>
                    </Link>

                  <Link href='/' display="flex" alignItems="center"
                  color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"> 
                    <CartWidget/>
                    <Text ml="5px" textDecoration="none"> 
                      Carrito 
                    </Text>
                  </Link>

                  <Link href='/' display="flex" alignItems="center"
                  color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"> 
                    <GiVibratingSmartphone/> 
                    <Text ml="5px" textDecoration="none"> 
                      Usuario 
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>  
          </Flex>
      </HStack>

  )
}

export default NavBar