import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./component/AllNavBar/NavBar";
import ItemListContainer from "./component/Body/ItemListContainer";
import ItemDetailContainer from "./component/Body/ItemDetailContainer";
import ScreenInitial from "./component/Body/ScreenInitial";
import Cart from "./component/Body/CartView";
import theme from "./assets/theme";
import CartContextProvider from "./context/CartContext";
import AuthProvider from './context/authContext';
import ImageContextProvider from './context/ImageContext';
import { Registrarse } from "./component/user/Signup";
import ProtectedRoute from "./component/user/ProtectedRoute";
import LoginView from "./component/user/LoginView";

function App() {
  return (

    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CartContextProvider>
        <ImageContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ScreenInitial/>}/>
              <Route path="/home" element={<ItemListContainer/>}/>
              <Route path="/category/:category" element={<ItemListContainer/>}/>
              <Route path="/category/:category/:id" element={<ItemDetailContainer/>}/>
              <Route path="/home/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<ProtectedRoute> <Cart/> </ProtectedRoute>}/>
              <Route path='/register' element={<Registrarse/>}></Route>
              <Route path="/user" element={<ProtectedRoute> <LoginView/></ProtectedRoute>}></Route>
            </Routes>
          </BrowserRouter>
        </ImageContextProvider>
        </CartContextProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
export default App;
