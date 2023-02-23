import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { Text, Heading, Button, Flex } from '@chakra-ui/react' 
import { db } from './firebase'
import { useParams } from 'react-router-dom'
import {FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";

function ItemCount({stock, onAdd}) {

    const {id} = useParams()

    const [count, setCount] = useState(1)
    const [listPrice, setListPrice] = useState({})
    const [loading, setLoading] = useState(true)
    
    
    useEffect(()=>{
      
      setLoading(false)
      
      const mercancia = collection(db, "productos")
      const consulta = getDocs(mercancia)
  
      consulta
      .then( res =>{
        const array = res.docs.map(doc => {
          return{
            ...doc.data(),
            id: doc.id}
        })
          setListPrice(array.find(item => item.id === id))       
        })
    },[id])

    console.log(loading)//Puesto para que no de error a la hora de hacer el comitear

    const suma = () => count < stock && setCount(count + 1)

    const resta = () => count > 1 && setCount(count - 1)

  return (
    <Flex alignItems="center">

      <Flex flexDir='column' alignItems="center">

        <Flex alignItems="center">
          <Button bg='#f1efeff8' _hover={{backgroundColor:'#f1efeff8', color:'red', fontSize:'1.1rem'}} onClick={resta}> <FaRegMinusSquare/> </Button>
          <Text> {count} </Text>
          <Button  bg='#f1efeff8' _hover={{backgroundColor:'#f1efeff8', color:'green', fontSize:'1.1rem'}} onClick={suma}> <FaRegPlusSquare/> </Button>
        </Flex>

        <Flex borderTop='1px' mt=''>
          <Text fontSize='0.8rem' color='green.600' textShadow='0.5px 0.5px #000'> Stock: {listPrice.stock} </Text>
        </Flex>

      </Flex>

      <Heading ml='1rem'> ${listPrice.price} </Heading>

    </Flex>
  )
}

export default ItemCount