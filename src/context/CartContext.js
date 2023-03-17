import { createContext, useContext, useState} from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../component/Tool/firebase'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider( {children} ) {

  const [cartList, setCartList] = useState([])
  const [userList, setUserList] = useState({})

  const isInCart = (id) => { cartList.find( prod => prod.id === id ) }

  const addToCart = (item, quantity) => {
      if(isInCart(item.id)){
        const newCart = cartList.map(prod => {
        if(prod.id === item.id){
          const newQuatity = prod.quatity + quantity 
          return{ ...prod, quantity: newQuatity}
        }else{ return prod }
      })
      setCartList(newCart)
    }else{
      const newProduct = {...item, quantity: quantity}
      setCartList([...cartList, newProduct])
    }
  }

  const addToUser = (item, cant, user) =>{ 

    const newOrden = {...item, quantity: cant, email:user.email, priceTotal: cant*item.price}
    setUserList(newOrden)
  }

  
  const addToUserOfCart = ( product, cantidad, precio, usuario) =>{

    const newUser = {...product, totalPrice: cantidad*precio, email: usuario.email}
    setUserList(newUser)
  }

  const confirmarCompra = ()=>{
    const ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, userList)
  }

  console.log(userList)
  console.log(cartList)

  const removeProduct = (id) => { 
    setCartList(cartList.filter(prod => prod.id !== id))
  }

  const totalPrice = () => {
    return cartList.reduce((acc, product) => acc += (product.price * product.quantity), 0)
  }

  const totalQuatity = () => {
    return cartList.reduce((acc, product) => acc += product.quantity, 0)
  }

  const clean = () => { setCartList([])}

  return (
    <CartContext.Provider value={{
      addToCart, 
      cartList,
      addToUser,
      confirmarCompra,
      addToUserOfCart,
      removeProduct,
      totalPrice,
      totalQuatity,
      clean
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider