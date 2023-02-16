import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./component/AllNavBar/NavBar";
import ItemListContainer from "./component/Body/ItemListContainer";
import ItemDetailContainer from "./component/Body/ItemDetailContainer";
import ScreenInitial from "./component/Body/ScreenInitial";
import Theme from "./assets/Theme";
import './component/Tool/firebase';

function App() {
  return (

    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ScreenInitial/>}/>
          <Route path="/home" element={<ItemListContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/home/product/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
