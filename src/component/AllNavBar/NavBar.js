import { React, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Heading, HStack, Spacer, Link, Flex, Text, IconButton} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { GiBatMask, GiAura, GiAmbulance} from "react-icons/gi";
import { FaBook, FaRegUser } from "react-icons/fa";

import CartWidget from './CartWidget';
import Logo from "../../assets/Logo-SuperPig.png";
import BgMini from "../../assets/bg-mini.png";

function NavBar() {

  const [display, changeDisplay] = useState('none')

  return (
      <HStack bg="#222" padding="1rem" border="4px" borderColor="black" > 
          <Heading color="white" ml="0.7rem">
            <NavLink to="/home"> Super PIG </NavLink>
          </Heading>
          <NavLink to="/home">
            <img src={Logo} alt="Cerdito" width={"70px"} />
          </NavLink>
          
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
                <NavLink to="category/comics">
                <Link display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1.2rem"} mr="10px" 
                      bgColor={"#444"} padding="7px" border="2px" borderColor="#111" borderRadius="5px"
                      _hover={{fontSize:'1.3rem', shadow:'2px 2px #000000d7'}}
                      > 
                  <GiBatMask/>
                  <Text ml="5px"> Comics </Text> 
                </Link>
                </NavLink>
                

                <NavLink to="category/figuras">
                <Link display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1.2rem"} mr="10px" 
                      bgColor={"#444"} padding="7px" border="2px" borderColor="#111" borderRadius="5px"
                      _hover={{fontSize:'1.3rem', shadow:'2px 2px #000000d7'}}
                      > 
                  <GiAura/>
                  <Text ml="5px"> Figuras </Text> 
                </Link>
                </NavLink>

                <NavLink to="category/juguetes">
                <Link display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1.2rem"} mr="10px" 
                      bgColor={"#444"} padding="7px" border="2px" borderColor="#111" borderRadius="5px"
                      _hover={{fontSize:'1.3rem', shadow:'2px 2px #000000d7'}}
                      > 
                  <GiAmbulance/>
                  <Text ml="5px"> Juguetes </Text> 
                </Link>
                </NavLink>

                <NavLink to="category/mangas">
                  <Link display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1.2rem"} mr="10px" 
                  bgColor={"#444"} padding="7px" border="2px" borderColor="#111" borderRadius="5px"
                  _hover={{fontSize:'1.3rem', shadow:'2px 2px #000000d7'}}
                  > 
                    <FaBook/>
                    <Text ml="5px"> Mangas </Text> 
                  </Link>
                </NavLink>
                
                <Flex flexDir="column" bgColor={"#444"} padding="7px" border="2px" borderColor="yellow.500" borderRadius="5px" >
                  <NavLink to="category/usuario">
                    <Link display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1rem"} ml="3px"
                    _hover={{fontSize:'1.1rem', textShadow:'1px 1px #000000d7'}}
                    > 
                      <FaRegUser/>
                      <Text ml="5px"> Usuario </Text> 
                    </Link>
                    </NavLink>

                  <NavLink to="category/cart">
                    <Link display="flex" alignItems="center" textDecoration={"none"} color="white" fontSize={"1rem"} ml="3px"
                    _hover={{fontSize:'1.1rem', textShadow:'1px 1px #000000d7'}}
                    > 
                      <CartWidget/>
                      <NavLink to='/cart'>
                        <Text ml="5px"> Carrito </Text> 
                      </NavLink>
                    </Link>
                  </NavLink>
                </Flex>
              </HStack>
            </Flex>

            <IconButton
              aria-label='Open Menu'
              size="lg"
              mr={"1rem"}
              bg={"#999"} border="2px" borderColor="#111" borderRadius="5px"
              _hover={{shadow:'2px 2px 5px #000000d7', fontSize:'1.5rem'}}
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

                    <Heading color="white" m="0 0.7rem 0 40%" fontSize="2.5rem">
                      <NavLink> Super PIG </NavLink>
                    </Heading>
                    <NavLink to="/home">
                    <img src={Logo} alt="Cerdito" width={"90px"} /> 
                    </NavLink>


                  <Spacer/>

                  <Flex>   
                    <IconButton
                      mt="0.3rem"
                      mr="2.3rem"
                      p="0.6rem"
                      aria-label="Close Menu"
                      bg={"#999"} border="2px" borderColor="#111" borderRadius="5px"
                      _hover={{shadow:'2px 2px 5px #000000d7', fontSize:'1.2rem'}}
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
                  bgSize='cover' 
                  bgPosition='center'
                  bgRepeat="no-repeat"
                  fontSize="2rem"
                  textShadow='2px 2px #000'
                >
                  <NavLink to="category/comics">
                    <Link display="flex" alignItems="center"
                    color="white" m="1rem 0 1rem 0" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"
                    _hover={{fontSize:'2.2rem', shadow:'5px 5px 5px #cacacab2'}}
                    > 
                      <GiBatMask/>
                      <Text ml="5px" onClick={()=>changeDisplay('none')}> Comics </Text> 
                    </Link>
                  </NavLink>

                  <NavLink to="categoy/figuras">
                    <Link display="flex" alignItems="center"
                    color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"
                    _hover={{fontSize:'2.2rem', shadow:'5px 5px 5px #cacacab2'}}> 
                      <GiAura/>
                      <Text ml="5px" onClick={()=>changeDisplay('none')}> Figuras </Text> 
                    </Link>
                  </NavLink>

                  <NavLink to="categoy/juguetes">
                    <Link display="flex" alignItems="center"
                    color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"
                    _hover={{fontSize:'2.2rem', shadow:'5px 5px 5px #cacacab2'}}> 
                      <GiAmbulance/>
                      <Text ml="5px" onClick={()=>changeDisplay('none')}> Juguetes </Text> 
                    </Link>
                  </NavLink>

                  <NavLink to="categoy/mangas">
                    <Link display="flex" alignItems="center"
                    color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"
                    _hover={{fontSize:'2.2rem', shadow:'5px 5px 5px #cacacab2'}}> 
                      <FaBook/>
                      <Text ml="5px" onClick={()=>changeDisplay('none')}> Mangas </Text> 
                    </Link>
                  </NavLink>

                  <NavLink to="categoy/cart">
                    <Link display="flex" alignItems="center"
                    color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"
                    _hover={{fontSize:'2.2rem', shadow:'5px 5px 5px #cacacab2'}}> 
                      <CartWidget/>
                      <NavLink to='/cart'>
                        <Text ml="5px" onClick={()=>changeDisplay('none')}> Carrito </Text> 
                      </NavLink>
                    </Link>
                  </NavLink>

                  <NavLink to="categoy/usuario">
                    <Link display="flex" alignItems="center"
                    color="white" mb="1rem" bgColor="#99999957" padding="6px" border="2px" borderRadius="5px"
                    _hover={{fontSize:'2.2rem', shadow:'5px 5px 5px #cacacab2'}}> 
                      <FaRegUser/>
                      <Text ml="5px" onClick={()=>changeDisplay('none')}> Usuario </Text> 
                    </Link>
                  </NavLink>
                </Flex>
              </Flex>
            </Flex>  
          </Flex>
      </HStack>

  )
}

export default NavBar