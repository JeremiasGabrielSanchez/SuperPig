import React from 'react'
import { Flex, Grid, GridItem, Text, Heading, Button } from '@chakra-ui/react'
import CartWidget from '../component/AllNavBar/CartWidget';

function ItemDetail({listProduct}) {

  return (
    <Flex>
      <Flex 
        display={['none', 'none', 'flex', 'flex']}
      >

        <Grid
        templateAreas={`"header header"
                    "nav main"
                    "footer footer"`}
        gridTemplateRows={'65px 1fr 50px'}
        gridTemplateColumns={'450px 1fr'}
        w='80%'
        gap='0.5'
        color='blackAlpha.700'
        fontWeight='bold'
        m="2.5% auto 0 auto"
        >
          <GridItem p='4' bg='orange.300' area={'header'} display="flex" alignItems="center" justifyContent="center">
            <Heading fontSize="3.5rem">
              {listProduct.product} 
            </Heading> 
          </GridItem>
        
          <GridItem p='2' bg='pink.300' area={'nav'} display="flex" alignItems="center" justifyContent="center"> 
            <img src={listProduct.image} alt="" height="80%"/>
          </GridItem>
        
          <GridItem pl='2' bg='green.300' area={'main'}> 
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
              <Button bgColor="#00000070" color="white" border="2px" borderColor="yellow.300" 
                _hover={{color:"black", bgColor:"#ffffff70", borderColor:"yellow.100"}}> 
                  <CartWidget/> 
              </Button>
            </Flex>
            <Flex justifyContent="center" mt="4rem">
              <Button p="1.7rem" width="90%" bgColor="#00000070" color="white" border="2px" borderColor="yellow.300" 
                _hover={{color:"black", bgColor:"#ffffff70", borderColor:"yellow.100"}}> 
                Ir a comentarios 
              </Button>
            </Flex>
          </GridItem>

          <GridItem pl='2' bg='blue.300' area={'footer'}></GridItem>
        </Grid>
      </Flex>

{/* -------------------------------------- MIN SCREEN ------------------------------------------------*/}
    
      <Flex 
        display={['flex', 'flex', 'none', 'none']}
      >
      
        <Grid
        templateAreas={`"header header"
                    "nav main"
                    "footer footer"`}
        gridTemplateRows={'55px 1fr 50px'}
        gridTemplateColumns={'350px 1fr'}
        w='80%'
        gap='0.5'
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

          <GridItem pl='2' bg='blue.300' area={'footer'}></GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default ItemDetail