import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./component/AllNavBar/NavBar";
import ItemListContainer from "./component/Body/ItemListContainer";
import theme from "./assets/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <ItemListContainer/>
    </ChakraProvider>
  );
}
export default App;
