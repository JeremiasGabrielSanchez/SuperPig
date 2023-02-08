import { React, useState, useEffect } from 'react'
import { HStack } from '@chakra-ui/react'
import ItemList from '../../Item/ItemList'
import { customFetch } from '../Tool/customFetch'
import { products } from '../../assets/products'
import BgGrande from "../../assets/bg-body.png"


function ItemListContainer() {
  
  const [listProduct, setListProduct] = useState ([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    customFetch(products)
      .then(res =>{ 
        setLoading(false)
        setListProduct(res)})
  }, [])
  
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