import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { HStack } from '@chakra-ui/react'
import ItemList from '../../Item/ItemList'
import { customFetch } from '../Tool/customFetch'
import { products } from '../../assets/products'
import BgGrande from "../../assets/bg-body.png"


function ItemListContainer() {
  
  const [listProduct, setListProduct] = useState ([])
  const [loading, setLoading] = useState(true)

  const { category } = useParams()

  useEffect(()=>{
    setLoading(true)
    customFetch(products)
      .then(res =>{ 
        if(category){
          setLoading(false)
          setListProduct(res.filter(prod => prod.category === category))
          }else{
            setLoading(false)
            setListProduct(res)
          }
        })
  }, [category])
  
  return (
    <HStack bgImage={BgGrande}>
      {!loading 
      ? 
      <ItemList listProduct={listProduct}/>
      : 
      <h1>Cargando</h1>}
    </HStack>
  )
}

export default ItemListContainer