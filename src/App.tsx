import { 
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { MyHeader } from './components/Header/Header';
import { LoginBox } from './components/LoginBox/LoginBox';
import { login } from './services/login';


function App() {
  return (
    <ChakraProvider>
      <MyHeader title='DIO BANK Desafio 2'></MyHeader>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <LoginBox event={login} title="Faça o login"></LoginBox>
      </Box>
    </ChakraProvider>
  );
}

export default App;
