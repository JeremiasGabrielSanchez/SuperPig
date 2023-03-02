import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import ItemDetail from '../Item/ItemDetail';


import {db} from '../Tool/firebase'
import { collection, getDocs } from 'firebase/firestore'

import Comics from "../../assets/comic.png"
import Figuras from "../../assets/figuras.png"
import Mangas from "../../assets/manga.png"
import Juguetes from "../../assets/juguetes.png"

function ItemDetailContainer() {

  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [backGraund, setBackGraund] = useState() 

  const {id} = useParams()


    
  useEffect(()=>{

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

        setLoading(false)
        setListProduct(stock.find(item => item.id === id))

        const categoria = stock.find(item => item.id === id)
        
        if(categoria.category === "comics"){
          setBackGraund(Comics)
          }else if (categoria.category === "figuras"){
            setBackGraund(Figuras)
          }
          else if (categoria.category === "mangas"){
            setBackGraund(Mangas)
          }else{
            setBackGraund(Juguetes)
          }
                

    }) //fin del then
    .catch(err => (console.log(err)))

  }, [id])

    return (
      <Box bgImage={prop => backGraund}>
        {
        !loading ?
          <>
            <ItemDetail listProduct={listProduct}/> 
          </>
        : 
          <h1> Cargando...</h1>}
      </Box>
  )
}

export default ItemDetailContainer