import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../assets/products';
import { customFetch } from '../Tool/customFetch';
import ItemDetail from '../../Item/ItemDetail';

function ItemDetailContainer() {

  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
    customFetch(products)
      .then(res =>{
        setLoading(false)
        setListProduct(res.find(item => item.id === parseInt(id)))
      })
    }, [id])
    
    return (
      <>
        {!loading ? <ItemDetail listProduct={listProduct}/> : <h1> Cargando...</h1>}
      </>
  )
}

export default ItemDetailContainer