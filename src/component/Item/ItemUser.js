import { Button } from '@chakra-ui/react'

function ItemUser({cantidad, onUser}) {

  return (
    <Button bgColor='green.300' onClick={()=> onUser(cantidad)}> Comprar </Button>
  )
}

export default ItemUser