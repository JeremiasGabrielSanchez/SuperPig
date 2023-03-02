import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./component/AllNavBar/NavBar";
import ItemListContainer from "./component/Body/ItemListContainer";
import ItemDetailContainer from "./component/Body/ItemDetailContainer";
import ScreenInitial from "./component/Body/ScreenInitial";
import Cart from "./component/Body/CartView";
import theme from "./assets/theme";
import CartContextProvider from "./context/CartContext";

function App() {
  return (

    <ChakraProvider theme={theme}>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ScreenInitial/>}/>
            <Route path="/home" element={<ItemListContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/category/:category/:id" element={<ItemDetailContainer/>}/>
            <Route path="/home/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}
export default App;
