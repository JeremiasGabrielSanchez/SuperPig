import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { products } from '../../assets/products';
import { customFetch } from '../Tool/customFetch';
import ItemDetail from '../../Item/ItemDetail';
import Comics from "../../assets/comic.png"
import Figuras from "../../assets/figuras.png"
import Mangas from "../../assets/manga.png"
import Juguetes from "../../assets/juguetes.png"

function ItemDetailContainer() {

  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [backGraund, setBackGraund] = useState() 

  const {id, category} = useParams()

  useEffect(() => {
    customFetch(products)
      .then(res =>{
        setLoading(false)
        setListProduct(res.find(item => item.id === parseInt(id)))
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
      })
    }, [id, category])
    
    

    return (
      <Box bgImage={prop => backGraund}>
        {!loading ? <ItemDetail listProduct={listProduct}/> : <h1> Cargando...</h1>}
      </Box>
  )
}

export default ItemDetailContainer