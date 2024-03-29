import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { HStack } from '@chakra-ui/react'
import ItemList from '../Item/ItemList'

import {db} from '../Tool/firebase'
import { collection, getDocs } from 'firebase/firestore'

import { Spinner } from '@chakra-ui/react'
import BgGrande from "../../assets/bg-body.png"
import Comics from "../../assets/comic.png"
import Figuras from "../../assets/figuras.png"
import Mangas from "../../assets/manga.png"
import Juguetes from "../../assets/juguetes.png"

function ItemListContainer() {
  
  const [listProduct, setListProduct] = useState ([])
  const [loading, setLoading] = useState(true)
  const [backGraund, setBackGraund] = useState()

  const { category } = useParams()

  useEffect(()=>{

    setLoading(true)

    const mercancia = collection(db, "productos")

    const consulta = getDocs(mercancia)

    consulta
    .then( res =>{

      const stock = res.docs.map(doc => {
        return{
          ...doc.data(),
          id: doc.id
        }
      })

      if(category){
        setLoading(false)
        setListProduct(stock.filter(prod => prod.category === category))
        if(category === "comics"){
                  setBackGraund(Comics)
                }else if (category === "figuras"){
                  setBackGraund(Figuras)
                }
                else if (category === "mangas"){
                  setBackGraund(Mangas)
                }else{
                  setBackGraund(Juguetes)
                }
            }else{
              setBackGraund(BgGrande)
              setLoading(false)
              setListProduct(stock)
              }

    }) //fin del then
    .catch(err => (console.log(err)))

  }, [category])
  
  return (
    <HStack bgImage={prop => backGraund} bgRepeat='repeat'>
      {!loading 
      ? 
      <ItemList listProduct={listProduct}/>
      : 
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        ml='49%'
        mt='17%'
        mb='20rem'
      />}
    </HStack>
  )
}
export default ItemListContainer