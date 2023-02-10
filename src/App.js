import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./component/AllNavBar/NavBar";
import ItemListContainer from "./component/Body/ItemListContainer";
import Theme from "./assets/Theme";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/product/:products" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
