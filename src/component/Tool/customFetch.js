import { useCartContext } from "../../context/CartContext"

export const customFetch = (products) => {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}