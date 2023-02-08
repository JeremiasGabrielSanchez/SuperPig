import { Grid, Flex } from "@chakra-ui/react"
import Item  from "./Item"

const ItemList = ({listProduct}) => {
  return(
    <Flex>
      <Flex
      display={['none', 'none', 'flex', 'flex']}>
        <Grid templateColumns="repeat(3, 1fr)" gap="1">
          {listProduct.map(products => <Item key={products.id} producto={products}/>)}
        </Grid>
      </Flex>

      <Flex
      display={['flex', 'flex','none', 'none']}>
        <Grid templateColumns="repeat(2, 1fr)" gap="1">
          {listProduct.map(products => <Item key={products.id} producto={products}/>)}
        </Grid>
      </Flex>
    </Flex>
  )
}

export default ItemList