import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { products } from '../../assets/products';
import { customFetch } from '../Tool/customFetch';
import ItemDetail from '../../Item/ItemDetail';

import {db} from '../Tool/firebase'
import { collection, getDoc, getDocs } from 'firebase/firestore'

import Comics from "../../assets/comic.png"
import Figuras from "../../assets/figuras.png"
import Mangas from "../../assets/manga.png"
import Juguetes from "../../assets/juguetes.png"

function ItemDetailContainer() {

  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [backGraund, setBackGraund] = useState() 

  const {id, category} = useParams()

  // useEffect(() => {
  //   customFetch(products)
  //     .then(res =>{
  //       setLoading(false)
  //       setListProduct(res.find(item => item.id === parseInt(id)))
  //       if(category === "comics"){
  //         setBackGraund(Comics)
  //       }else if (category === "figuras"){
  //         setBackGraund(Figuras)
  //       }
  //       else if (category === "mangas"){
  //         setBackGraund(Mangas)
  //       }else{
  //         setBackGraund(Juguetes)
  //       }
  //     })
  //   }, [id, category])
    
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

  }, [id, category])

    return (
      <Box bgImage={prop => backGraund}>
        {!loading ? <ItemDetail listProduct={listProduct}/> : <h1> Cargando...</h1>}
      </Box>
  )
}

export default ItemDetailContainer