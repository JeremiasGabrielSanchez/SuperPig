import React from 'react'
import { Flex, Grid, GridItem, Text, Heading, Button, Link } from '@chakra-ui/react'
import CartWidget from '../component/AllNavBar/CartWidget';
import { FaInstagram, FaGithub, FaFacebookSquare } from "react-icons/fa";

function ItemDetail({listProduct}) {

  return (
    <Flex>
      <Flex 
        display={['none', 'none', 'flex', 'flex']}
        pb="8rem"
      >

        <Grid
        templateAreas={`"header header"
                    "nav main"
                    "footer footer"`}
        gridTemplateRows={'70px 1fr 50px'}
        gridTemplateColumns={'400px 1fr'}
        w='80%'
        border="2px"
        borderRadius="10px"
        color='blackAlpha.700'
        fontWeight='bold'
        m="2.5% auto 0 auto"
        >
          <GridItem p='4' bg='#aaa8a8f8' area={'header'} display="flex" alignItems="center" justifyContent="center" borderBottom="2px">
            <Heading fontSize="3.5rem">
              {listProduct.product} 
            </Heading> 
          </GridItem>
        
          <GridItem p='2' bg='#c7c6c6f8' area={'nav'} display="flex" alignItems="center" justifyContent="center" > 
            <img src={listProduct.image} alt="" w="80%"/>
          </GridItem>
        
          <GridItem pl='2' bg='#f1efeff8' area={'main'} borderLeft="2px"> 
            <Heading m="1rem" fontSize="3rem">
              Descripcion
              <Text mt="1.5rem" p="1rem" fontSize="2rem" borderTop="2px"  borderColor="#00000070">
                {listProduct.info} 
              </Text>
            </Heading>
            <Flex justifyContent="flex-end" alignItems="center" m="3rem 5% 2rem">
              <Heading m="1rem" fontSize="2rem" >
                ${listProduct.price}
              </Heading>
              <Button bgColor="#aaa8a8f8" color="white" border="2px" borderColor="yellow.400" 
                _hover={{color:"#535353", bgColor:"#c7c6c6f8", borderColor:"yellow.200"}}> 
                  <CartWidget/> 
              </Button>
            </Flex>
            <Flex justifyContent="center" mt="3rem" mb="1rem">
              <Button fontSize="1.5rem" p="1.7rem" width="90%" bgColor="#aaa8a8f8" color="white" border="2px" borderColor="yellow.400" textShadow='1px 1px #000' 
                _hover={{color:"#535353", bgColor:"#c7c6c6f8", borderColor:"yellow.200"}}> 
                Ir a comentarios 
              </Button>
            </Flex>
          </GridItem>

          <GridItem bg='#008cffef' area={'footer'} borderTop="2px" borderColor='blackAlpha.700'
          display="flex" alignItems="center" justifyContent="center"
          fontSize="2rem" color="whiteAlpha.800"
          >
              <Link href='https://github.com/JeremiasGabrielSanchez/SuperPig' mr="2rem" _hover={{color:"white", fontSize:"2.2rem"}}> <FaGithub/> </Link>
              <Link href='https://www.instagram.com/jere_99sanchez/?igshid=ZDdkNTZiNTM%3D' mr="2rem" _hover={{color:"white", fontSize:"2.2rem"}}> <FaInstagram/> </Link>
              <Link href='https://www.facebook.com/jeremias.sanchez.16' mr="2rem" _hover={{color:"white", fontSize:"2.2rem"}}> <FaFacebookSquare/> </Link>
          </GridItem>
        </Grid>
      </Flex>

{/* -------------------------------------- MIN SCREEN ------------------------------------------------*/}
    
      <Flex 
        display={['flex', 'flex', 'none', 'none']}
        paddingBottom="11rem"
      >
      
        <Grid
        templateAreas={`"header header"
                    "nav main"
                    "footer footer"`}
        gridTemplateRows={'55px 1fr 50px'}
        gridTemplateColumns={'350px 1fr'}
        w='80%'
        border="2px"
        borderRadius="5px"
        color='blackAlpha.700'
        fontWeight='bold'
        m="2.5% auto 0 auto"
        >
          <GridItem p='4' bg='orange.300' area={'header'} display="flex" alignItems="center" justifyContent="center">
            <Heading fontSize="2.5rem">
              {listProduct.product} 
            </Heading> 
          </GridItem>
        
        <GridItem p='2' bg='pink.300' area={'nav'} display="flex" alignItems="center" justifyContent="center"> 
            <img src={listProduct.image} alt="" height="80%"/>
          </GridItem>
        
          <GridItem pl='2' bg='green.300' area={'main'}> 
            <Heading m="1rem" fontSize="2rem">
              Descripcion
              <Text mt="1rem" p="1rem" fontSize="1.2rem" borderTop="2px"  borderColor="#00000070">
                {listProduct.info} 
              </Text>
            </Heading>
            <Flex justifyContent="flex-end" alignItems="center" m="1rem 5% 1rem">
              <Heading m="1rem" fontSize="2rem" >
                ${listProduct.price}
              </Heading>
              <Button bgColor="#00000070" color="white" border="2px" borderColor="yellow.300" 
                _hover={{color:"black", bgColor:"#ffffff70", borderColor:"yellow.100"}}> 
                  <CartWidget/> 
              </Button>
            </Flex>
            <Flex justifyContent="center" m="2rem 0 1rem">
              <Button p="1rem" width="90%" bgColor="#00000070" color="white" border="2px" borderColor="yellow.300" 
                _hover={{color:"black", bgColor:"#ffffff70", borderColor:"yellow.100"}}> 
                Ir a comentarios 
              </Button>
            </Flex>
          </GridItem>

          <GridItem bg='#008cffef' area={'footer'} borderTop="2px" borderColor='blackAlpha.700'
          display="flex" alignItems="center" justifyContent="center"
          fontSize="2rem" color="whiteAlpha.800"
          >
              <Link href='https://github.com/JeremiasGabrielSanchez/SuperPig' mr="2rem" _hover={{color:"white", fontSize:"2.2rem"}}> <FaGithub/> </Link>
              <Link href='https://www.instagram.com/jere_99sanchez/?igshid=ZDdkNTZiNTM%3D' mr="2rem" _hover={{color:"white", fontSize:"2.2rem"}}> <FaInstagram/> </Link>
              <Link href='https://www.facebook.com/jeremias.sanchez.16' mr="2rem" _hover={{color:"white", fontSize:"2.2rem"}}> <FaFacebookSquare/> </Link>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default ItemDetail