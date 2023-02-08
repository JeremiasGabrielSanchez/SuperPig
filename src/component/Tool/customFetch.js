export const customFetch = (products) => {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}